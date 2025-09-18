import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { loadCart, saveCart } from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({ reducer: { cart: cartReducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch as any;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


if (typeof window !== "undefined") {
  const { hydrateCart } = await import("./cartSlice");
  store.dispatch(hydrateCart(loadCart()));
  store.subscribe(() => saveCart({ cart: { items: store.getState().cart.items } }.cart));
}
