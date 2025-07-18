import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '600', display: 'swap' });

export default function BodyPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col background-col ">
      <div className='flex flex-col w-[90%] md:w-[80%] text-center py-8'>
        
        {/* Headings */}
        <div className='w-full mb-10'>
          <h1 className={`${inter.className} text-3xl sm:text-4xl md:text-6xl font-bold fontCol mt-2 mb-4`}>
            Minimize the Hassle.
          </h1>
          <h1 className={`${inter.className} text-3xl sm:text-4xl md:text-6xl font-bold fontCol`}>
            Maximize the Code.
          </h1>
        </div>
        
        {/* Description */}
        <div className='w-full'>
          <p className='text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>
            Your ideas deserve momentum, not confusion.
          </p>
          <p className='text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800'>
            Ask Askra — your shortcut from doubt to code.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className='w-full mt-10 flex items-center justify-center'>
          <Link href="/Chat" className={`relative inline-block px-8 py-3 font-medium group ${inter.className}`}>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">Try Askra</span>
          </Link>
        </div>
        
        {/* Social Icons */}
        <div className='w-full mt-10 flex gap-5 flex-wrap items-center justify-center'>
          <Link href="/" className='text-3xl hover:text-pink-500 transition-all'><FaInstagram /></Link>
          <Link href="/" className='text-3xl hover:text-blue-500 transition-all'><BsTwitter /></Link>
          <Link href="/" className='text-3xl hover:text-blue-700 transition-all'><CiLinkedin /></Link>
          <Link href="/" className='text-3xl hover:text-black transition-all text-gray-700'><FaGithub /></Link>
          <Link href="/" className='text-3xl hover:text-red-600 transition-all'><CgMail /></Link>
        </div>

      </div>
    </main>
  );
}
