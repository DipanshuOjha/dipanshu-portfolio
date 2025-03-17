import React from 'react';
import { Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Open Source Contribution',
      description: 'Major contributor to Palisadoes Foundation',
      date: 'Ongoing',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Competitive Programming',
      description: 'Achieved pupil rating (1200+) on Codeforces id (_Cylinder) ',
      date: 'Ongoing',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'JEE-MAINS & JEE-ADVANCED',
      description: 'Achieved top 1% rank in JEE Mains among 1.1 million candidates. Secured a position among the top 10,000 in JEE Advanced, competing with 250,000 candidates.',
      date: '2023',
    },

  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Achievement items */}
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-blue-500 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  } w-full md:w-5/12`}
                >
                  <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{achievement.title}</h3>
                        <p className="text-gray-400 text-sm">{achievement.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;