import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ChevronDown } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
      multiplier: 0.8,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};