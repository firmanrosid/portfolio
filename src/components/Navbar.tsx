'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-200 hover:text-white transition-colors">
              <span className="text-green-500 mr-2">➜</span>
              ~/firmansyah
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium hover:underline decoration-blue-500 underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400">About</Link>
            <Link href="#experience" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400">Experience</Link>
            <Link href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400">Skills</Link>
            <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400">Projects</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
