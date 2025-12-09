import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: [
        "React.js",
        "Redux",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Responsive UI",
        "Component Architecture",
        "AJAX",
        "jQuery",
      ],
    },
    {
      title: "Back-end",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: [
        "PHP",
        "WordPress",
        "REST API Development",
        "Node.js (Theory)",
        "Express.js (Theory)",
        "Custom Plugins",
        "Theme Development",
        "WordPress Hooks",
        "Custom APIs",
      ],
    },
    {
      title: "Database",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: ["SQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        "Git",
        "GitHub/GitLab",
        "Jira",
        "CI/CD",
        "Docker",
        "Webpack",
        "Vite",
        "Parcel",
        "Babel",
        "AWS/Vercel Deployment",
      ],
    },
    {
      title: "Other Skills",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      skills: [
        "Agile/Scrum",
        "Code Review",
        "Performance Optimization",
        "Team Collaboration",
        "Problem Solving",
        "Best Practices",
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title text-gray-900">
        Technical <span className="text-primary">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="card animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Highlights */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-4xl mb-4">🚀</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            Performance Expert
          </h4>
          <p className="text-gray-600 text-sm">
            Reduced load times from 20+ seconds to 3-5 seconds through
            optimization
          </p>
        </div>
        <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="text-4xl mb-4">⚛️</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            React Specialist
          </h4>
          <p className="text-gray-600 text-sm">
            4 years building scalable React applications with modern best
            practices
          </p>
        </div>
        <div className="card text-center bg-gradient-to-br from-pink-50 to-pink-100">
          <div className="text-4xl mb-4">🎯</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            WordPress Master
          </h4>
          <p className="text-gray-600 text-sm">
            6 years managing 400+ enterprise WordPress sites with custom
            solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
