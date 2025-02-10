import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center relative bg-white" data-scroll-section>
      <div className="container-custom">
        <div className="max-w-4xl" data-scroll data-scroll-speed="2">
          <h1 className="heading-xl text-slate-900 mb-6">
            Crafting Digital Experiences Through Code
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl max-w-2xl">
            Full-stack developer specializing in building exceptional digital experiences
            that combine beautiful design with powerful functionality.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-900 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};