import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and content scheduling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content and social media posts.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Python", "React", "OpenAI"]
  }
];

export const Projects = () => {
  return (
    <section className="py-32 bg-slate-100" data-scroll-section>
      <div className="container-custom">
        <h2 className="heading-lg mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
              data-scroll
              data-scroll-speed={0.5}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};