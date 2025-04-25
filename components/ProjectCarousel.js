import React, { useState } from 'react';

export default function ProjectCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/path-to-image-1.jpg"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      image: "/path-to-image-2.jpg"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3",
      image: "/path-to-image-3.jpg"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of project 4",
      image: "/path-to-image-4.jpg"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description of project 5",
      image: "/path-to-image-5.jpg"
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description of project 6",
      image: "/path-to-image-6.jpg"
    }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ←
        </button>

        {/* Cards Container */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === i ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
} 