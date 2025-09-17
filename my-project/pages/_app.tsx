import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    
      <Header />
 {/* className="max-w-7xl mx-auto px-4 py-6" */}
      
      <main className="flex-1">
        <div>
          <Component {...pageProps} />
        </div>
      </main>

      
      <Footer />
    </div>
  );
}
