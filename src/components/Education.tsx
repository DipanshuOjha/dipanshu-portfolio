import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Indian Institute of Technology Guwahati</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">B.Tech in Biosciences and Bioengineering</p>
              <p className="text-gray-400 mb-4">2023 - 2027</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>CGPA: 7.67/10</li>
                <li>Associate executive(2024) of alcheringa, the annual fest of IIT Guwahati</li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Mohsinbhai Zaweri Junior College</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">Senior Secondary</p>
              <p className="text-gray-400 mb-4">2020 - 2022</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>completed senior secondary in science with 86.5%</li>
                <li>Maharashtra State Board</li>
                <li>Rank: 1 in the batch</li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Sri Viswasanthi Educational Institutions</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">Secondary</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Scored 91.6% in my secondary school</li>
                <li>involved in various cultural activities like drama</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;