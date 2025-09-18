import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Product } from "@/interface";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch category");
        const data = await res.json();
        if (!cancelled) setItems(data.products || []);
      } catch (e: any) {
        if (!cancelled) setError(e.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  if (loading) return <p className="p-4">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">{error}</p>;

  return (
    <main className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <h1 className="text-2xl font-bold mb-4">Category: {slug}</h1>
      {items.length === 0 ? (
        <p>No items in this category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </main>
  );
}
