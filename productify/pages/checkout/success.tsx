import Link from "next/link";
import { useRouter } from "next/router";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const orderId = typeof router.query.orderId === "string" ? router.query.orderId : "";

  return (
    <main className="max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-4 py-10 text-center">
      <div className="bg-white rounded-2xl border p-8">
        <h1 className="text-3xl font-bold">Thank you!</h1>
        <p className="mt-2 text-gray-700">Your order has been placed successfully.</p>
        {orderId && <p className="mt-1 text-sm text-gray-500">Order ID: <span className="font-mono">{orderId}</span></p>}

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-lg border">
            Continue shopping
          </Link>
          <Link href="/cart" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
            View cart
          </Link>
        </div>
      </div>
    </main>
  );
}
