'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import  supabase  from '../utils/supabaseClient';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '400', display: 'swap' });

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout error:', error.message);
  } else {
    setSession(null);
    setProfileOpen(false);
    window.location.href = '/Auth'; // or router.push('/login')
  }
};

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

      {/* Try Now / Profile */}
      <div className="hidden md:block relative" ref={profileRef}>
        {session ? (
          <>
            <button onClick={() => setProfileOpen((prev) => !prev)} className="text-3xl text-gray-700 hover:text-black">
              <FaUserCircle />
            </button>
            {profileOpen && (
              <div className="absolute right-10 mt-2 w-48 bg-white rounded-md shadow-lg p-4 z-50">
                <p className="text-sm font-semibold text-gray-800">{session.user.username}</p>
                <button
                  onClick={handleLogout}
                  className="mt-3 w-full bg-red-500 text-white text-sm py-1 px-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
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
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-black">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
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
          {session ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/Auth"
              className="bg-black text-white px-4 py-2 rounded-full shadow-md text-lg"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
