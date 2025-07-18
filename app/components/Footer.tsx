import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '500', display: 'swap' });

export default function Footer() {
  return (
    <footer className={`bg-white text-black w-full py-10 border-t ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold mb-2">Askra</h2>
          <p className="text-sm text-gray-600">Empowering students and developers to code faster and smarter with AI-powered assistance.</p>
        </div>
        
        {/* Quick Links Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link href="/chat" className="hover:text-blue-600">Chat with Askra</Link>
          <Link href="/pricing" className="hover:text-blue-600">View Pricing</Link>
          <Link href="/team" className="hover:text-blue-600">Meet the Team</Link>
        </div>

        {/* Contact & Code Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact & Resources</h3>
          <a href="mailto:askraai.help@gmail.com" className="hover:text-blue-600">Contact Us</a>
          <a href="https://github.com/CSEsubham" target="_blank" className="hover:text-blue-600">Get Code (GitHub)</a>
          <a href="https://www.linkedin.com/in/subham-kumar-8048052a7/" target="_blank" className="hover:text-blue-600">Connect on LinkedIn</a>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 Askra. All Rights Reserved.
      </div>
    </footer>
  );
}
