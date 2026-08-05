import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Hero = () => {
  const { personalInfo, heroStats } = usePortfolio();
  const aiHighlights = ["GenAI", "Agentic AI", "RAG", "LLMs", "FastAPI"];

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb top-20 left-10 bg-blue-200/40"></div>
        <div className="hero-orb bottom-20 right-10 bg-purple-200/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 backdrop-blur border border-blue-100 shadow-sm mb-6 text-sm font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            AI Product Engineer • Generative AI • Agentic Systems
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Hi, I'm <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
            {personalInfo.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {personalInfo.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.experience}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {aiHighlights.map((item) => (
              <span
                key={item}
                className="ai-chip hover:-translate-y-0.5 hover:shadow-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#skills" className="btn-primary">
              View Skills
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-gray-600">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium">{stat.label}</p>
              </div>
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
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
