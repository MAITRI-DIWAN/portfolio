"use client";

import { useState } from "react";
import BookCallButton from "./BookCallButton";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold">
          <span className="gradient-text">Maitri</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-7 text-sm text-muted lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <BookCallButton className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-block" />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border/60 px-4 py-4 text-muted lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
          <li className="sm:hidden">
            <BookCallButton className="font-semibold text-accent" />
          </li>
        </ul>
      )}
    </header>
  );
}
