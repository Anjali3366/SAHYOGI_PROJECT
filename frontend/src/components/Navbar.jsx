import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function CurvedNavbar({
  logo = "Sahyogi",
  links = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ],
  sticky = true,
  glass = true,
}) {
  const [open, setOpen] = useState(false);

  const containerClasses = `
    ${sticky ? " fixed top-4 left-0 right-0 z-50" : "relative"}
    flex items-center justify-between
    max-w-6xl mx-auto
    px-4 sm:px-6 lg:px-8
  `;

  const panelClasses = `
    w-full
    ${
      glass
        ? "bg-black/40 backdrop-blur-md border border-white/10"
        : "bg-transparent"
    }
    rounded-2xl
    py-3 px-4
    shadow-lg
    flex items-center justify-between
    text-white
  `;

  return (
    <nav className={containerClasses} aria-label="Main navigation">
      <div className={panelClasses}>
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-yellow-500 flex items-center justify-center text-white font-semibold">
              {typeof logo === "string" ? logo[0] : null}
            </div>
            <span className="hidden sm:inline-block font-semibold tracking-tight text-white">
              {logo}
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-teal-500 hover:bg-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 hover:text-teal-500 transition">
            Get started
          </button>

          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl py-4 px-4 shadow-lg flex flex-col gap-2 text-white">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#"
                className="block text-center px-3 py-2 rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:text-teal-400 transition"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
