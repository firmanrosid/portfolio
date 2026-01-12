import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TestMe from '@/components/TestMe';
import TestStrategy from '@/components/TestStrategy';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Sections */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <TestMe />
      <TestStrategy />
      <Contact />
    </main>
  );
}
