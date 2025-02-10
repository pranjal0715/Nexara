import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization and content scheduling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "Chart.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content and social media posts using advanced language models.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Python", "React", "OpenAI", "FastAPI"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team communication features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["React", "Firebase", "Material-UI", "WebSocket"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Fitness Tracking Platform",
    description: "Comprehensive fitness tracking platform with workout plans, progress monitoring, and social features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8",
    tags: ["React Native", "Node.js", "MongoDB", "AWS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate platform with virtual tours, property management, and advanced search capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    tags: ["Next.js", "PostgreSQL", "ThreeJS", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com"
  }
];

export const Works = () => {
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
          <div className="max-w-2xl mx-auto text-center mb-16" data-scroll data-scroll-speed="1">
            <h1 className="heading-lg mb-6">My Works</h1>
            <p className="text-slate-600 text-lg">
              Here are some of my recent projects that showcase my skills and
              experience in web development and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-scroll
                data-scroll-speed={1 + index * 0.1}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};