"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PANELS = [
  {
    id: "snaxzastic",
    brand: "Snaxzastic",
    tagline: "Snacking Anywhere",
    message: "Roasted right, zinged with nimbu-pudina.",
    sub: "Nimbu Pudina Roasted Chana & Roasted Peanuts",
    image:
      "https://images.unsplash.com/photo-1596503799872-5c5f052c27b9?w=1400&q=80&fm=jpg&fit=crop&auto=format",
    bg: "from-snax-100 via-snax-50 to-snax-50",
    chip: "bg-snax-500 text-snax-900",
    cta: "bg-snax-900 text-white hover:bg-snax-600",
  },
  {
    id: "crespology",
    brand: "Crespology",
    tagline: "Crispy Vibes Only",
    message: "Crafted crunch, every single bite.",
    sub: "Cheese Balls & Krunchit Spanish Tomato",
    image:
      "https://images.unsplash.com/photo-1772795491387-fd6d7327a626?w=1400&q=80&fm=jpg&fit=crop&auto=format",
    bg: "from-cresp-100 via-cresp-50 to-cresp-50",
    chip: "bg-cresp-500 text-white",
    cta: "bg-cresp-600 text-white hover:bg-cresp-500",
  },
] as const;

export function Hero() {
  return (
    <section id="top" className="pt-24 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {PANELS.map((panel, i) => (
          <motion.a
            key={panel.id}
            href={`#${panel.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-gradient-to-b ${panel.bg} p-5 sm:p-8 lg:min-h-[680px] lg:p-14`}
          >
            <div className="absolute inset-0">
              <Image
                src={panel.image}
                alt={panel.sub}
                fill
                priority={i === 0}
                className="object-cover opacity-90 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="relative flex flex-col items-start gap-4 text-left text-white">
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${panel.chip}`}
              >
                {panel.brand}
              </span>
              <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {panel.tagline}
              </h2>
              <p className="max-w-md text-lg font-medium text-white/90">
                {panel.message}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                {panel.sub}
              </p>
              <span
                className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-transform group-hover:translate-x-1 ${panel.cta}`}
              >
                Explore flavours
                <span aria-hidden>&rarr;</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
