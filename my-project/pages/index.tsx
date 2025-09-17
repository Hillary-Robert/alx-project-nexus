import { useState } from "react";
import Hero from "../components/Hero";
import Filters from "@/components/filter";
import SortBar from "../components/SortBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function HomePage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [limit, setLimit] = useState(12);
  const [infinite, setInfinite] = useState(true);
  const [sortBy, setSortBy] = useState<"" | "price" | "rating">("");
  const [sortOrder, setSortOrder] = useState<"" | "asc" | "desc">("");
  const [loading] = useState(false);
  const [refreshSignal, setRefreshSignal] = useState(0);
  const refresh = () => setRefreshSignal((n) => n + 1);

  return (
    <>

      <Hero />

      <section id="catalog"  className="max-w-7xl mx-auto px-4 py-6">
        <Filters
          q={q} setQ={setQ}
          category={category} setCategory={setCategory}
          limit={limit} setLimit={setLimit}
          infinite={infinite} setInfinite={setInfinite}
          loading={loading}
          onApply={refresh}
        />
        <SortBar
          sortBy={sortBy}
          sortOrder={sortOrder}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
          onApply={refresh}
        />
        
      </section>

    </>
  );
}
