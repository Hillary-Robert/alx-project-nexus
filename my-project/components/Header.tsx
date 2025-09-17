import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const linkCls = (href: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${
      pathname === href
        ? "bg-emerald-600 text-white"
        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold text-emerald-700">
          Product<span className="text-gray-900">Catalog</span>
        </Link>

       
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className={linkCls("/")}>Home</Link>
          <Link href="/category/smartphones" className={linkCls("/category/smartphones")}>Smartphones</Link>
          <Link href="/category/laptops" className={linkCls("/category/laptops")}>Laptops</Link>
          <a
            href="https://dummyjson.com/products"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            API
          </a>
        </nav>

       
        <button
          className="md:hidden p-2 rounded-md border text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

   
      {open && (
        <div className="md:hidden border-t bg-white shadow-inner">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            <Link href="/" className={linkCls("/")} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/category/smartphones" className={linkCls("/category/smartphones")} onClick={() => setOpen(false)}>Smartphones</Link>
            <Link href="/category/laptops" className={linkCls("/category/laptops")} onClick={() => setOpen(false)}>Laptops</Link>
            <a
              href="https://dummyjson.com/products"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              API
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
