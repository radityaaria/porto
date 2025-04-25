import React from 'react';

export default function About() {
  const technicalSkills = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Database Management",
    "API Development",
    "DevOps",
    "Cloud Services",
    "Mobile Development"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Critical Thinking",
    "Attention to Detail"
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Personal Info */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate web developer with a strong foundation in modern web technologies. 
                With over 3 years of experience in the industry, I've had the opportunity to work on various 
                projects ranging from small business websites to complex web applications.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development began with a curiosity about how websites work, which led me 
                to dive deep into HTML, CSS, and JavaScript. Today, I specialize in React.js and Next.js, 
                creating responsive and user-friendly interfaces that provide exceptional user experiences.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                What sets me apart is my ability to combine technical expertise with creative problem-solving. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry 
                trends and best practices.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education & Certifications
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white">Bachelor of Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-300">University Name, 2018-2022</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white">Full Stack Web Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">Online Platform, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 