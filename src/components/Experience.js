import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Experience = () => {
  const { experience: experiences } = usePortfolio();

  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title text-gray-900">
        Professional <span className="text-primary">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}>
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[9px]"></div>

            <div className="card">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {exp.duration}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {exp.location}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Summary */}
      <div className="mt-16 grid md:grid-cols-4 gap-6">
        <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-4xl font-bold text-primary mb-2">10+</p>
          <p className="text-gray-600 font-medium">Years of Experience</p>
        </div>
        <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-4xl font-bold text-primary mb-2">400+</p>
          <p className="text-gray-600 font-medium">Websites Managed</p>
        </div>
        <div className="card text-center bg-gradient-to-br from-pink-50 to-pink-100">
          <p className="text-4xl font-bold text-primary mb-2">100K+</p>
          <p className="text-gray-600 font-medium">Products Managed</p>
        </div>
        <div className="card text-center bg-gradient-to-br from-indigo-50 to-indigo-100">
          <p className="text-4xl font-bold text-primary mb-2">360+</p>
          <p className="text-gray-600 font-medium">Plugin Deployments</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
