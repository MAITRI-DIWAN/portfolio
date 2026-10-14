"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

// No backend: opens the visitor's email app with the message pre-filled.
export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition placeholder:text-muted/60 focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">Name</label>
        <input id="name" name="name" required placeholder="Your name" className={input} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-muted">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={input} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project or role..." className={input} />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        <FaPaperPlane /> Send Message
      </button>
    </form>
  );
}
