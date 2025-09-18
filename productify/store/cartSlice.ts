import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@/interface";

type CartState = { items: CartItem[] };

const initialState: CartState = { items: [] };

const STORAGE_KEY = "cart:v1";

export function loadCart(): CartState {
  if (typeof window === "undefined") return initialState;
  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : initialState;
  } catch {
    return initialState;
  }
}

export function saveCart(state: CartState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart(state, action: PayloadAction<CartState>) {
      return action.payload;
    },
    addItemToCart(
      state,
      action: PayloadAction<Omit<CartItem, "qty"> & { qty?: number }>
    ) {
      const { id, title, price, thumbnail, qty = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push({ id, title, price, thumbnail, qty });
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setItemQuantity(
      state,
      action: PayloadAction<{ id: number; qty: number }>
    ) {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToUpdate) return;

      itemToUpdate.qty = Math.max(1, action.payload.qty);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  hydrateCart,
  addItemToCart,
  removeItemFromCart,
  setItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;


export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((totalCount, item) => totalCount + item.qty, 0);

export const selectCartTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  );
