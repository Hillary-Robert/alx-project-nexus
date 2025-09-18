// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider, useStore } from "react-redux";
import { store } from "@/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { hydrateCart, loadCart } from "@/store/cartSlice";

function HydrateCartOnce() {
  const reduxStore = useStore();
  useEffect(() => {
   
    reduxStore.dispatch(hydrateCart(loadCart()));
  }, [reduxStore]);
  return null;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HydrateCartOnce />
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
