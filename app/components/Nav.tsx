"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Snaxzastic", href: "/#snaxzastic" },
  { label: "Crespology", href: "/#crespology" },
  { label: "Our Story", href: "/#story" },
  { label: "Become a Distributor", href: "/distributor" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)]/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,16,8,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-ink-950"
          >
            SFB
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-ink-950/70 transition-colors hover:text-ink-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/distributor"
              className="rounded-full bg-ink-950 px-4 py-2.5 text-xs font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-5 sm:text-sm"
            >
              Become a Distributor
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-ink-950/15 transition-colors hover:bg-ink-950/5 md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-ink-950 transition-transform duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-ink-950 transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink-950 transition-transform duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/50 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[78%] max-w-xs flex-col bg-white px-6 py-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-ink-950">
                  SFB
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-ink-950/15"
                >
                  <span className="relative block h-3.5 w-3.5">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rotate-45 rounded-full bg-ink-950" />
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-45 rounded-full bg-ink-950" />
                  </span>
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2 py-3 text-base font-semibold text-ink-950/80 transition-colors hover:bg-ink-950/5 hover:text-ink-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/distributor"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-ink-950 px-5 py-3 text-center text-sm font-bold text-white"
              >
                Become a Distributor
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
