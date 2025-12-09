import React from "react";

const About = () => {
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
            <p className="text-gray-600 leading-relaxed">
              Software Developer with{" "}
              <strong>10 years of professional experience</strong>, including
              <strong> 4 years as a React.js Developer</strong> and{" "}
              <strong>6 years in PHP & WordPress development</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Strong expertise in building scalable front-end applications,
              custom WordPress systems, REST API integrations, and responsive
              UI/UX solutions. Experienced in product-based development,
              optimization, and modern JavaScript best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="text-2xl font-bold text-primary">10+ Years</p>
            </div>
            <div className="card">
              <p className="text-sm text-gray-500">React.js</p>
              <p className="text-2xl font-bold text-primary">4 Years</p>
            </div>
            <div className="card">
              <p className="text-sm text-gray-500">WordPress</p>
              <p className="text-2xl font-bold text-primary">6 Years</p>
            </div>
            <div className="card">
              <p className="text-sm text-gray-500">Sites Managed</p>
              <p className="text-2xl font-bold text-primary">400+</p>
            </div>
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
                <strong>Name:</strong> Chetan Prakash Shinde
              </p>
              <p>
                <strong>Location:</strong> Pune, India
              </p>
              <p>
                <strong>Availability:</strong> Open to worldwide remote roles
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:chetanshinde265@gmail.com"
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
              <li className="flex items-start">
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
                Optimized WordPress product listing from 20+ seconds to 3-5
                seconds
              </li>
              <li className="flex items-start">
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
                Managed 400+ WordPress websites with 1 lakh+ products per site
              </li>
              <li className="flex items-start">
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
                Built custom React.js plugins for high-performance product
                management
              </li>
              <li className="flex items-start">
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
                Deployed solutions across 360+ client websites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
