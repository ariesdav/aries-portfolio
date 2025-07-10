'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tech', href: '#tech' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#111] text-white px-6 py-4 border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <a
          href="#"
          className=" text-emerald-400 text-md font-semibold tracking-widest uppercase hover:text-gray-300"
        >
          Aries Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide uppercase">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:underline text-gray-300 hover:text-white decoration-2 underline-offset-4 transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-medium uppercase tracking-wide pl-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block hover:underline text-gray-300 hover:text-white decoration-cyan-400 underline-offset-4 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
