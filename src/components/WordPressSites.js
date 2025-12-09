import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

const WordPressSites = () => {
  const { wordpressSites: sites, wordpressStats } = usePortfolio();
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="wordpress-sites" className="section-container bg-white">
      <h2 className="section-title text-gray-900">
        WordPress <span className="text-blue-500">Portfolio</span>
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="card bg-gradient-to-br from-blue-50 to-purple-50 text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {wordpressStats.totalSites} WordPress Websites Managed
          </h3>
          <p className="text-gray-600 mb-6">
            Successfully managing and maintaining enterprise-level WordPress
            multisite installations with {wordpressStats.productsPerSite}{" "}
            products per site
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">
                {wordpressStats.totalSites}
              </p>
              <p className="text-sm text-gray-600">Active Websites</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">
                {wordpressStats.productsPerSite}
              </p>
              <p className="text-sm text-gray-600">Products Per Site</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">
                {wordpressStats.experience}
              </p>
              <p className="text-sm text-gray-600">WordPress Experience</p>
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {showAll ? "Hide Website List" : "View All WordPress Websites"}
            <svg
              className={`inline-block w-5 h-5 ml-2 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {showAll && (
          <div className="animate-slide-up">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Complete WordPress Portfolio
                </h3>
                <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium">
                  {sites.length} Websites
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
                {sites.map((site, index) => (
                  <a
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
                        {site.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {site.url.replace("https://", "")}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0"
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
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All websites are actively managed with
                  custom WordPress plugins, multisite configurations, and
                  high-performance product management systems handling 100,000+
                  products per site.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WordPressSites;
