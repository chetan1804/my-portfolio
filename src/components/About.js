import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const About = () => {
  const { about, personalInfo } = usePortfolio();

  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title text-gray-900">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-in">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">{about.summary}</p>
            <p className="text-gray-600 leading-relaxed mt-4">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, index) => (
              <div key={index} className="card">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 animate-slide-up">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Personal Information
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>
                <strong>Name:</strong> {personalInfo.name}
              </p>
              <p>
                <strong>Location:</strong> {personalInfo.location}
              </p>
              <p>
                <strong>Availability:</strong> {personalInfo.availability}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary hover:underline">
                  chetanshinde265@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919766363775"
                  className="text-primary hover:underline">
                  +91 9766363775
                </a>
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h3>
            <ul className="space-y-2 text-gray-600">
              {about.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
