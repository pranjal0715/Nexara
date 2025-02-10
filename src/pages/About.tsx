import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const About = () => {
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
    <div ref={containerRef} data-scroll-container className="pt-20">
      <section className="py-32 bg-white" data-scroll-section>
        <div className="container-custom">
          <div className="max-w-2xl" data-scroll data-scroll-speed="1">
            <h1 className="heading-lg mb-12">About Me</h1>
            <p className="text-slate-600 text-lg mb-6">
              With over 5 years of experience in web development, I've had the
              privilege of working with various technologies and frameworks.
              My passion lies in creating intuitive and performant web applications
              that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50" data-scroll-section>
        <div className="container-custom">
          <div data-scroll data-scroll-speed="2">
            <h2 className="text-3xl font-bold mb-8">My Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
                data-scroll data-scroll-speed="1"
              />
              <p className="text-slate-600 text-lg">
                I believe in continuous learning and staying up-to-date with the
                latest technologies and best practices in the industry. My journey
                in web development has been driven by a passion for creating
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" data-scroll-section>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8" data-scroll data-scroll-speed="1.5">
            <div className="p-8 bg-slate-100 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <p className="font-semibold">BSc in Computer Science</p>
                  <p>University of Technology</p>
                  <p className="text-sm">2015 - 2019</p>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-slate-100 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <ul className="space-y-4 text-slate-600">
                <li>
                  <p className="font-semibold">Senior Frontend Developer</p>
                  <p>Tech Solutions Inc.</p>
                  <p className="text-sm">2020 - Present</p>
                </li>
                <li>
                  <p className="font-semibold">Web Developer</p>
                  <p>Digital Agency</p>
                  <p className="text-sm">2019 - 2020</p>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-slate-100 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS', 
                  'GraphQL', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-slate-600 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};