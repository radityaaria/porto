import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs 
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: SiHtml5,
      docs: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "CSS",
      icon: SiCss3,
      docs: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "React",
      icon: SiReact,
      docs: "https://react.dev/"
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      docs: "https://nextjs.org/docs"
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      docs: "https://nodejs.org/en/docs/"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <skill.icon className="w-16 h-16 text-gray-900 dark:text-white" />
                <p className="text-gray-900 dark:text-white text-lg font-medium">
                  {skill.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 