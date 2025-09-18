import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { selectCartItemCount } from "@/store/cartSlice";

export default function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  
  const realCount = useAppSelector(selectCartItemCount);

  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  
  const displayCount = isMounted ? realCount : 0;
  const isVisible = isMounted && realCount > 0;

  const badgeVisibilityClass = isVisible ? "opacity-100" : "opacity-0";
  const badgeAriaHidden = isVisible ? "false" : "true";

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
          Prod<span className="text-gray-900">uctify</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className={linkCls("/")}>Home</Link>

         
          

          <Link
            href="/cart"
            className="relative px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Cart
            
            <span
              className={`absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full px-2 py-0.5 transition ${badgeVisibilityClass}`}
              aria-hidden={badgeAriaHidden}
            >
              {displayCount}
            </span>
          </Link>
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
            <Link href="/search" className={linkCls("/search")} onClick={() => setOpen(false)}>Search</Link>
            <Link
              href="/cart"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 flex items-center"
              onClick={() => setOpen(false)}
            >
              Cart
              <span
                className={`ml-2 inline-flex items-center justify-center min-w-6 h-6 bg-emerald-600 text-white text-xs rounded-full px-1 transition ${badgeVisibilityClass}`}
                aria-hidden={badgeAriaHidden}
              >
                {displayCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
