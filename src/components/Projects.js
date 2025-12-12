import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Projects = () => {
  const { projects } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "React.js", value: "react" },
    { label: "WordPress", value: "wordpress" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title text-gray-900">
        Featured <span className="text-primary">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="card group hover:scale-105 transition-transform duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            {project.highlight && (
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-semibold text-gray-900">
                  ⚡ {project.highlight}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              <ul className="space-y-1">
                {project.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
