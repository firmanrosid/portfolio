'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GridBackground from './ui/GridBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Role: Senior Quality Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden font-mono">
      <GridBackground />

      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-400 text-sm">
          <span className="animate-pulse mr-2">●</span>System Online
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I&apos;m <span className="text-white">Firmansyah</span>
        </h1>

        <div className="h-12 md:h-16 mb-6">
          <h2 className="text-xl md:text-3xl text-gray-400">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-400">~/profile</span>
            <span className="text-gray-500 mx-2">$</span>
            <span className="text-yellow-300">{text}</span>
            <span className="animate-pulse ml-1">_</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Architecting scalable <span className="text-blue-400">Test Infrastructure</span> and ensuring <span className="text-purple-400">Software Reliability</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#projects"
            className="group relative px-8 py-3 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            ./view_projects.sh
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-gray-700 text-gray-300 text-sm rounded hover:bg-white/5 transition-all"
          >
            sudo contact_me.sh
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
