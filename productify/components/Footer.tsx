export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Productify</span>. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://dummyjson.com/products"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition"
          >
            API Docs
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:info@example.com"
            className="hover:text-emerald-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
