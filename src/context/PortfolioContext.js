import React, { createContext, useContext } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const portfolioData = {
    // Personal Information
    personalInfo: {
      name: "Chetan Prakash Shinde",
      title: "AI Engineer | Generative AI & Agentic Systems",
      subtitle:
        "Agentic AI | LLM Evaluation | MLOps | FastAPI | Python | React | AWS | DigitalOcean",
      experience:
        "10+ years of software engineering with hands-on delivery of AI products, LLM workflows, and scalable web platforms",
      email: "chetanshinde265@gmail.com",
      phone: "+91 9766363775",
      location: "Pune, India",
      linkedin: "https://www.linkedin.com/in/chetan-shinde-8695827a/",
      github: "https://github.com/chetan1804",
      availability: "REMOTE Full Time | Part Time | Freelance projects",
    },

    // Hero Stats
    heroStats: [
      { label: "Years Experience", value: "10+" },
      { label: "GenAI Focus", value: "2+ Years" },
      { label: "LLM & RAG", value: "Production" },
    ],

    // About Section
    about: {
      summary: `AI Engineer with 10+ years of software delivery experience, now focused on generative AI, agentic systems, RAG pipelines, LLM orchestration, and production-grade Python services.`,
      description: `I design and ship end-to-end AI experiences using Python, FastAPI, React, ML/DL workflows, data analytics pipelines, and enterprise-ready retrieval-augmented generation systems. My work bridges product engineering, applied AI, and real-world deployment.`,
      stats: [
        { label: "Experience", value: "10+ Years" },
        { label: "AI Focus", value: "2+ Years" },
        { label: "LLM / RAG", value: "Production" },
        { label: "FastAPI", value: "Python APIs" },
      ],
      achievements: [
        "Designed LLM-powered RAG systems for enterprise knowledge retrieval and conversational workflows",
        "Built agentic AI assistants for orchestration, task execution, and retrieval-based automation",
        "Delivered Python APIs with FastAPI for AI services, analytics, and secure integrations",
        "Applied ML, deep learning, and data analytics libraries to transform raw business data into actionable intelligence",
        "Combined strong frontend engineering with backend AI delivery using React, REST APIs, and scalable systems",
      ],
    },

    // Skills
    skills: [
      {
        title: "Generative AI & LLMs",
        skills: [
          "Generative AI",
          "Agentic AI",
          "LLMs",
          "RAG",
          "LangChain",
          "LangGraph",
          "Prompt Engineering",
          "Fine-tuning",
          "Multi-Agent Systems",
          "LlamaIndex",
          "Semantic Search",

          "Transfer Learning",
          "Qdrant Vector DB",
          "Pinecone",
          "FAISS",
          "Chroma DB",
          "Hugging Face",
          "LLaMA",
          "Mistral",
          "AI Product Design",
        ],
      },
      {
        title: "ML & Data",
        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-learn",
          "PyTorch",
          "TensorFlow",
          "Keras",
          "Matplotlib",
          "Seaborn",
          "Jupyter",
          "Data Analytics",
          "Exploratory Data Analysis",
          "Feature Engineering",
          "Model Evaluation",
        ],
      },
      {
        title: "Backend & APIs",
        skills: [
          "FastAPI",
          "Pydantic",
          "REST API Development",
          "Python Web Services",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "SQL",
          "GraphQL",
          "OpenAI API",
          "Anthropic API",
          "Google Gemini API",
          "Groq API",
          "Together AI",
          "Authentication",
          "API Integration",
        ],
      },
      {
        title: "Product & Frontend",
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
          "Full-stack UI Delivery",
        ],
      },
      {
        title: "MLOps & Deployment",
        skills: [
          "AWS",
          "DigitalOcean",
          "Git & GitHub",
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "CI/CD Pipelines",
          "GitHub Actions",
          "Model Deployment",
          "Redis",
          "Monitoring & Observability",
          "Nginx",
          "Structured JSON Logging",

          "Performance Profiling",
          "Load & Performance Testing",
        ],
      },
      {
        title: "AI Tools & Assistants",
        skills: [
          "GitHub Copilot",
          "ChatGPT",
          "Claude",
          "Gemini",
          "Cursor AI",
          "Codex",
          "Amazon CodeWhisperer",
          "OpenAI Codex",
          "Claude Code",
          "Perplexity AI",
          "Groq",
          "Ollama",
          "LangSmith",
          "Hugging Face Spaces",
          "Lovable",
          "AI Code Assistants",
          "Prompt Optimization",
        ],
      },
    ],

    // Experience
    experience: [
      {
        company: "CanWill Technologies Pvt. Ltd.",
        position: "AI Engineer | Senior Software Engineer",
        duration: "Nov 2018 – Present (7+ Years)",
        location: "Pune, India",
        type: "Full-time",
        highlights: [
          "Architected and delivered AI-first product features centered on generative AI, LLM workflows, RAG pipelines, and FastAPI-backed services",
          "Built retrieval-augmented generation systems that connect enterprise knowledge sources, vector stores, and LLM inference for contextual response generation",
          "Developed agentic AI assistants for workflow orchestration, task automation, decision support, and structured output generation",
          "Applied machine learning, deep learning, and data analytics workflows using Python libraries such as Pandas, NumPy, Scikit-learn, PyTorch, and TensorFlow",
          "Created production-ready Python APIs with FastAPI and Pydantic to expose AI, analytics, and integration services to internal and external clients",
          "Partnered with product and engineering teams to convert business data into AI-powered experiences and measurable insight dashboards",
          "Maintained a strong frontend foundation with React.js, reusable components, API-driven UIs, and performance-focused architecture",
          "Advanced enterprise WordPress and React platforms where fast data access and search optimization were critical for large-scale product catalogs",
          "Led performance engineering initiatives for high-volume catalog systems, reducing load times and improving end-user responsiveness",
        ],
      },
      {
        company: "Mulika Infotech Pvt. Ltd.",
        position: "Software Engineer",
        duration: "Oct 2015 – Oct 2018 (3 Years)",
        location: "Pune, India",
        type: "Full-time",
        highlights: [
          "Converted PSD and design mockups into fully responsive, pixel-perfect websites using HTML, CSS, JavaScript, and PHP",
          "Built custom WordPress themes and templates aligned with client design requirements",
          "Ensured cross-browser compatibility, mobile responsiveness, and performance optimization across all delivered websites",
          "Worked closely with designers and project managers to deliver high-quality front-end interfaces on time",
        ],
      },
    ],

    // Projects
    projects: [
      {
        title: "ArthNivo — AI-Powered Personal Finance Platform",
        category: "ai",
        featured: true,
        eyebrow: "Flagship AI Engineering Project",
        status: "Production-ready · 20-step roadmap complete",
        repository: "https://github.com/chetan1804/finance-ai-assistant",
        description:
          "Designed and built an end-to-end, multi-user personal finance product that combines transaction intelligence, deterministic financial analytics, and a context-aware AI assistant. ArthNivo turns natural-language questions into safe, user-scoped finance queries while keeping every monetary answer grounded in verified database results.",
        metrics: [
          {
            value: "100%",
            label: "Query accuracy",
            detail: "Verified deterministic evaluation",
          },
          {
            value: "12",
            label: "AI regression cases",
            detail: "Finance, context, and adversarial flows",
          },
          {
            value: "≤500ms",
            label: "CI p95 budget",
            detail: "Readiness-path performance gate",
          },
          {
            value: "20+ RPS",
            label: "CI throughput floor",
            detail: "With a zero-error budget",
          },
        ],
        stack: [
          {
            group: "AI & Agentic",
            items: [
              "LangGraph",
              "LangChain",
              "Groq / Llama 3.3",
              "Tool Calling",
              "Structured Outputs",
              "Prompt Engineering",
              "Conversation Memory",
            ],
          },
          {
            group: "Backend & Data",
            items: [
              "Python",
              "FastAPI",
              "Pydantic",
              "PostgreSQL",
              "SQLite",
              "Psycopg",
              "Redis",
              "Versioned SQL Migrations",
            ],
          },
          {
            group: "ML & Analytics",
            items: [
              "Scikit-learn",
              "TF-IDF",
              "Logistic Regression",
              "Pandas",
              "NumPy",
              "Model Evaluation",
              "Confusion Matrix",
            ],
          },
          {
            group: "Frontend",
            items: [
              "React",
              "TypeScript",
              "Vite",
              "Responsive Dashboard",
              "Vitest",
            ],
          },
          {
            group: "Cloud, DevOps & Security",
            items: [
              "AWS Lightsail",
              "Docker",
              "Docker Compose",
              "GitHub Actions",
              "Caddy",
              "Prometheus",
              "JSON Logging",
              "Argon2",
            ],
          },
        ],
        features: [
          "Income, expense, savings, cash-flow, category, budget, and goal analytics with date-aware filtering",
          "Context-aware AI chat with follow-up resolution, user-isolated conversation checkpoints, and personalized language, currency, income, and risk preferences",
          "Transaction categorization using TF-IDF and Logistic Regression with model comparison, precision, recall, F1, and confusion-matrix evaluation",
          "Recurring transactions, loan EMI automation, SIP/LIC/RD/FD investment tracking, contribution scheduling, and gain/loss reporting",
          "Atomic CSV import, spreadsheet-safe CSV export, complete JSON data export, persistent notifications, and verified backup/restore workflows",
          "Secure authentication with access/refresh sessions, password rotation, logout-all, account deletion, user-scoped queries, and rate limiting",
        ],
        accuracy: [
          "Achieved 100% query accuracy across the 12-case deterministic regression suite; the release pipeline enforces this as a hard quality gate.",
          "Restricted the LLM to intent classification and optional category/date extraction; final amounts are rendered directly from verified database results to prevent numerical hallucination.",
          "Added structured output validation and allowlisted finance tools so unsupported intents, invalid dates, and cross-user requests fail safely before database execution.",
          "Built live evaluation for context accuracy, field extraction, grounding, and unsafe-output leakage, with a configurable 90% pre-release threshold.",
          "Added adversarial cases for prompt injection, privilege escalation, system-prompt extraction, encoded attacks, and credential exfiltration.",
        ],
        improvements: [
          "Evolved a local finance tracker into a production-shaped multi-user platform with a typed React frontend and a versioned FastAPI API.",
          "Migrated production persistence from SQLite to pooled PostgreSQL while retaining zero-configuration SQLite locally; moved LangGraph checkpoints to PostgreSQL for multi-replica continuity.",
          "Added Redis-backed distributed rate limiting, dependency-aware readiness checks, automatic migrations, and idempotent finance workflows.",
          "Hardened provider calls with a 20-second timeout, two retries, a 300-token ceiling, injection screening, and safe failure responses.",
          "Created a verified release pipeline that runs backend/frontend tests, AI and performance gates, builds a non-root container, publishes an SBOM, and generates provenance attestations.",
        ],
        observability: [
          "Propagates an X-Request-ID on every response for end-to-end request correlation.",
          "Emits privacy-safe structured JSON logs with route template, status, duration, environment, error class, and AI stage—never request bodies, tokens, or financial values.",
          "Exposes Prometheus counters and histograms for request volume, response status, and latency, plus gauges for database, checkpoint-store, and rate-limiter readiness.",
          "Provides /health, /ready, /version, and /metrics endpoints for liveness, dependency diagnostics, release traceability, and monitoring integration.",
          "Runs a repeatable load gate that reports RPS, error rate, p50, p95, p99, and max latency and fails CI when the service budget is missed.",
        ],
        highlight:
          "Reliable AI by design: the model interprets; verified services calculate.",
      },
      {
        title: "AI-Powered Flooring Product Recommendation Chatbot",
        category: "ai",
        featured: true,
        eyebrow: "Agentic AI Product Discovery",
        status: "Client project · US flooring e-commerce",
        description:
          "Designed an AI-powered conversational recommendation system for a US flooring e-commerce business with a catalog of more than 100,000 products. The chatbot translates natural-language requirements into structured filters, preserves customer preferences across multiple turns, and combines database filtering with semantic search to rank the most relevant flooring products.",
        metrics: [
          {
            value: "100K+",
            label: "Catalog products",
            detail: "Processed from client JSON data",
          },
          {
            value: "Hybrid",
            label: "Retrieval strategy",
            detail: "Structured filters + semantic search",
          },
          {
            value: "Multi-turn",
            label: "Conversation state",
            detail: "Customer preferences retained",
          },
          {
            value: "3-stage",
            label: "Recommendation flow",
            detail: "Filter, retrieve, and rank",
          },
        ],
        stack: [
          {
            group: "AI & Agentic",
            items: [
              "Python",
              "LangChain",
              "LangGraph",
              "LLMs",
              "Structured Outputs",
              "Prompt Engineering",
              "Conversational State",
            ],
          },
          {
            group: "Data & Retrieval",
            items: [
              "PostgreSQL",
              "pgvector",
              "Embedding Models",
              "SQL Filtering",
              "Semantic Search",
              "Vector Similarity Search",
              "Hybrid Retrieval",
            ],
          },
          {
            group: "Catalog Processing",
            items: [
              "JSON Data Pipeline",
              "Data Transformation",
              "Product Attributes",
              "Metadata Preparation",
              "Embedding Generation",
              "Catalog Indexing",
            ],
          },
          {
            group: "Recommendation Intelligence",
            items: [
              "Requirement Extraction",
              "Preference Tracking",
              "Candidate Retrieval",
              "Product Ranking",
              "Constraint Matching",
              "Conversational Recommendations",
            ],
          },
        ],
        features: [
          "Understands conversational requests involving flooring type, material, color, style, room, budget, waterproofing, dimensions, brand, installation, and other product attributes",
          "Converts natural-language requirements into structured, executable product-search criteria",
          "Maintains customer preferences across multiple interactions so users do not need to repeat previously supplied requirements",
          "Combines exact PostgreSQL filters with pgvector semantic similarity search for intent-aware product discovery",
          "Reduces the candidate set before ranking and returns a focused selection of relevant flooring products",
          "Processes and transforms more than 100,000 JSON product records for structured storage and AI-powered retrieval",
        ],
        accuracyTitle: "Retrieval Quality & Relevance",
        accuracy: [
          "Applies structured filtering to exact constraints such as price, flooring type, material, dimensions, availability, and waterproofing.",
          "Uses embedding-based semantic search for descriptive requirements including style, appearance, intent, and related concepts when catalog wording differs from the customer's language.",
          "Combines both retrieval methods so semantically similar products cannot bypass important business constraints and exact-keyword mismatches do not hide relevant products.",
          "Ranks the retrieved candidates before presenting recommendations, limiting results to the products that most closely match the accumulated requirements.",
          "Preserves conversational state through LangGraph so follow-up answers refine the active search instead of restarting product discovery.",
        ],
        improvementsTitle: "Scalability & Engineering",
        improvements: [
          "Transformed a raw catalog of more than 100,000 JSON records into structured product data suitable for PostgreSQL queries, embedding generation, and AI retrieval.",
          "Reduced the semantic-search space by applying structured business constraints before candidate ranking.",
          "Separated LLM-based requirement understanding from deterministic catalog filtering, preventing the model from acting as the product database.",
          "Designed the retrieval workflow around PostgreSQL and pgvector so structured attributes and vector embeddings remain available through one data layer.",
          "Created a reusable requirement-extraction flow capable of handling the many attributes involved in residential and commercial flooring selection.",
        ],
        observabilityTitle: "Agent & Retrieval Workflow",
        observability: [
          "Interprets the customer's request with an LLM and extracts explicit and descriptive flooring preferences.",
          "Updates the LangGraph conversation state with newly supplied requirements while retaining relevant preferences from earlier turns.",
          "Builds structured database filters and a semantic query from the accumulated customer requirements.",
          "Retrieves candidates through PostgreSQL and pgvector, then ranks them against the customer's combined constraints and intent.",
          "Returns a concise conversational recommendation based on the highest-ranked matching products.",
        ],
        highlight:
          "Hybrid product discovery: exact catalog constraints narrow the search while semantic retrieval captures how customers naturally describe the flooring they want.",
      },
      {
        title: "Product Dashboard",
        category: "react",
        tech: ["React.js", "Redux", "Vite", "React Router"],
        description:
          "Modern React-based admin dashboard for managing multi-store e-commerce operations. Built with Vite, React 18, Redux Toolkit, and React Router, providing comprehensive interface for products, orders, inventory, customers, and analytics.",
        features: [
          "Multi-store management",
          "Product & inventory control",
          "Order processing system",
          "Customer management",
          "Real-time analytics dashboard",
        ],
      },
      {
        title: "CDE Platform",
        category: "react",
        tech: ["React.js", "REST API", "Frontend Engineering"],
        description:
          "Front-end engineering project for CDE platform with client profile management and promotions module.",
        features: [
          "Client profile creation and updates",
          "Promotions module for all clients",
          "Blogs section implementation",
          "Uptime monitoring features",
          "NFA client management",
          "Seamless API integration",
        ],
      },
      {
        title: "MM Product Listing Plugin",
        category: "wordpress",
        tech: ["WordPress", "React.js", "PHP", "REST API"],
        description:
          "Custom WordPress plugin using React.js to handle large-scale flooring product data for enterprise clients. Reduced load time from 20+ seconds to 3-5 seconds.",
        features: [
          "Handle 100K+ products per site",
          "High-performance product listing",
          "Advanced filtering system",
          "Category-wise product display",
          "Dynamic product sliders",
          "Deployed on 360+ websites",
        ],
        highlight: "Performance optimization reduced load time by 85%",
      },
      {
        title: "MangoShare",
        category: "react",
        tech: ["React.js", "File Encryption", "Security"],
        description:
          "Secure file-sharing platform for accountants combining portal-level security with email accessibility.",
        features: [
          "Encrypted file transfers",
          "Role-based access control",
          "Audit tracking system",
          "Compliance with data protection",
          "Optimized upload/download",
          "Enterprise-grade security",
        ],
      },
      {
        title: "WordPress Multisite Management",
        category: "wordpress",
        tech: ["WordPress Multisite", "PHP", "Custom Plugins", "REST API"],
        description:
          "Managed 400+ WordPress websites for enterprise client with high-volume product catalogs and centralized management system.",
        features: [
          "Manage 400+ WordPress sites",
          "Centralized product management",
          "Custom API integrations",
          "Automated workflows",
          "Social media integrations",
          "Performance optimization",
        ],
      },
    ],

    // Education
    education: [
      {
        degree: "Bachelor's Degree in Computer Science",
        year: "2014",
        type: "Graduation",
        icon: "🎓",
      },
      {
        degree: "Higher Secondary Certificate (HSC) - Science",
        year: "2011",
        type: "HSC",
        icon: "📚",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        year: "2009",
        type: "SSC",
        icon: "📖",
      },
    ],

    // Certifications
    certifications: [
      {
        name: "Namaste React.js",
        issuer: "by Akshay Saini",
        description:
          "Comprehensive React.js course covering modern React concepts, hooks, performance optimization, and best practices",
        icon: "⚛️",
        color: "from-blue-50 to-blue-100",
      },
      {
        name: "Namaste JavaScript",
        issuer: "by Akshay Saini",
        description:
          "Deep dive into JavaScript fundamentals, closures, async programming, and advanced concepts. The series is widely recommended for building strong core JavaScript knowledge.",
        icon: "🟨",
        color: "from-yellow-50 to-yellow-100",
      },
      {
        name: "Prompt Engineering",
        issuer: "by SimpliLearn",
        description:
          "AI prompt design and optimization techniques for effective AI interactions, RAG prompting, and context-aware model outputs",
        icon: "🤖",
        color: "from-yellow-50 to-yellow-100",
      },
      {
        name: "C, C++ Programming",
        issuer: "Professional Certification",
        description:
          "Core programming concepts and object-oriented programming principles",
        icon: "💻",
        color: "from-purple-50 to-purple-100",
      },
      {
        name: "Java Programming",
        issuer: "Professional Certification",
        description:
          "Java programming fundamentals and application development",
        icon: "☕",
        color: "from-orange-50 to-orange-100",
      },
      {
        name: "SQL Database",
        issuer: "Professional Certification",
        description: "Database design, queries, and management with SQL",
        icon: "🗄️",
        color: "from-green-50 to-green-100",
      },
    ],

    // WordPress Sites
    wordpressSites: [
      { name: "A & M Flooring And Design", url: "https://aandmflooring.com/" },
      {
        name: "A & S Carpet Collection",
        url: "https://ascarpetcollection.com/",
      },
      { name: "A&R Floor Supplies", url: "https://arfloorsupplies.com/" },
      { name: "AC Carpet Plus", url: "https://accarpetplus.com/" },
      { name: "ACO Floors", url: "https://acofloors.com/" },
      {
        name: "Affinity Flooring Of The Desert",
        url: "https://affinityflooring.com/",
      },
      {
        name: "Affordable Flooring Warehouse",
        url: "https://affordableflooringwarehouse.com/",
      },
      { name: "AJ Rose Carpets", url: "https://ajrosecarpets.com/" },
      { name: "Alfieri Floor Experts", url: "https://alfierifloorexperts.ca/" },
      {
        name: "All American Flooring",
        url: "https://www.allamericanflooring.net/",
      },
      { name: "All Floors", url: "https://allfloors.ca/" },
      { name: "All Floors & More", url: "https://allfloorstore.com/" },
      {
        name: "Allied Flooring & Paint",
        url: "https://alliedflooringandpaint.com/",
      },
      { name: "Ambassador Flooring", url: "https://www.ambassadorfloor.com/" },
      {
        name: "Americas Flooring Store",
        url: "https://americasflooringstore.com/",
      },
      {
        name: "Anderson Custom Carpeting",
        url: "https://andersoncarpeting.com/",
      },
      { name: "Andrews Flooring LLC", url: "https://andrewsflooringllc.com/" },
      { name: "Baker Valley Floors", url: "https://bakervalleyfloors.com/" },
      { name: "Barrett Floors", url: "https://barrettfloorsaz.com/" },
      { name: "Basin Appliance", url: "https://basinflooring.com/" },
      {
        name: "Battle Creek Tile & Mosaic Co Inc",
        url: "https://battlecreektile.com/",
      },
      { name: "Bay Country Floors", url: "https://baycountryfloors.com/" },
      { name: "Beach Pro Flooring", url: "https://beachproflooring.com/" },
      { name: "Bell County Flooring", url: "https://bellcountyflooring.com/" },
      { name: "Bereman Carpets Inc", url: "https://beremancarpets.com/" },
      {
        name: "Best Buy Interior Finishes",
        url: "https://www.bbifinishes.com/",
      },
      { name: "BFC Flooring & Design Centre", url: "https://bfcflooring.com/" },
      { name: "Birons Flooring Inc", url: "https://bironsflooring.com/" },
      { name: "Bixby Knolls Carpet", url: "https://bixbyknollscarpet.com/" },
      { name: "Black Hills Flooring", url: "https://blackhillsflooring.com/" },
      {
        name: "Blackhurst Carpet & Furniture",
        url: "https://blackhurstcarpetandfurniture.com/",
      },
      { name: "Blair Mill Outlet", url: "https://blairmilloutlet.com/" },
      { name: "BMG Flooring & Tile Center", url: "https://bmgflooring.com/" },
      { name: "Bob & Pete's Floors", url: "https://bobandpetesfloors.com/" },
      {
        name: "Bobs Discount Carpet Inc",
        url: "https://bobsdiscountcarpetinc.com/",
      },
      {
        name: "Bodamer Brothers Flooring",
        url: "https://bodamerbrothers.com/",
      },
      { name: "Body Forge", url: "https://bodyforge.us/" },
      {
        name: "Bow Family Furniture & Flooring",
        url: "https://www.familyfurnitureandflooring.com/",
      },
      {
        name: "Bowlings Carpet",
        url: "https://cincinnaticarpetandflooring.com/",
      },
      {
        name: "Boyer's Floor Covering",
        url: "https://boyersfloorcovering.com/",
      },
      { name: "Boyles Flooring", url: "https://boylesflooringinc.com/" },
      { name: "Bram Flooring", url: "https://bramflooring.com/" },
      {
        name: "Brian's Flooring & Design",
        url: "https://shopbriansflooring.com/",
      },
      {
        name: "Broadway Carpet & Flooring",
        url: "https://broadwaycarpets.com/",
      },
      {
        name: "Brooks Flooring Services Inc",
        url: "https://brooks-flooring.com/",
      },
      { name: "Bryson Carpet", url: "https://brysoncarpetbrevard.com/" },
      { name: "Buckway Flooring", url: "https://buckwayflooringdesign.com/" },
      { name: "Bud Polley's Floor Center", url: "https://budpolley.com/" },
      {
        name: "Burris Carpet Plus, Inc.",
        url: "https://burriscarpetplus.com/",
      },
      { name: "Burton Flooring, Inc", url: "https://burtonflooringinc.com/" },
      { name: "C & C Tile & Carpet Co", url: "https://cctileandcarpet.com/" },
      {
        name: "California Cushion & Carpet",
        url: "https://californiacushionandcarpet.com/",
      },
      {
        name: "California Renovation",
        url: "https://californiarenovation.com/",
      },
      {
        name: "Calvetta Brothers Mentor",
        url: "https://calvettabrothersmentor.com/",
      },
      {
        name: "Calvetta Brothers Northfield",
        url: "https://calvettabrothersnorthfield.com/",
      },
      {
        name: "Campbell's Carpet of Nevada",
        url: "https://www.campbellscarpets.com/",
      },
      { name: "Canales Flooring", url: "https://canalesflooring.com/" },
      {
        name: "Carpet Advantage Company Inc",
        url: "https://carpetadvantage.net/",
      },
      { name: "Carpet City", url: "https://carpetcityhopkinstile.com/" },
      { name: "Carpet Collection", url: "https://carpetcollection.com/" },
      {
        name: "Carpet Direct Flooring",
        url: "https://carpetdirectflooring.com/",
      },
      { name: "Carpet Empire Plus", url: "https://carpetempireplus.com/" },
      { name: "Carpet Exchange", url: "https://carpetexchangetx.com/" },
      { name: "Carpet Exchange", url: "https://coretecexchange.com/" },
      { name: "Carpet Gallery", url: "https://carpetgalleryfloors.com/" },
      {
        name: "Carpet House Flooring Center",
        url: "https://carpethouseohio.com/",
      },
      { name: "Carpet Mart, INC", url: "https://mycarpetmart.com/" },
      { name: "Carpet Masters, LLC", url: "https://carpetmastersinc.com/" },
      { name: "Carpet Plus", url: "https://carpetplus.com/" },
      {
        name: "Carpet Selections, Inc.",
        url: "https://carpetselectionsky.com/",
      },
      { name: "Carpet Source", url: "https://carpetsourcekc.com/" },
      {
        name: "Carpet Specialists",
        url: "https://carpetspecialistsonline.com/",
      },
      { name: "Carpet To Go", url: "https://carpettogo.com/" },
      { name: "Carpet Town", url: "https://carpettownfloors.com/" },
      { name: "Carpet USA", url: "https://carpetusainc.com/" },
      { name: "Carpet Warehouse", url: "https://carpetwarehousein.com/" },
      { name: "Carpet World Of Alaska", url: "https://carpetworldalaska.com/" },
      { name: "Carpet Your World", url: "https://carpetyourworld.com/" },
      { name: "Carpeteria", url: "https://carpeteria.com/" },
      { name: "Carpetland USA", url: "https://carpetland-usa.com/" },
      { name: "Carpetland USA", url: "https://carpetlandgrandjunction.com/" },
      {
        name: "Carpetland USA Granite & Flooring",
        url: "https://carpetlandusaal.com/",
      },
      {
        name: "Carpetland USA of Virginia",
        url: "https://carpetlandusava.com/",
      },
      { name: "Carpetland USA Wisconsin", url: "https://carpetlandusawi.com/" },
      { name: "Carpets by Direct", url: "https://carpetsbydirect.com/" },
      { name: "Carpets Of Dalton", url: "https://carpetsofdalton.com/" },
      { name: "Carpets To Go", url: "https://carpetstogonj.com/" },
      { name: "CarpetsPlus COLORTILE", url: "https://hoosiercarpetsplus.com/" },
      { name: "CarpetsPlus COLORTILE", url: "https://colortilebend.com/" },
      {
        name: "CarpetsPlus COLORTILE & Wholesale Flooring",
        url: "https://wholesaleflooringonline.com/",
      },
      {
        name: "CarpetsPlus COLORTILE of Hutchinson",
        url: "https://mycolortile.com/",
      },
      { name: "CarpetsPlus Of Wisconsin", url: "https://carpetspluswi.com/" },
      {
        name: "Carrera's Flooring & Blinds",
        url: "https://carrerasflooringandblinds.com/",
      },
      {
        name: "Castle Carpets & Interiors",
        url: "https://castlecarpetsandinteriors.com/",
      },
      {
        name: "Central Alberta Flooring",
        url: "https://centralabflooring.com/",
      },
      { name: "Chacon Flooring", url: "https://chaconflooringstore.com/" },
      {
        name: "Cherry City Interiors And Design",
        url: "https://cherrycityinteriors.com/",
      },
      {
        name: "Chesapeake Family Flooring",
        url: "https://chesapeakefamilyflooring.com/",
      },
      {
        name: "Chill And Grill Outdoor Living",
        url: "https://chillandgrilloutdoorliving.com/",
      },
      { name: "Chillicothe Carpet", url: "https://chillicothecarpet.com/" },
      {
        name: "Christian Brothers Flooring And Interiors",
        url: "https://cbfloorsinc.com/",
      },
      { name: "City Flooring, LLC", url: "https://cityflooringllc.com/" },
      {
        name: "Clark Dunbar Flooring Superstore",
        url: "https://clark-dunbar.com/",
      },
      {
        name: "Classic Flooring Center",
        url: "https://classicflooringcenter.com/",
      },
      {
        name: "Cleveland Carpets and Floors",
        url: "https://clevelandcarpetsandfloors.com/",
      },
      {
        name: "Coleman's Flooring & Blinds",
        url: "https://colemansflooring.com/",
      },
      { name: "Colonial Interiors", url: "https://colonialinteriors.net/" },
      { name: "Color Interiors", url: "https://colorinteriors.com/" },
      { name: "COLORTILE of Salem", url: "https://colortilesalem.com/" },
      { name: "Columbus Carpet", url: "https://columbuscarpetinc.com/" },
      { name: "Corvin's Floors & Cabinets", url: "https://corvins.com/" },
      {
        name: "Corvins Furniture & Flooring",
        url: "https://corvinsflooring.com/",
      },
      {
        name: "Country Carpet & Furniture",
        url: "https://countrycarpetfurniture.com/",
      },
      {
        name: "Country Manor Decorating",
        url: "https://countrymanordecorating.com/",
      },
      { name: "CR Carpet", url: "https://crflooring.com/" },
      {
        name: "Creative Home Enhanements, Inc",
        url: "https://creativehomeaz.net/",
      },
      { name: "Crest Flooring", url: "https://crestflooring.com/" },
      {
        name: "Custom Carpet Centers",
        url: "https://customcarpetcenters.com/",
      },
      { name: "Custom Floors", url: "https://customfloors.com/" },
      { name: "Custom Floors", url: "https://customfloorstn.com/" },
      { name: "D&D Carpets Inc", url: "https://danddcarpet.net/" },
      { name: "Dalton Direct Carpet", url: "https://daltondirectcarpet.com/" },
      {
        name: "Dalton Flooring Outlet",
        url: "https://daltonflooringoutlet.com/",
      },
      { name: "Dary Carpet & Floors", url: "https://darycarpet.com/" },
      { name: "De/Mar Design Studio", url: "https://demarfloor.com/" },
      { name: "Degraaf Interiors", url: "https://www.degraafinteriors.com/" },
      {
        name: "DeHaan Tile & Floor Covering",
        url: "https://dehaanfloorcovering.com/",
      },
      { name: "Dehart Tile", url: "https://deharttile.com/" },
      {
        name: "Derailed Commodity Flooring & Furniture",
        url: "https://derailedcommodity.com/",
      },
      { name: "Design Waterville", url: "https://designwaterville.com/" },
      {
        name: "Direct Carpet Unlimited",
        url: "https://directcarpetunlimited.com/",
      },
      {
        name: "Direct Flooring Center",
        url: "https://directflooringcenter.com/",
      },
      {
        name: "Discount Carpet Warehouse",
        url: "https://discountcarpetwarehouseinc.com/",
      },
      {
        name: "Distinctive Flooring",
        url: "https://distinctiveflooringshop.com/",
      },
      { name: "Dolphin Carpet", url: "https://www.dolphincarpet.com/" },
      {
        name: "Dolphin Carpet Campaigns",
        url: "https://campaigns.dolphincarpet.com/",
      },
      { name: "Donald E. McNabb Flooring", url: "https://demcnabb.com/" },
      {
        name: "Dudley Moore Awning & Floor Covering Inc",
        url: "https://dudleymoorefloors.com/",
      },
      { name: "Echo Flooring Gallery", url: "https://echoflooring.com/" },
      {
        name: "Elite Builder Services",
        url: "https://elitebuilderservices.com/",
      },
      { name: "Emo Flooring Company Inc", url: "https://emoflooring.com/" },
      { name: "Endwell Rug & Floor", url: "https://endwellrug.com/" },
      { name: "Enfield Carpet Center Inc", url: "https://enfieldcarpet.com/" },
      {
        name: "Enterprise Wholesale Flooring and Lighting",
        url: "https://enterprisewholesaleflooring.com/",
      },
      { name: "Everlast Floors", url: "https://everlastfloorsinc.com/" },
      { name: "F & A Flooring", url: "https://faflooringks.com/" },
      { name: "Fairmont Flooring", url: "https://fairmont-flooring.com/" },
      { name: "Family Flooring", url: "https://familyflooringidaho.com/" },
      {
        name: "Family Turf Wholesalers",
        url: "https://familyturfwholesalers.com/",
      },
      { name: "Fantastic Floors", url: "https://fanfloors.com/" },
      { name: "Faris Carpet & Tile", url: "https://fariscarpetandtile.com/" },
      {
        name: "Flemington Department Store",
        url: "https://flemingtonfloors.com/",
      },
      { name: "Floor Concepts", url: "https://floorconceptsinc.com/" },
      { name: "Floor Coverings of Winona", url: "https://winonafloors.com/" },
      { name: "Floor Max", url: "https://floormaxpro.com/" },
      { name: "FloorCo.", url: "https://floorcopremium.com/" },
      {
        name: "Flooring & Carpets For Less",
        url: "https://carpetsforless.ca/",
      },
      { name: "Flooring 101", url: "https://flooring101.com/" },
      { name: "Flooring and More", url: "https://flooringandmorekc.com/" },
      { name: "Flooring By Design", url: "https://flooringbydesign.com/" },
      { name: "Flooring By Design NC", url: "https://flooringbydesignnc.com/" },
      {
        name: "Flooring by Wilson's Carpet Plus",
        url: "https://flooringbywilsons.com/",
      },
      { name: "Flooring Concepts", url: "https://flooringconcepts.us/" },
      {
        name: "Flooring Depot of Panama City",
        url: "https://flooringdepotofpanama.com/",
      },
      {
        name: "Flooring Expo by Carpet King",
        url: "https://www.flooringexpo.com/",
      },
      { name: "Flooring Express", url: "https://flooringexp.com/" },
      {
        name: "Flooring Expressions",
        url: "https://flooringexpressionsindy.com/",
      },
      {
        name: "Flooring Liquidators Franchise",
        url: "https://franchise.flooringliquidators.net/",
      },
      { name: "Flooring You Well", url: "https://flooringyouwell.com/" },
      { name: "Floors And More Inc.", url: "https://floorsandmorede.com/" },
      { name: "Floors By Roberts", url: "https://floorsbyroberts.com/" },
      { name: "Floors In Motion", url: "https://floorsinmotion.com/" },
      { name: "Floors Plus, Inc", url: "https://floorsplusmodesto.com/" },
      {
        name: "Floors Unlimited Of Nc LLC",
        url: "https://floorsunlimitedllc.com/",
      },
      { name: "Floortrends", url: "https://www.floortrends.ca/" },
      { name: "Frazee Carpet", url: "https://gofrazee.com/" },
      {
        name: "Fredericks Floorcovering",
        url: "https://fredericksfloorcovering.com/",
      },
      {
        name: "Gainesville CarpetsPlus COLORTILE",
        url: "https://gainesvillecarpetsplus.com/",
      },
      {
        name: "Garrett & Sons Flooring",
        url: "https://garrettandsonscarpet.com/",
      },
      { name: "Gateway Floors", url: "https://gateway1inc.com/" },
      { name: "Georgia Flooring", url: "https://georgiaflooring.net/" },
      { name: "Giant Commercial Flooring", url: "https://gcflooring.ca/" },
      { name: "Gil's Carpets", url: "https://gilscarpets.com/" },
      { name: "Gillenwater", url: "https://gillenwaterflooring.com/" },
      { name: "Gilman Floors, LLC", url: "https://gilmanfloors.com/" },
      { name: "GMD Surfaces", url: "https://www.gmdsurfaces.com/" },
      {
        name: "Goetze Bros. Carpet & Furniture",
        url: "https://www.goetzebroscarpet.com/",
      },
      { name: "GraniteLand", url: "https://granitelandfl.com/" },
      {
        name: "Graniteland USA Kitchen & Bath",
        url: "https://granitelandusa.com/",
      },
      { name: "Great Floors", url: "https://greatfloors.com/" },
      {
        name: "Great Lakes Carpet & Tile",
        url: "https://greatlakescarpet.com/",
      },
      {
        name: "Green's Floors & More",
        url: "https://www.greensflooringkc.com/",
      },
      { name: "Gunn Flooring Company", url: "https://gunnflooring.com/" },
      { name: "H&R Carpets & Flooring", url: "https://hrcarpets.com/" },
      { name: "Hadinger Flooring", url: "https://www.hadingers.com/" },
      { name: "Hadinger Flooring", url: "https://hadingerflooring.com/" },
      { name: "Haight Carpet & Interiors", url: "https://haightcarpet.com/" },
      { name: "Harbins Floor Covering", url: "https://harbinsfloors.com/" },
      {
        name: "Hauptman Floor Covering Co Inc",
        url: "https://hauptmanfloors.com/",
      },
      { name: "Hedges Carpet Barn", url: "https://hedgescarpetbarn.com/" },
      { name: "Herman's Carpets", url: "https://hermanscarpets.ca/" },
      {
        name: "Hernandez Wholesale Flooring",
        url: "https://www.hernandezwholesaleflooring.net/",
      },
      { name: "Homespun Furniture", url: "https://homespunfurniture.com/" },
      { name: "Hopkins Floor Co", url: "https://hopkinsfloorco.com/" },
      { name: "House of Carpets", url: "https://hocflooring.com/" },
      {
        name: "House of Carpets & Lighting",
        url: "https://houseofcarpets.net/",
      },
      {
        name: "Howard-Carpenter Floor Covering",
        url: "https://howard-carpenter.com/",
      },
      { name: "Howmar Carpet Inc", url: "https://howmarcarpet.com/" },
      {
        name: "Hubbard Flooring Studio",
        url: "https://hubbardflooringstudio.com/",
      },
      {
        name: "Hurricane Floor Covering & Design",
        url: "https://hurricanefloorcoverings.com/",
      },
      { name: "I & J Carpets, Inc.", url: "https://iandjcarpets.com/" },
      { name: "In and Out Flooring", url: "https://inandoutflooring.com/" },
      { name: "Ivey Carpet & Flooring", url: "https://iveycarpet.com/" },
      {
        name: "J Lane Flooring & Design,Inc.",
        url: "https://jlaneflooring.com/",
      },
      { name: "J/K Carpet Center, Inc", url: "https://jkcarpetdealers.com/" },
      { name: "Jabara's", url: "https://jabaras.com/" },
      { name: "JCB Interiors", url: "https://jcbinteriors.com/" },
      {
        name: "Jimmie Lyles Flooring Gallery",
        url: "https://jimmielylesflooringgallery.com/",
      },
      { name: "JLG Floors & More", url: "https://jlgfloors.com/" },
      { name: "Joe's Floor Store", url: "https://joesfloorstore.com/" },
      { name: "Johnson Floor & Home", url: "https://johnsonfloorandhome.com/" },
      {
        name: "Johnston Paint & Decorating",
        url: "https://johnstonpaint.com/",
      },
      { name: "Jordans Flooring", url: "https://jordansflooring.ca/" },
      { name: "Joseph's Flooring", url: "https://josephsflooring.com/" },
      {
        name: "Jubilee Flooring & Decorating",
        url: "https://jubilee-flooring.com/",
      },
      {
        name: "Karen's Advance Floors",
        url: "https://karensadvancefloors.com/",
      },
      { name: "Kastran Karpets", url: "https://kastrankarpets.com/" },
      { name: "Kay Riley Flooring and Design", url: "https://kayriley.com/" },
      {
        name: "Kellum's Floors and More",
        url: "https://kellumsfloorsandmore.com/",
      },
      { name: "Kelly's Carpet & Furniture", url: "https://kellyscarpet.com/" },
      { name: "Kemper Flooring", url: "https://kemperflooring.com/" },
      {
        name: "Key Carpet Corporation",
        url: "https://www.keycarpetcorporation.com/",
      },
      {
        name: "Keystone Carpets & Interiors",
        url: "https://keystonecarpetsandinteriors.com/",
      },
      { name: "Kirkland's Flooring", url: "https://kirklandsflooring.com/" },
      { name: "Knova's Carpets", url: "https://knovascarpets.com/" },
      {
        name: "Kopps Carpet and Decorating",
        url: "https://koppsdecorating.com/",
      },
      { name: "LA Carpet Warehouse", url: "https://lacarpetwarehouse.com/" },
      { name: "Lake Forest Flooring", url: "https://lakeforestflooring.com/" },
      {
        name: "Lake Interiors Chelan",
        url: "https://lakeinteriorschelan.com/",
      },
      { name: "Lancaster Flooring Inc", url: "https://lancasterflooring.com/" },
      { name: "Larry Lint Flooring", url: "https://larrylint.com/" },
      { name: "Leader Flooring", url: "https://leaderflooring.com/" },
      { name: "Leaf Floor Covering", url: "https://leaffloorcovering.com/" },
      { name: "LeClaire Flooring", url: "https://www.leclaireflooring.com/" },
      { name: "Legend Flooring", url: "https://legendflooringaz.com/" },
      {
        name: "Leicester Flooring",
        url: "https://leicesterflooringandcarpet.com/",
      },
      { name: "Lions Floor", url: "https://lionsfloor.com/" },
      { name: "LMK Floors", url: "https://lmkfloors.com/" },
      {
        name: "Location Carpet And Flooring",
        url: "https://location-flooring.com/",
      },
      { name: "Location Carpet Co", url: "https://locationcarpet.com/" },
      {
        name: "Lowell Carpet & Coverings",
        url: "https://lowellcarpetandcoverings.com/",
      },
      { name: "Luna Flooring Gallery", url: "https://luna-stores.com/" },
      { name: "Lynch Carpet & Flooring", url: "https://lynchcarpet.com/" },
      {
        name: "Macco's Floor Covering Center",
        url: "https://www.maccosflooring.com/",
      },
      { name: "MAGIC CARPETS LINOLEUM", url: "https://magiccarpets.biz/" },
      { name: "Markville Flooring", url: "https://markvilleflooring.ca/" },
      { name: "Mayfair Floors", url: "https://mayfairhd.com/" },
      { name: "McSwains Carpet & Floors", url: "https://mcswaincarpets.com/" },
      { name: "Messina's Flooring", url: "https://messinasflooring.com/" },
      {
        name: "Mid-Michigan Floor Coverings",
        url: "https://midmichiganfloorcovering.com/",
      },
      {
        name: "Mill Direct Floor Coverings",
        url: "https://milldirectfloorcoverings.com/",
      },
      { name: "Mills Floor Covering", url: "https://millsfloorcovering.com/" },
      {
        name: "Montgomery's CarpetsPlus COLORTILE",
        url: "https://mcpcolortile.com/",
      },
      { name: "My Floor Hub", url: "https://myfloorhub.com/" },
      {
        name: "Myers Flooring of Atlanta",
        url: "https://myerscarpetatlanta.com/",
      },
      {
        name: "Myers Flooring of Nashville",
        url: "https://myersflooringofnashville.com/",
      },
      {
        name: "Nampa Floors & Interiors, Inc.",
        url: "https://nampafloors.com/",
      },
      { name: "National Design Mart", url: "https://nationaldesignmart.com/" },
      { name: "National Flooring & Supply", url: "https://nfsbrentwood.com/" },
      { name: "Neils Floor Covering", url: "https://neilsfloorcovering.com/" },
      { name: "Nemeth Family Interiors", url: "https://nemethinteriors.com/" },
      {
        name: "New York Carpets & Flooring",
        url: "https://newyorkcarpets.com/",
      },
      {
        name: "Niemann's American Flooring",
        url: "https://niemannsamericanflooring.com/",
      },
      {
        name: "Northwest Flooring Gallery",
        url: "https://northwestflooringgallery.com/",
      },
      { name: "O'Krent Floors", url: "https://www.okrentfloors.com/" },
      { name: "Off-Price Carpet Outlet", url: "https://offpricecarpets.com/" },
      { name: "Payne's Carpet Outlet", url: "https://paynescarpetoutlet.com/" },
      { name: "PDJ FLooring", url: "https://pdjflooring.com/" },
      {
        name: "Petersen's Carpet & Flooring",
        url: "https://petersenscarpet.com/",
      },
      {
        name: "Philadelphia Flooring Solutions",
        url: "https://philadelphiaflooringsolutions.com/",
      },
      {
        name: "Pilot Floor Covering, Inc.",
        url: "https://pilotfloorcovering.com/",
      },
      { name: "Planet Flooring", url: "https://planet-flooring.com/" },
      {
        name: "Premiere Floor Covering",
        url: "https://premierefloorcovering.com/",
      },
      { name: "Price Flooring", url: "https://priceflooring.com/" },
      {
        name: "PriceCo Floors",
        url: "https://marylandflooringwholesaler.com/",
      },
      { name: "Puckett's Flooring", url: "https://puckettsflooring.com/" },
      { name: "Raby Home Solutions", url: "https://rabyhome.com/" },
      { name: "Randy's Flooring", url: "https://randysflooring.com/" },
      { name: "Rayo Wholesale", url: "https://rayowholesale.com/" },
      {
        name: "Redd Flooring & Design Center",
        url: "https://www.reddflooring.com/",
      },
      { name: "Reinhold Flooring", url: "https://reinholdflooring.com/" },
      { name: "Rich's Modern Flooring", url: "https://richsflooring.com/" },
      {
        name: "Rigdon Floor Coverings Inc",
        url: "https://rigdonfloorcoverings.com/",
      },
      {
        name: "Right Carpet & Interiors",
        url: "https://rightcarpetandinteriors.com/",
      },
      { name: "Roberts Carpet", url: "https://www.robertscarpet.com/" },
      {
        name: "Rockford Floor Covering",
        url: "https://rockfordfloorcoveringmi.com/",
      },
      {
        name: "Rockwall Floor and Paint",
        url: "https://rockwallfloorandpaint.com/",
      },
      {
        name: "Rodgers Floor Covering",
        url: "https://www.rodgersfloorcovering.com/",
      },
      { name: "Roger's Flooring", url: "https://rogersflooring.com/" },
      {
        name: "Ron's Carpet & Design",
        url: "https://ronscarpetanddesign.com/",
      },
      {
        name: "Ronnie's Carpets & Flooring",
        url: "https://ronniescarpets.com/",
      },
      { name: "Rugs Rolls and More", url: "https://rugsrollsandmore.com/" },
      { name: "Rugworks", url: "https://rugworks.com/" },
      {
        name: "Sackett's Flooring Solutions",
        url: "https://www.sackettsflooring.com/",
      },
      { name: "SCI Floor Covering", url: "https://sciflooring.com/" },
      {
        name: "Select Flooring Design & Interiors",
        url: "https://select-flooring.com/",
      },
      { name: "Select Floors", url: "https://selectfloors.info/" },
      { name: "Seven Day Stone", url: "https://sevendaystone.com/" },
      {
        name: "SHANS CARPETS AND FINE FLOORING INC",
        url: "https://flooringstorehouston.com/",
      },
      { name: "Shelley Carpets", url: "https://shelleycarpets.com/" },
      { name: "Shoreline Flooring", url: "https://shorelineflooring.com/" },
      { name: "Signature Flooring", url: "https://signatureflooringinc.com/" },
      {
        name: "Simple Flooring Solutions",
        url: "https://simpleflooringsolutionsjackson.com/",
      },
      { name: "SP Floors & Design Center", url: "https://spfloors.net/" },
      { name: "Specialty Flooring", url: "https://specialtyflooringsc.com/" },
      {
        name: "Speers Road Broadloom Flooring Design Center",
        url: "https://speersroadbroadloom.com/",
      },
      {
        name: "Sports Turf Warehouse",
        url: "https://sportsturfwarehouse.com/",
      },
      { name: "Square Yard Carpet", url: "https://squareyardcarpet.com/" },
      { name: "St. Francis Flooring", url: "https://stfrancisflooring.com/" },
      { name: "Staff Carpet", url: "https://www.staffcarpet.com/" },
      {
        name: "Star Flooring & Design",
        url: "https://boulderstarflooring.com/",
      },
      { name: "Stearns Flooring", url: "https://stearnsflooring.com/" },
      {
        name: "Sterling Carpet & Flooring",
        url: "https://sterlingflooring.com/",
      },
      {
        name: "Sterling Carpet Shops, Inc",
        url: "https://sterlingcarpetshops.com/",
      },
      {
        name: "Stevens Floor Coverings",
        url: "https://stevensfloorcoverings.com/",
      },
      { name: "Super Floors Of Alaska", url: "https://superfloorsalaska.com/" },
      {
        name: "Tazewell Floors & Design",
        url: "https://tazewellfloorsdesign.com/",
      },
      {
        name: "Technique Flooring And Restoration",
        url: "https://techniqueflooring.com/",
      },
      { name: "Terrace Floorcovering", url: "https://terracecarpet.com/" },
      {
        name: "Terry's Floor Fashions",
        url: "https://terrysfloorfashions.com/",
      },
      {
        name: "The Carpet Factory Super Store",
        url: "https://carpetfactorysuperstore.com/",
      },
      { name: "The Carpet Gallery", url: "https://seymourcarpetgallery.com/" },
      { name: "The Carpet Guy", url: "https://thecarpetguy.com/" },
      { name: "The Carpet Stop", url: "https://carpetstop.com/" },
      { name: "The Floor Store", url: "https://thefloorstorenm.com/" },
      { name: "The Floor Store", url: "https://www.floorstores.com/" },
      { name: "The Floor Store VA", url: "https://thefloorstorerva.com/" },
      { name: "The Flooring Center", url: "https://myfloorcenter.com/" },
      { name: "The FloorWorks", url: "https://thefloorworks.com/" },
      { name: "The FloorWorks Group", url: "https://thefloorworksgroup.com/" },
      {
        name: "The Home Place by Lindsay",
        url: "https://thehomeplaceonline.com/",
      },
      { name: "The L&L Company", url: "https://www.thelandlcompany.com/" },
      { name: "thefloorshoppe.com", url: "https://thefloorshoppe.com/" },
      { name: "Thornton Flooring", url: "https://thorntonflooring.com/" },
      { name: "Titan Flooring", url: "https://titanflooring.com/" },
      { name: "Tom January Floors", url: "https://tomjanuaryfloors.com/" },
      {
        name: "Tom's Carpet & Flooring Outlet",
        url: "https://tomscarpetoutlet.com/",
      },
      { name: "Total Floors", url: "https://totalfloors.biz/" },
      { name: "Towne Flooring Center", url: "https://townecarpet.com/" },
      { name: "Tri-City Carpet", url: "https://tricitycarpet.com/" },
      {
        name: "Triangle Flooring Center",
        url: "https://triangleflooringcenter.com/",
      },
      { name: "TUF FLOORING LLC", url: "https://tufflooring.com/" },
      {
        name: "Ultimate Flooring Design Center",
        url: "https://ultimateflooringdesigncenter.com/",
      },
      { name: "Valley Carpet, Inc.", url: "https://valleycarpetinc.com/" },
      { name: "Valley Floor Covering Inc.", url: "https://vfcri.com/" },
      { name: "Vallow Floor Coverings, Inc.", url: "https://vallowfloor.com/" },
      { name: "Vics Carpet", url: "https://vicscarpet.com/" },
      { name: "VRR Flooring", url: "https://vrrflooring.com/" },
      { name: "Wacky's Flooring", url: "https://wackysflooring.com/" },
      { name: "Wade's Interiors", url: "https://wadesinteriors.com/" },
      { name: "Wall 2 Wall Flooring", url: "https://wall2wallflooring.com/" },
      { name: "Warnike", url: "https://warnike.com/" },
      { name: "Webb Carpet Company", url: "https://webbcarpet.net/" },
      { name: "West River Carpets", url: "https://westrivercarpets.com/" },
      {
        name: "Western States Flooring",
        url: "https://westernstatesflooring.com/",
      },
      {
        name: "Westport Flooring and Interiors",
        url: "https://westportflooringandinteriors.com/",
      },
      {
        name: "William Ryan Flooring & Supplies",
        url: "https://williamryanflooring.com/",
      },
      {
        name: "Winton Flooring & Design",
        url: "https://wintondesigncenter.com/",
      },
      { name: "Xray Flooring", url: "https://xray-flooring.com/" },
      { name: "Xtreme Carpet Care", url: "https://xtremeflooring.net/" },
      { name: "Yates Flooring", url: "https://yatesflooring.com/" },
      { name: "Yetzer Different By Design", url: "https://yetzers.com/" },
      { name: "York Carpetland USA", url: "https://carpetlandusaflint.com/" },
      { name: "YUMA CARPETS & TILE INC", url: "https://yumacarpets.com/" },
    ],

    // WordPress Stats
    wordpressStats: {
      totalSites: "400+",
      productsPerSite: "100K+",
      experience: "6 Years",
    },

    // Navigation Links
    navLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "WordPress Sites", href: "#wordpress-sites" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};
