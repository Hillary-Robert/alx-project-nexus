import Link from "next/link";
import { Product } from "@/interface";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.id}`}
      className="block bg-white rounded-2xl shadow-sm border overflow-hidden focus:outline-none focus:ring-2 ring-emerald-400 py-6"
    >
      <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1" title={p.title}>{p.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${p.price}</span>
          <span className="text-xs text-gray-500">⭐ {p.rating}</span>
        </div>
      </div>
    </Link>
  );
}
