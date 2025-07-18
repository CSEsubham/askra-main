'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi'; // React Icons for hamburger

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '400', display: 'swap' });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-60 flex justify-between items-center h-16 px-4 fixed bg-transparent backdrop-blur-sm border-b border-gray-200">
      {/* Logo */}
      <div className="Logo-Animation relative hover:scale-105 transition-transform duration-300">
        <Image src="/TitleLogo.png" alt="Logo" width={80} height={80} />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-lg relative">
        <Link href="/Home" className={`${inter.className} Navbartag-ani text-[#374151] relative`}>
          HOME
        </Link>
        <Link href="/Docs" className={`${inter.className} Navbartag-ani text-[#374151] relative`}>
          DOCS
        </Link>
        <Link href="/Pricing" className={`${inter.className} Navbartag-ani text-[#374151] relative`}>
          PRICING
        </Link>
      </nav>

      {/* Call to Action */}
      <div className="hidden md:block">
        <Link
          href="/Auth"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
            Try Now
          </span>
          <span className="relative opacity-0">Try Now</span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-black">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <Link href="/Home" className={`${inter.className} text-xl text-[#374151]`} onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link href="/Docs" className={`${inter.className} text-xl text-[#374151]`} onClick={() => setIsOpen(false)}>
            DOCS
          </Link>
          <Link href="/Pricing" className={`${inter.className} text-xl text-[#374151]`} onClick={() => setIsOpen(false)}>
            PRICING
          </Link>
          <Link
            href="/Auth"
            className="bg-black text-white px-4 py-2 rounded-full shadow-md text-lg"
            onClick={() => setIsOpen(false)}
          >
            Try Now
          </Link>
        </div>
      )}
    </header>
  );
}
