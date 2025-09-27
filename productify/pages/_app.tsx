import type { AppProps } from "next/app";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preload" as="image" href="/hero1.jpg" />
        <link rel="preload" as="image" href="/hero2.jpg" />
        <link rel="preload" as="image" href="/hero3.jpg" />
        <link rel="preload" as="image" href="/hero4.jpg" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HydrateCartOnce />

      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
