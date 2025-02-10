import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Code, Palette, Smartphone, Database, Cloud, Users } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies and best practices.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide excellent user experiences.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native and other modern frameworks.',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Building scalable and secure backend systems with Node.js and modern databases.',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Implementing and managing cloud infrastructure using AWS, Google Cloud, or Azure.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Consulting',
    description: 'Providing technical consulting and guidance for your projects and team.',
  },
];

export const Services = () => {
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
          <div className="max-w-2xl mx-auto text-center" data-scroll data-scroll-speed="1">
            <h1 className="heading-lg mb-6">Services</h1>
            <p className="text-slate-600 text-lg">
              I offer a comprehensive range of services to help bring your digital
              projects to life. Each service is tailored to meet your specific needs
              and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow"
                data-scroll
                data-scroll-speed={1 + index * 0.1}
              >
                <div className="text-slate-900 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950" data-scroll-section>
        <div className="container-custom">
          <div className="text-center text-white" data-scroll data-scroll-speed="1">
            <h2 className="text-3xl font-bold mb-6">Ready to Start a Project?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help you achieve your goals.
              I'm always excited to take on new challenges and create amazing solutions.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};