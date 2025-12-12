import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Education = () => {
  const { education, certifications } = usePortfolio();

  return (
    <section id="education" className="section-container bg-white">
      <h2 className="section-title text-gray-900">
        Education & <span className="text-primary">Certifications</span>
      </h2>

      <div className="grid lg:grid-cols-1 gap-12">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              className="w-8 h-8 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{edu.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Info */}
          {/* <div className="mt-8 card bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-3 mt-1"
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
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">Phaltan, Dist - Satara</p>
                <p className="text-gray-600">State: Maharashtra, India</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              className="w-8 h-8 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Certifications
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`card bg-gradient-to-br ${cert.color} hover:shadow-xl transition-shadow duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start mb-3">
                  <div className="text-3xl mr-3">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm font-medium text-primary">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-4xl font-bold text-primary mb-2">2014</p>
          <p className="text-gray-600 font-medium">Graduation Year</p>
          <p className="text-sm text-gray-500 mt-1">Computer Science</p>
        </div>
        <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-4xl font-bold text-primary mb-2">5+</p>
          <p className="text-gray-600 font-medium">Certifications</p>
          <p className="text-sm text-gray-500 mt-1">Industry Recognized</p>
        </div>
        <div className="card text-center bg-gradient-to-br from-pink-50 to-pink-100">
          <p className="text-4xl font-bold text-primary mb-2">2</p>
          <p className="text-gray-600 font-medium">Premium Courses</p>
          <p className="text-sm text-gray-500 mt-1">Namaste Series</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
