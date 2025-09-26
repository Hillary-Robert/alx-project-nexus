import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectCartItems, selectCartTotalPrice, clearCart } from "@/store/cartSlice";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();


  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartTotalPrice);

 
  useEffect(() => {
    if (cartItems.length === 0) router.replace("/cart");
  }, [cartItems.length, router]);

 
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!fullName || !email || !address || !cardNumber) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

  
    dispatch(clearCart());
    const orderId = `ORD-${Date.now()}`;
    router.push(`/checkout/success?orderId=${encodeURIComponent(orderId)}`);
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

  
      <section className="bg-white border rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm mb-2">
            <span>
              {item.title} x{item.qty}
            </span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}

        <hr className="my-3" />
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link href="/cart" className="mt-3 inline-block text-sm underline">
          Edit cart
        </Link>
      </section>

 
      <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-4 space-y-4">
        {error && <p className="text-sm text-red-600">{error}</p>}

        <label className="block">
          <span className="block text-sm font-medium mb-1">Full Name *</span>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Email *</span>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Address *</span>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Card Number *</span>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, ""))}
            placeholder="4242 4242 4242 4242"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
        >
          Place Order
        </button>
      </form>
    </main>
  );
}
