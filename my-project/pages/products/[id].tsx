import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/interface";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        if (!cancelled) setProduct(data);
      } catch (e: any) {
        if (!cancelled) setError(e.message || "Error loading product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <p className="p-4">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">{error}</p>;
  if (!product) return <p className="p-4">Not found.</p>;

  return (
    <main className="grid lg:grid-cols-2 gap-8 px-6 py-10">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-100 object-cover rounded-xl border py-6"
        />
      
        {product.images?.length > 1 && (
          <div className="mt-8 grid grid-cols-4 gap-2">
            {product.images.slice(1, 5).map((src) => (
              <img key={src} src={src} alt="" className="h-40 w-full object-cover rounded-lg border" />
            ))}
          </div>
        )}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-2 text-sm text-gray-600">
          Brand: <span className="font-medium text-gray-800">{product.brand}</span>
        </div>
        <div className="mt-1 text-sm text-gray-600">
          Rating: <span className="font-medium text-gray-800">⭐ {product.rating}</span>
        </div>

        <div className="mt-4 text-3xl font-bold">${product.price}</div>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-4">
          <Link
            href={`/category/${encodeURIComponent(product.category)}`}
            className="inline-block text-sm underline"
          >
            View more in “{product.category}”
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">Add to cart</button>
          <Link href="/" className="px-4 py-2 rounded-lg border">Back to catalog</Link>
        </div>
      </div>
    </main>
  );
}
