import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '500', display: 'swap' });

export default function Footer() {
  return (
    <footer className={`bg-white text-black w-full py-8 border-t ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-6">
        
        {/* About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <h2 className="text-3xl font-bold">Askra</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            Empowering students and developers to code faster and smarter with AI-powered assistance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <Link href="/chat" className="hover:text-blue-600 text-sm">Chat with Askra</Link>
          <Link href="/pricing" className="hover:text-blue-600 text-sm">View Pricing</Link>
          <Link href="/team" className="hover:text-blue-600 text-sm">Meet the Team</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <h3 className="text-xl font-semibold">Contact & Resources</h3>
          <a href="mailto:askraai.help@gmail.com" className="hover:text-blue-600 text-sm">Contact Us</a>
          <a href="https://github.com/CSEsubham" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm">Get Code (GitHub)</a>
          <a href="https://www.linkedin.com/in/subham-kumar-8048052a7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm">Connect on LinkedIn</a>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-8 px-4">
        © 2025 Askra. All Rights Reserved.
      </div>
    </footer>
  );
}
