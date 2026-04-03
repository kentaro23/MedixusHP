"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";

function LogoMark() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M2 12h4l2-4 3 9 2-5h9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-soft backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="#top" className="focus-ring inline-flex items-center gap-2 rounded-md text-primary" aria-label="Medixus ホームへ移動">
          <LogoMark />
          <span className="font-en text-xl font-bold tracking-tight">Medixus</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="focus-ring rounded-md px-1 py-1 text-sm font-medium text-primary/80 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
          >
            お問い合わせ
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex rounded-md p-2 text-primary md:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="メニューを閉じる"
              className="fixed inset-0 z-40 bg-primary/35 md:hidden"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-screen w-[80%] max-w-sm flex-col gap-6 bg-white px-6 py-24 shadow-soft md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="focus-ring rounded-md text-lg font-semibold text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="focus-ring mt-2 rounded-full bg-cta-gradient px-5 py-3 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </a>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
