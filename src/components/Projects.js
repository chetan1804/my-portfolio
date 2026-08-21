import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const DetailList = ({ title, items, tone = "blue" }) => {
  const tones = {
    blue: "border-blue-100 bg-blue-50/50",
    green: "border-emerald-100 bg-emerald-50/60",
    purple: "border-purple-100 bg-purple-50/60",
  };

  return (
    <div className={`rounded-xl border p-5 ${tones[tone]}`}>
      <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start text-gray-700 text-sm leading-relaxed">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturedProject = ({ project }) => (
  <article className="md:col-span-2 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(59,130,246,0.14)] animate-slide-up">
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-8 md:px-10 md:py-10 text-white">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-blue-400/15 border border-blue-300/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-100">
              {project.eyebrow}
            </span>
            <span className="text-sm text-emerald-300 font-semibold">
              ● {project.status}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {project.title}
          </h3>
          <p className="text-blue-100 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </div>
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 font-semibold hover:bg-white hover:text-blue-950 transition-colors"
          >
            View source
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-white">{metric.value}</div>
            <div className="font-semibold text-blue-100 mt-1">{metric.label}</div>
            <div className="text-xs text-blue-200 mt-1">{metric.detail}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-6 md:p-10 space-y-8">
      <div className="rounded-xl border-l-4 border-primary bg-gradient-to-r from-blue-50 to-purple-50 p-4">
        <p className="font-bold text-gray-900">⚡ {project.highlight}</p>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-4">Complete Tech Stack</h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {project.stack.map((stackGroup) => (
            <div key={stackGroup.group} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <h5 className="font-bold text-gray-800 mb-3">{stackGroup.group}</h5>
              <div className="flex flex-wrap gap-2">
                {stackGroup.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 bg-white border border-blue-100 text-primary rounded-full text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailList title="Product Scope & Key Capabilities" items={project.features} />

      <div className="grid xl:grid-cols-3 gap-5">
        <DetailList
          title={project.accuracyTitle || "Accuracy & AI Reliability"}
          items={project.accuracy}
          tone="green"
        />
        <DetailList
          title={project.improvementsTitle || "Engineering Improvements"}
          items={project.improvements}
          tone="purple"
        />
        <DetailList
          title={project.observabilityTitle || "Production Observability"}
          items={project.observability}
          tone="blue"
        />
      </div>
    </div>
  </article>
);

const StandardProject = ({ project, index }) => (
  <article
    className="card group hover:-translate-y-1 transition-transform duration-300 animate-slide-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>

    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

    {project.highlight && (
      <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-primary">
        <p className="text-sm font-semibold text-gray-900">⚡ {project.highlight}</p>
      </div>
    )}

    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
    <ul className="space-y-1">
      {project.features.map((feature) => (
        <li key={feature} className="flex items-start text-gray-600 text-sm">
          <CheckIcon />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Projects = () => {
  const { projects } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "AI / GenAI", value: "ai" },
    { label: "React.js", value: "react" },
    { label: "WordPress", value: "wordpress" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title text-gray-900">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) =>
          project.featured ? (
            <FeaturedProject key={project.title} project={project} />
          ) : (
            <StandardProject key={project.title} project={project} index={index} />
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;
