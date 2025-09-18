import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectCartItems,
  selectCartTotalPrice,
  removeItemFromCart,
  setItemQuantity,
  clearCart,
} from "@/store/cartSlice";

export default function CartPage() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotalPrice);
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto  py-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link
          href="/"
          className="mt-4 inline-block px-4 py-2 rounded-lg border"
        >
          Back to catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto  py-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border p-4 flex gap-4 items-center"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md border"
            />
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-600">
                ${item.price.toFixed(2)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 border rounded"
                onClick={() =>
                  dispatch(setItemQuantity({ id: item.id, qty: item.qty - 1 }))
                }
              >
                -
              </button>
              <input
                type="number"
                min={1}
                value={item.qty}
                onChange={(e) =>
                  dispatch(
                    setItemQuantity({
                      id: item.id,
                      qty: Number(e.target.value || 1),
                    })
                  )
                }
                className="w-14 text-center border rounded py-1"
              />
              <button
                className="px-2 py-1 border rounded"
                onClick={() =>
                  dispatch(setItemQuantity({ id: item.id, qty: item.qty + 1 }))
                }
              >
                +
              </button>
            </div>

            <div className="w-24 text-right font-semibold">
              ${(item.price * item.qty).toFixed(2)}
            </div>

            <button
              className="ml-2 px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              onClick={() => dispatch(removeItemFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          className="px-4 py-2 rounded border"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Link
          href="/checkout"
          className="px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Proceed to checkout
        </Link>
      </div>
    </main>
  );
}
