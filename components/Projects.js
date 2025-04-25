import React from 'react';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <ProjectCarousel />
      </div>
    </section>
  );
} 