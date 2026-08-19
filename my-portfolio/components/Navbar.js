"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#08080c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 font-sans text-xl font-bold tracking-tight text-white hover:opacity-90">
          <span className="bg-gradient-to-r from-white to-rose-400 bg-clip-text text-transparent">Ashelle</span>
          <span className="text-accent-red font-extrabold font-mono">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent-red rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-white/[0.05] bg-[#08080c] px-6 py-4 md:hidden animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActive ? "text-accent-red font-semibold pl-2 border-l-2 border-accent-red" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
