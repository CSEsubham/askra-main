import React from 'react';
import { GoCodeReview } from 'react-icons/go';
import { LuHandHelping } from "react-icons/lu";
import { MdAssistant } from 'react-icons/md';
import { TbMoodConfuzed } from 'react-icons/tb';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight:'600', display: 'swap' });
const inter1 = Inter({ subsets: ['latin'], style: 'normal', weight:'300', display: 'swap' });
const inter2 = Inter({ subsets: ['latin'], style: 'normal', display: 'swap' });

export default function WhyAskra() {
  return ( 
    <header className='bg-[#ffffff] w-full min-h-screen flex flex-col pt-20'>
      <div className='flex items-center justify-center w-full flex-col text-center'>
        <h2 className={`${inter.className} text-3xl md:text-6xl font-bold mt-2 mb-4 font-col `}>
          Why Choose Askra
        </h2>
        <h3 className={`${inter.className} text-xl md:text-2xl font-semibold mt-1 mb-4`}>
          Future of AI Help, in Your Hands.
        </h3>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-5 w-full max-w-7xl mx-auto'>

        {/* Card 1 */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <LuHandHelping className='text-4xl text-[#8f67b9] p-1.5 border rounded-full' />
            <h3 className={`${inter.className} text-lg font-bold`}>Laser-Focused on Coding Help</h3>
          </div>
          <p className={`${inter2.className} text-base text-gray-700`}>
            Askra is designed for one purpose — turning doubts into clean, working code. No distractions, just pure code productivity.
          </p>
        </div>

        {/* Card 2 */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col gap-4'>
          <div className='flex items-cgray-800enter justify-center gap-2'>
            <GoCodeReview className='text-4xl text-[#8f67b9] p-1.5 border rounded-full' />
            <h3 className={`${inter.className} text-lg font-bold`}>Built by Developers, for Developers</h3>
          </div>
          <p className={`${inter2.className} text-base text-gray-700`}>
            Askra evolves with coding challenges in mind, unlike generic chatbots. Its your AI pair programmer for real struggles.
          </p>
        </div>

        {/* Card 3 */}
        <div className='p-6 border border-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <MdAssistant className='text-4xl text-[#8f67b9] p-1.5 border rounded-full' />
            <h3 className={`${inter.className} text-lg font-bold`}>Study Assistant for Interviews</h3>
          </div>
          <p className={`${inter2.className} text-base text-gray-700`}>
            Whether it’s LeetCode, Codeforces, or college tasks, Askra is tuned to help you master coding interviews faster.
          </p>
        </div>

        {/* Card 4 */}
        <div className='p-6 border border- rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <TbMoodConfuzed className='text-4xl text-[#8f67b9] p-1.5 border rounded-full' />
            <h3 className={`${inter.className} text-lg font-bold`}>Simple Answers, Zero Confusion</h3>
          </div>
          <p className={`${inter2.className} text-base text-gray-700`}>
            Askra explains things simply without jargon — making learning enjoyable, especially for students and beginners.
          </p>
        </div>

      </div>
    </header>
  );
}
