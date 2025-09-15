import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product Catalog</h1>
          <a
            href="https://dummyjson.com/products"
            className="underline text-sm"
            aria-label="API docs"
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>
        </header>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
