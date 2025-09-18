import Link from "next/link";
import { Product } from "@/interface";
import { useAppDispatch } from "@/store";
import { addItemToCart } from "@/store/cartSlice";

export default function ProductCard({ p }: { p: Product }) {
  const dispatch = useAppDispatch();

  return (
    <article className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      <Link href={`/products/${p.id}`} className="block">
        <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
      </Link>
      <div className="p-4">
        <Link href={`/products/${p.id}`} className="font-semibold line-clamp-1 hover:underline" title={p.title}>
          {p.title}
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${p.price}</span>
          <span className="text-xs text-gray-500">⭐ {p.rating}</span>
        </div>

        <button
          onClick={() => dispatch(addItemToCart({ id: p.id, title: p.title, price: p.price, thumbnail: p.thumbnail, qty: 1 }))}
          className="mt-3 w-full px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
