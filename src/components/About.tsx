import React from 'react';

export const About = () => {
  return (
    <section className="py-32 bg-white" data-scroll-section>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div data-scroll data-scroll-speed="1">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div data-scroll data-scroll-speed="2">
            <h2 className="heading-lg mb-6">About Me</h2>
            <p className="text-slate-600 text-lg mb-6">
              I'm a passionate developer who loves creating beautiful and functional web applications.
              With expertise in modern web technologies, I focus on delivering high-quality solutions
              that make a real impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-100 rounded-lg">
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-slate-600">React, Next.js, TailwindCSS</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-slate-600">Node.js, Express, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};