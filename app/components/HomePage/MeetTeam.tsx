import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], style: 'normal', weight: '600', display: 'swap' });
const inter2 = Inter({ subsets: ['latin'], style: 'normal', display: 'swap' });

export default function MeetTeam() {
  return (
    <section className='bg-white w-full min-h-screen flex flex-col items-center px-4 py-10 md:py-20'>
      <h3 className={`${inter.className} text-3xl md:text-6xl font-bold mt-2 mb-4 font-col`}>
        Meet Our Team
      </h3>
      <p className={`${inter.className} text-md sm:text-lg lg:text-xl font-medium text-center max-w-3xl mb-8`}>
        From classroom chaos to coding clarity — we’re students on a mission to make learning simpler and fun with Askra!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 md:px-4">
        <TeamCard
          imgSrc="/subham.png"
          name="Subham Kumar"
          role="Frontend Development"
          link="/pricing"
        />
        <TeamCard
          imgSrc="/harsha.png"
          name="Harsha"
          role="Backend & AI Integration"
          link="/pricing"
        />
        <TeamCard
          imgSrc="/harsha.png"
          name="Harsha"
          role="Backend & AI Integration"
          link="/pricing"
        />
        <TeamCard
          imgSrc="/harsha.png"
          name="Harsha"
          role="Backend & AI Integration"
          link="/pricing"
        />
      </div>
    </section>
  );
}

function TeamCard({ imgSrc, name, role, link }) {
  return (
    <div className="w-full flex flex-col items-center p-4 border rounded-xl shadow hover:scale-105 transition-transform duration-300 bg-white">
      <Image src={imgSrc} alt={name} width={100} height={100} className="rounded-full mb-4" />
      <h4 className={`${inter.className} text-lg font-bold mb-1`}>{name}</h4>
      <p className={`${inter2.className} text-center text-gray-700 text-sm mb-4`}>
        Worked on {role}
      </p>
      <Link
        href={link}
        className="relative inline-block px-5 py-2 border-2 border-black text-black font-medium hover:bg-black hover:text-white rounded transition-all"
      >
        Go To LinkedIn
      </Link>
    </div>
  );
}
