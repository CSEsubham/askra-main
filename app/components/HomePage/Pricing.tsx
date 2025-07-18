import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight:'600', display: 'swap' });
const inter1 = Inter({ subsets: ['latin'], style: 'normal', weight:'300', display: 'swap' });
const inter2 = Inter({ subsets: ['latin'], style: 'normal', display: 'swap' });

export default function Pricing() {
  return (
    <header className='bg-[#ffffff] w-full min-h-screen flex flex-col pt-10 px-5'>
      <div className='flex items-center justify-center flex-col text-center mb-10'>
        <h2 className={`${inter.className} text-3xl md:text-6xl font-bold mt-2 mb-4 font-col`}>
          Simple, Transparent Pricing
        </h2>
        <h3 className={`${inter.className} text-lg md:text-2xl font-semibold`}>
          Start Free. Upgrade When You’re Ready.
        </h3>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>

        {/* Free Plan */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center gap-4'>
          <h3 className={`${inter.className} text-xl font-bold`}>Free</h3>
          <p className={`${inter2.className} text-base text-center text-gray-700`}>
            Perfect for beginners! Basic AI help, solve doubts, practice coding with no cost — 5 questions per day.
          </p>
        </div>

        {/* Pro Plan */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center gap-4'>
          <h3 className={`${inter.className} text-xl font-bold`}>Pro – ₹59</h3>
          <p className={`${inter2.className} text-base text-center text-gray-700`}>
            20 Questions/Day, Unlimited Explanations, No AI Customization.
          </p>
          <Link href="/pricing" className="relative inline-flex items-center justify-start px-6 py-3 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-[#8f67b9] group-hover:text-white">Go To Pricing</span>
          </Link>
        </div>

        {/* Elite Plan */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center gap-4'>
          <h3 className={`${inter.className} text-xl font-bold`}>Elite</h3>
          <p className={`${inter2.className} text-base text-center text-gray-700`}>
            50 Questions/Day, Unlimited Explanations, Basic AI Customization.
          </p>
          <Link href="/pricing" className="relative inline-flex items-center justify-start px-6 py-3 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-[#8f67b9] group-hover:text-white">Go To Pricing</span>
          </Link>
        </div>

        {/* Ultimate Plan */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center gap-4'>
          <h3 className={`${inter.className} text-xl font-bold`}>Ultimate</h3>
          <p className={`${inter2.className} text-base text-center text-gray-700`}>
            Unlimited Questions/Day, Unlimited Explanations, Full AI Customization.
          </p>
          <Link href="/pricing" className="relative inline-flex items-center justify-start px-6 py-3 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-[#8f67b9] group-hover:text-white">Go To Pricing</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
