"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1600 : deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-24 pt-20 sm:px-6 sm:pt-28 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.h1 {...fade(0.1)} className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hello, I&apos;m {profile.firstName} <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-4 h-10 text-2xl font-bold sm:text-3xl">
            <span className="gradient-text">{typed}</span>
            <span className="ml-0.5 animate-pulse text-accent">|</span>
          </motion.p>
          <motion.p {...fade(0.3)} className="mt-4 max-w-xl text-lg text-muted">
            {profile.tagline}
          </motion.p>
          <motion.p {...fade(0.35)} className="mt-4 flex items-center gap-2 text-sm text-muted">
            <FaLocationDot className="text-accent" /> {profile.locations.join(" · ")}
          </motion.p>
          <motion.div {...fade(0.45)} className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.resumeUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold transition hover:border-accent"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Avatar with spinning ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-64 sm:w-80"
        >
          <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(var(--accent),var(--accent-2),transparent,var(--accent))] p-1" />
          <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-surface">
            <span className="gradient-text text-7xl font-extrabold sm:text-8xl">MD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
