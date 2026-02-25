"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const navLinks = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems);

  return (
    <header className="sticky top-0 z-50 bg-light-100 border-b border-light-300">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={80}
            height={29}
            priority
            className="invert"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-body font-[var(--text-body-medium--font-weight)] leading-[var(--text-body--line-height)] text-dark-900 transition-colors hover:text-dark-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-body font-[var(--text-body-medium--font-weight)] leading-[var(--text-body--line-height)] text-dark-900 transition-colors hover:text-dark-700"
          >
            Search
          </a>
          <a
            href="#"
            className="text-body font-[var(--text-body-medium--font-weight)] leading-[var(--text-body--line-height)] text-dark-900 transition-colors hover:text-dark-700"
          >
            My Cart ({totalItems()})
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-dark-900"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-light-300 bg-light-100">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-body font-[var(--text-body-medium--font-weight)] text-dark-900 hover:text-dark-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-light-300 pt-4">
              <a
                href="#"
                className="block text-body font-[var(--text-body-medium--font-weight)] text-dark-900 hover:text-dark-700"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-body font-[var(--text-body-medium--font-weight)] text-dark-900 hover:text-dark-700"
              >
                My Cart ({totalItems()})
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
