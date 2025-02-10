import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nexara</h3>
            <p className="text-slate-400">
              Crafting digital experiences through beautiful code and design.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/works" className="hover:text-white transition-colors">Works</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {currentYear} Pranjal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};