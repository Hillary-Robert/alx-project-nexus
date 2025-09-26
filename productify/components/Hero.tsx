import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/constants"; 
import { Slide } from "@/interface";

export default function Hero() {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide: Slide = slides[index]; 

  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center text-center text-white transition-all duration-1000"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="absolute inset-0 bg-black/50" />

      
      <div className="relative z-10 max-w-3xl px-6 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
          {slide.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">{slide.text}</p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {slide.ctas.map((cta, i) =>
            cta.primary ? (
              <a
                key={i}
                href={cta.href}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium"
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={i}
                href={cta.href}
                className="px-6 py-3 rounded-xl bg-white/90 text-gray-900 hover:bg-white transition font-medium"
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </div>

     
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 bg-emerald-500/40 blur-3xl rounded-full" />
    </section>
  );
}
