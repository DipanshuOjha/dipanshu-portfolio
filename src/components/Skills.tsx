import React from 'react';
import { Code2, Database, Globe, Terminal, Cpu, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'JavaScript','TypeScript', 'C++'],
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'TailwindCSS', 'GraphQL'],
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Tools',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Docker', 'AWS', 'Git', 'Linux','vercel','netlify'],
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Windows','Linux','MacOS'],
    },

    {
      title: 'Libraries & Frameworks',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Express','Django','Flask','Hono','NumPy','Pandas','Matplotlib'],
    },


  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-700 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;