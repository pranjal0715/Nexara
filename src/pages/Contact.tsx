import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div ref={containerRef} data-scroll-container className="pt-20">
      <section className="py-32 bg-white" data-scroll-section>
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16" data-scroll data-scroll-speed="1">
            <h1 className="heading-lg mb-6">Get in Touch</h1>
            <p className="text-slate-600 text-lg">
              Have a project in mind? Let's talk about it. I'm always interested in
              hearing about new projects and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16" data-scroll data-scroll-speed="1.5">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-600">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Phone className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-slate-950 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};