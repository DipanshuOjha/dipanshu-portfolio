import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Code-Tracker for Codeforces',
      description: 'A web application that tracks the progress of a user on Codeforces and provides a dashboard to visualize the progress and compare with other users',
      technologies: ['React', 'TailwindCSS', 'Node.js','mongodb'],
      github: 'https://github.comhttps://github.com/DipanshuOjha/code-tracker-frontend',
      live: 'https://code-tracker-frontend-self.vercel.app/',
    },
    {
      title: 'Payment App',
      description: 'A prototype of a payment app that allows users to send and receive payments. it uses jwt for authentication and mongodb for database',
      technologies: ['React', 'TailwindCSS', 'Node.js','mongodb'],
      github: 'https://github.com/DipanshuOjha/paymentapp-frontend',
      live: 'https://paymentapp-frontend-one.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;