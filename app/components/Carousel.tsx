"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Carousel({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const btnBase =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-ink-950/10 transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canLeft}
        aria-label="Scroll left"
        className={btnBase}
      >
        <ChevronLeft className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
      </button>

      <div
        ref={scrollerRef}
        className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canRight}
        aria-label="Scroll right"
        className={btnBase}
      >
        <ChevronRight className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
      </button>
    </div>
  );
}
