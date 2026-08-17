"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Product = {
  name: string;
  note: string;
  image: string;
};

const INITIAL_COUNT = 8;

export function ProductGrid({ products }: { products: Product[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? products : products.slice(0, INITIAL_COUNT);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {visible.map((product, i) => (
          <Reveal key={product.name} delay={Math.min(i, 6) * 0.06}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink-950/5 transition-shadow hover:shadow-xl">
              <div className="relative h-40 shrink-0 overflow-hidden sm:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h4 className="line-clamp-2 font-display text-sm font-bold leading-tight text-ink-950 sm:text-base">
                  {product.name}
                </h4>
                <p className="mt-1 line-clamp-1 text-xs text-ink-950/60 sm:text-sm">
                  {product.note}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {products.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-8 rounded-full bg-ink-950 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {expanded ? "Show less" : `Show all ${products.length} flavours`}
        </button>
      )}
    </div>
  );
}
