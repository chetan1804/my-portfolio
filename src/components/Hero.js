import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Hero = () => {
  const { personalInfo, heroStats } = usePortfolio();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
            {personalInfo.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {personalInfo.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            {personalInfo.experience}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary">
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center items-center gap-8 text-gray-600">
            {heroStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                {index > 0 && <div className="h-12 w-px bg-gray-300"></div>}
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
