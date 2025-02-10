import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 bg-slate-950 text-white" data-scroll-section>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center" data-scroll data-scroll-speed="1">
          <h2 className="heading-lg mb-6">Let's Connect</h2>
          <p className="text-slate-400 text-lg mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};