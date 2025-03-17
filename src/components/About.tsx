import React from 'react';
import { Code2, Brain, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Code2 className="w-6 h-6 mr-2 text-blue-500" />
              Passionate Developer
            </h3>
            <p className="text-gray-300">
              I'm a 2nd year B.Tech student at IIT Guwahati with a deep passion for creating innovative solutions through code. 
              My journey in technology began with competitive programming and has evolved into full-stack development(MERN stack).
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-500" />
              Areas of Interest
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Full Stack Development</li>
              <li>Competitive Programming</li>
              <li>Open Source Contributions</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Coffee className="w-6 h-6 mr-2 text-blue-500" />
              When I'm Not Coding
            </h3>
            <p className="text-gray-300">
              I enjoy contributing to open-source projects, solving problems on competitive coding platforms such as Codeforces, leetcode, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;