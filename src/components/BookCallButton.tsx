"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/portfolio";

const fallback = `mailto:${profile.email}?subject=${encodeURIComponent("Let's book a call")}`;

// Opens the Google Calendar appointment booking page in a popup.
// Without a booking URL it falls back to email.
export default function BookCallButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!profile.bookingUrl) return;
    e.preventDefault();
    setOpen(true);
  }

  return (
    <>
      <a href={profile.bookingUrl || fallback} onClick={onClick} className={className}>
        Book a Call
      </a>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Book a call"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-gray-800">
                <span className="font-semibold">Book a call with {profile.firstName}</span>
                <div className="flex items-center gap-4 text-sm">
                  <a href={profile.bookingUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                    Open in new tab
                  </a>
                  <button onClick={() => setOpen(false)} aria-label="Close" className="text-2xl leading-none text-gray-500 hover:text-gray-900">
                    ×
                  </button>
                </div>
              </div>
              <iframe src={profile.bookingUrl} title="Google Calendar booking" className="w-full flex-1" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
