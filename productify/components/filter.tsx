import { useEffect, useState } from "react";
import { FiltersProps } from "@/interface";

const CATEGORIES = ["all","smartphones","laptops","fragrances","skincare","groceries","home-decoration"];

export default function Filters({
  q, setQ, category, setCategory, limit, setLimit, infinite, setInfinite, loading, onApply
}: FiltersProps) {
  const [localQ, setLocalQ] = useState(q);

  useEffect(() => {
    const time = setTimeout(() => {
      setQ(localQ);
      onApply();
    }, 400);
    return () => clearTimeout(time);
    
  }, [localQ]);

  useEffect(() => setLocalQ(q), [q]);

  return (
    <section className="grid md:grid-cols-4 gap-3 mb-4">
      <label className="flex flex-col">
        <span className="text-sm font-medium mb-1">Search</span>
        <input
          className="rounded-lg border px-3 py-2"
          placeholder="Search products…"
          value={localQ}
          onChange={(e) => setLocalQ(e.target.value)}
          aria-label="Search products"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm font-medium mb-1">Category</span>
        <select
          className="rounded-lg border px-3 py-2"
          value={category}
          onChange={(e) => { setCategory(e.target.value); onApply(); }}
          aria-label="Filter by category"
        >
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>

      <label className="flex flex-col">
        <span className="text-sm font-medium mb-1">Items per page</span>
        <select
          className="rounded-lg border px-3 py-2"
          value={limit}
          onChange={(e) => { setLimit(Number(e.target.value)); onApply(); }}
          aria-label="Items per page"
        >
          {[6,12,24].map((number) => <option key={number} value={number}>{number}</option>)}
        </select>
      </label>

      <label className="flex items-end gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={infinite}
          onChange={(e) => { setInfinite(e.target.checked); onApply(); }}
          
        />
        <span className="text-sm">Infinite scrolling</span>
        {loading && <span className="text-xs ml-auto">Loading…</span>}
      </label>
    </section>
  );
}
