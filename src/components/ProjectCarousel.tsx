"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaArrowRight } from "react-icons/fa6";
import { projects } from "@/data/portfolio";

export default function ProjectCarousel() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const p = projects[i];

  const go = (step: number) => {
    setDir(step);
    setI((cur) => (cur + step + projects.length) % projects.length);
  };

  return (
    <div>
      {/* Thumbnails */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {projects.map((proj, idx) => (
          <button
            key={proj.name}
            onClick={() => {
              setDir(idx > i ? 1 : -1);
              setI(idx);
            }}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              idx === i
                ? "border-accent bg-accent/15 text-foreground"
                : "border-border text-muted hover:border-accent/60"
            }`}
          >
            {proj.name}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.article
            key={p.name}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 p-6 sm:p-10 md:grid-cols-2"
          >
            <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 via-background to-accent-2/20">
              <span className="px-4 text-center text-3xl font-extrabold sm:text-4xl">{p.name}</span>
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-xs text-muted">
                Project {i + 1} of {projects.length}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-muted">{p.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-accent-2">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-5 pt-6 text-sm font-semibold">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                    <FaGithub /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                    Live demo <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="rounded-full border border-border p-3 transition hover:border-accent hover:text-accent"
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-2">
          {projects.map((proj, idx) => (
            <span
              key={proj.name}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          className="rounded-full border border-border p-3 transition hover:border-accent hover:text-accent"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
