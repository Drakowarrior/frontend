import { SITE_CONFIG } from '../config/siteConfig';

export const PERSONAL_INFO = {
  name: "Karan Garg",
  title: "AI Engineer & Full-Stack Developer",
  eyebrow: "AI ENGINEER • FULL-STACK DEVELOPER",
  tagline: "BUILDING INTELLIGENT SYSTEMS FOR THE REAL WORLD.",
  bio: "I build intelligent applications, AI-powered systems, and modern digital experiences using machine learning, LLMs, full-stack engineering, and thoughtful product design.",
  objective: "AI Engineer and Full-Stack Developer with expertise in Python, React.js, LLMs, and Machine Learning, REST APIs, building scalable AI applications, intelligent chatbots, and modern web platforms.",
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  github: SITE_CONFIG.githubUrl,
  linkedin: SITE_CONFIG.linkedinUrl,
  resumeUrl: SITE_CONFIG.resumeUrl,
  location: SITE_CONFIG.location,
  roles: [
    "AI Engineer",
    "Full-Stack Developer",
    "LLM Builder",
    "AI Application Developer"
  ]
};

export const IDENTITY_STATEMENT = {
  lines: [
    "I don't just build websites.",
    "I build systems that think,",
    "interfaces that communicate,",
    "and products that solve problems."
  ],
  quoteAuthor: "Karan Garg",
  quoteRole: "AI Engineer & Full-Stack Developer"
};

export const CURRENT_FOCUS = [
  { label: "AI-Powered Applications", tag: "LLM Orchestration" },
  { label: "LLM Systems", tag: "Generative AI" },
  { label: "RAG Pipelines", tag: "Semantic Search" },
  { label: "Intelligent Chatbots", tag: "Enterprise Conversational AI" },
  { label: "Full-Stack AI Platforms", tag: "FastAPI + React + Vector DB" }
];

export const FEATURED_PROJECTS = [
  {
    id: "sarva-ai",
    slug: "sarva-ai",
    number: "01",
    title: "SARVA AI",
    subtitle: "FULL-STACK ENTERPRISE AI ASSISTANT",
    category: "Full-Stack AI Platform",
    featured: true,
    stack: ["React.js", "FastAPI", "Python", "MongoDB Atlas", "JWT", "REST APIs", "Vercel", "Render"],
    summary: "A full-stack AI assistant engineered for intelligent conversations, secure authentication, session management, and scalable backend services.",
    description: "SARVA AI is an enterprise-grade conversational AI assistant designed for seamless multi-turn reasoning, secure credential storage, and low-latency interaction. Built with a responsive React.js frontend and a high-performance asynchronous FastAPI backend, it provides persistent chat histories in MongoDB Atlas, JWT token verification, and isolated session context.",
    problem: "Enterprise teams and users require intelligent AI assistance that preserves multi-session context securely, prevents token collision, handles file payloads safely, and delivers sub-200ms response latencies without vendor lock-in.",
    solution: "Engineered an asynchronous FastAPI REST backend integrated with JWT authorization guards, MongoDB Atlas document clustering for fast thread retrieval, and a streaming React frontend with real-time feedback loops.",
    highlights: [
      "JWT-based secure authentication & authorization pipeline",
      "Dynamic chat history & multi-session context isolation",
      "High-throughput FastAPI asynchronous REST endpoints",
      "MongoDB Atlas document storage for scalable indexing",
      "Secure file upload and multimodal interaction support",
      "Responsive React interface with real-time streaming UX",
      "Production cloud deployment on Vercel (Client) & Render (API)"
    ],
    architecture: [
      { step: "User Client", title: "USER", desc: "User inputs prompt or uploads document payload", tech: "Web/Mobile Client" },
      { step: "React Frontend", title: "REACT FRONTEND", desc: "Dynamic UI, JWT state management, stream listener", tech: "React 18 + Tailwind" },
      { step: "REST API Gateway", title: "REST API", desc: "CORS filtering, rate-limiting, and payload validation", tech: "HTTP/2 REST" },
      { step: "FastAPI Backend", title: "FASTAPI", desc: "Asynchronous router, prompt orchestration & session control", tech: "Python 3.11" },
      { step: "JWT Auth Guard", title: "JWT AUTH", desc: "Cryptographic token verification & user session isolation", tech: "PyJWT Security" },
      { step: "AI Inference Service", title: "AI SERVICE", desc: "Intelligent language model reasoning & token generation", tech: "LLM Orchestrator" },
      { step: "MongoDB Atlas", title: "MONGODB ATLAS", desc: "Persistent document indexing for user histories & chat logs", tech: "Cloud NoSQL" },
      { step: "Cloud Deployment", title: "DEPLOYMENT", desc: "Continuous delivery with edge distribution & SSL", tech: "Vercel + Render" }
    ],
    github: SITE_CONFIG.sarvaGithubUrl,
    liveDemo: SITE_CONFIG.sarvaLiveUrl,
    status: "Live & Deployed",
    badge: "Production SaaS"
  },
  {
    id: "medrag",
    slug: "medrag",
    number: "02",
    title: "MedRAG",
    subtitle: "RETRIEVAL-AUGMENTED MEDICAL AI ASSISTANT",
    category: "Medical AI & NLP",
    featured: true,
    stack: ["Python", "RAG", "NLP", "LLM", "Vector Retrieval", "Embeddings"],
    summary: "An AI-powered medical assistant using Retrieval-Augmented Generation to provide context-aware responses through semantic document retrieval.",
    description: "MedRAG combines clinical biomedical taxonomy with high-dimensional vector search to ground Generative AI reasoning in authoritative medical literature. By semantically indexing clinical records and scientific research, MedRAG retrieves verified context before generating responses, drastically reducing hallucinations.",
    problem: "Standard LLMs hallucinate medical facts and lack domain-specific grounding when answering sensitive clinical questions without access to authoritative, up-to-date biomedical papers.",
    solution: "Designed an end-to-end RAG architecture that chunks medical literature, transforms text into dense vector embeddings, performs cosine-similarity lookups against vector indexes, and synthesizes evidence-backed responses.",
    highlights: [
      "End-to-end Retrieval-Augmented Generation (RAG) architecture",
      "Semantic biomedical document indexing & dense chunking",
      "Vector-based similarity retrieval for low-latency context lookups",
      "Grounded prompt synthesis for high-fidelity clinical responses",
      "Domain-specific NLP preprocessing pipeline for clinical taxonomy",
      "Engineered for context-aware medical QA assistance"
    ],
    architecture: [
      { step: "Documents", title: "DOCUMENTS", desc: "Biomedical papers, PubMed articles & clinical guidelines", tech: "PDF / Text Corpus" },
      { step: "Chunking", title: "CHUNKING", desc: "Semantic splitting with overlap to preserve clinical context", tech: "NLP Tokenizer" },
      { step: "Embeddings", title: "EMBEDDINGS", desc: "Dense vector transformation using domain-tuned embedding models", tech: "Vector Space" },
      { step: "Vector Retrieval", title: "VECTOR RETRIEVAL", desc: "Low-latency cosine similarity ranking for top-k chunks", tech: "Vector DB / Index" },
      { step: "Relevant Context", title: "RELEVANT CONTEXT", desc: "Verified medical excerpts injected into reasoning prompt", tech: "Context Formatter" },
      { step: "LLM Reasoning", title: "LLM", desc: "Grounded inference over factual clinical evidence", tech: "Foundation Model" },
      { step: "Response", title: "RESPONSE", desc: "Accurate, fact-checked medical answer delivered to practitioner", tech: "Structured Output" }
    ],
    github: null,
    githubStatus: "Repository Coming Soon",
    liveDemo: null,
    status: "Coming Soon / Under Deployment",
    badge: "RAG Architecture"
  }
];

export const RESEARCH_PUBLICATIONS = [
  {
    id: "green-cybersecurity-springer-2026",
    badge: "PEER-REVIEWED // SPRINGER 2026",
    journal: "Discover Computing, Springer",
    volumeInfo: "Volume 29, Article 556 (2026)",
    doi: "10.1007/s10791-026-10431-3",
    doiUrl: "https://doi.org/10.1007/s10791-026-10431-3",
    title: "Green Cybersecurity Framework for Sustainable and Energy Efficient Digital Defense in Industry 5 and Beyond",
    hook: "Can cybersecurity get stronger and more sustainable? We built a framework that says yes.",
    abstract: "A Green Cybersecurity framework unifying digital defense, energy efficiency, resource optimization, and environmental sustainability for Industry 5.0 and beyond. Simulated and validated using DeterLab with the NSL-KDD and Simatic Scan datasets.",
    metrics: [
      { label: "Energy Reduction", value: 37.6, suffix: "%", desc: "Lower power consumption in simulated threat defense" },
      { label: "Resource Efficiency", value: 45.0, suffix: "%", desc: "Improvement in hardware resource allocation" },
      { label: "Detection Accuracy", value: 95.3, suffix: "%", desc: "Validated on NSL-KDD & Simatic Scan datasets" }
    ],
    authors: [
      { name: "Karan Garg", role: "Primary Author", url: null, isUser: true },
      { name: "Uday Veer Singh", role: "Co-Author", url: "https://www.linkedin.com/in/uday-veer-singh-409694367/", isUser: false },
      { name: "Lakshya Chaudhary", role: "Co-Author", url: "https://www.linkedin.com/in/lakshya-chaudhary-079805215/", isUser: false },
      { name: "Dr. Shinnu Jangra", role: "Mentor & Corresponding Author", url: "https://www.linkedin.com/in/dr-shinnu-jangra-998084114/", isUser: false }
    ],
    affiliation: "Interdisciplinary research spanning the Department of Biotechnology and Chemical Engineering and the Department of Artificial Intelligence & Machine Learning, Manipal University Jaipur."
  }
];


export const HOW_I_BUILD_PIPELINE = [
  {
    step: "01",
    phase: "IDEA",
    title: "Problem Scoping & AI Feasibility",
    desc: "Deconstruct the core challenge, establish success metrics, and determine whether heuristic, algorithmic, or Generative AI approaches maximize impact."
  },
  {
    step: "02",
    phase: "RESEARCH",
    title: "Literature Review & Architecture Design",
    desc: "Examine state-of-the-art papers, evaluate foundation models (Groq, Hugging Face, Gemini), and draft end-to-end system topology."
  },
  {
    step: "03",
    phase: "DATA",
    title: "Data Engineering & Preprocessing",
    desc: "Extract, clean, and structure raw data with Pandas and NumPy. Implement dense vector chunking and tokenization for semantic retrieval."
  },
  {
    step: "04",
    phase: "MODEL",
    title: "Model Selection, RAG & Fine-Tuning",
    desc: "Integrate LLMs, implement vector databases for RAG, tune prompts, and train custom neural networks (PyTorch/TensorFlow/YOLOv8)."
  },
  {
    step: "05",
    phase: "API",
    title: "High-Performance Backend & REST APIs",
    desc: "Construct async REST APIs using FastAPI/Node.js, implement JWT security, session management, and robust database models."
  },
  {
    step: "06",
    phase: "INTERFACE",
    title: "Interactive, Human-Centered UX",
    desc: "Build responsive, accessible React interfaces with micro-interactions, streaming response handlers, and real-time state synchronization."
  },
  {
    step: "07",
    phase: "DEPLOYMENT",
    title: "Cloud Infrastructure & Optimization",
    desc: "Containerize via Docker, configure CI/CD, deploy to Vercel and Render with optimized latency, caching, and observability."
  }
];

export const TECH_CONSTELLATION = [
  { name: "AI Engineering", category: "core", isCenter: true, desc: "Building intelligent systems with LLMs, Machine Learning, and neural networks." },
  { name: "Python", category: "language", desc: "Core language for AI, data science, script automation, and FastAPI backend services." },
  { name: "React.js", category: "frontend", desc: "Building high-performance, responsive, component-driven user interfaces." },
  { name: "FastAPI", category: "backend", desc: "Modern, asynchronous high-throughput REST APIs for AI backends." },
  { name: "LLMs", category: "ai", desc: "Large Language Model orchestration, prompt engineering, and conversational agents." },
  { name: "Machine Learning", category: "ai", desc: "Supervised and unsupervised predictive modeling using Scikit-learn." },
  { name: "Deep Learning", category: "ai", desc: "Multi-layer neural network architectures, backpropagation, and representation learning." },
  { name: "NLP", category: "ai", desc: "Natural Language Processing, text tokenization, embeddings, and transformers." },
  { name: "PyTorch", category: "framework", desc: "Deep learning framework for building and training custom neural models." },
  { name: "TensorFlow", category: "framework", desc: "End-to-end open source platform for machine learning pipelines." },
  { name: "OpenCV", category: "vision", desc: "Computer vision library for real-time video and image processing." },
  { name: "YOLOv8", category: "vision", desc: "Real-time state-of-the-art object detection and image segmentation." },
  { name: "MongoDB", category: "database", desc: "NoSQL document database for flexible session and conversational data." },
  { name: "Docker", category: "devops", desc: "Containerization for reproducible microservices and cloud deployments." },
  { name: "Git", category: "tools", desc: "Version control and collaborative software engineering workflows." },
  { name: "SQL", category: "database", desc: "Relational database querying, normalization, and relational schema management." },
  { name: "RAG", category: "ai", desc: "Retrieval-Augmented Generation linking vector search with generative reasoning." },
  { name: "Transformers", category: "ai", desc: "Attention-based deep learning architectures powering modern language models." }
];

export const SKILL_CATEGORIES = [
  {
    title: "AI / Machine Learning",
    badge: "Core Focus",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    title: "NLP & LLM Systems",
    badge: "Intelligent Systems",
    skills: ["NLP", "Transformers", "LLMs", "Prompt Engineering", "RAG Pipelines", "Groq API", "Hugging Face", "Gemini API", "ChatGPT"]
  },
  {
    title: "Full-Stack Development",
    badge: "Engineering",
    skills: ["React.js", "Python", "JavaScript", "FastAPI", "REST APIs", "HTML5", "CSS3", "Java", "C", "SQL"]
  },
  {
    title: "Computer Vision",
    badge: "Perception",
    skills: ["OpenCV", "YOLOv8", "CNNs", "Object Detection", "Image Processing"]
  },
  {
    title: "Data Science & Databases",
    badge: "Data Layer",
    skills: ["Pandas", "NumPy", "Matplotlib", "MongoDB", "MongoDB Atlas", "MySQL"]
  },
  {
    title: "Software Engineering & Cloud",
    badge: "Infrastructure",
    skills: ["Authentication (JWT)", "CRUD", "MVC", "API Integration", "Vercel", "Render", "Netlify", "Docker", "Git", "GitHub", "VS Code", "Postman", "Figma"]
  },
  {
    title: "Bioinformatics",
    badge: "Interdisciplinary",
    skills: ["NCBI", "BLAST", "FASTA", "GenBank", "UniProt", "PDB", "Molecular Docking", "NGS"]
  },
  {
    title: "Design & Productivity",
    badge: "Product Tools",
    skills: ["Excel", "Google Sheets", "PowerPoint", "Blender", "AutoCAD"]
  }
];

export const EXPERIENCES = [
  {
    id: "igt",
    role: "IT Trainee",
    company: "IGT Solutions (ATAIN)",
    period: "June 2026 – July 2026",
    badge: "Enterprise AI",
    type: "Industry Internship",
    summary: "Developing and enhancing an AI-powered chatbot as an individual enterprise project.",
    deliverables: [
      "Developing and enhancing an AI-powered chatbot as an individual enterprise project.",
      "Implementing intelligent conversation flows, feedback mechanisms, and session management.",
      "Integrating backend APIs and optimizing chatbot performance, scalability, and user experience.",
      "Refining UI/UX interface for frictionless corporate workflows and query resolutions."
    ],
    stack: ["AI Chatbot", "FastAPI", "Session Management", "API Integration", "UI/UX Optimization"]
  },
  {
    id: "cognifyz",
    role: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    period: "April 2026 – May 2026",
    badge: "Full Stack",
    type: "Industry Internship",
    summary: "Developed a Student Feedback System using the MERN stack technologies.",
    deliverables: [
      "Developed a complete Student Feedback System using MERN technologies (MongoDB, Express, React, Node.js).",
      "Implemented REST APIs and structured CRUD operations for seamless feedback management.",
      "Designed a responsive and accessible user interface for students and administrators."
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "CRUD Operations"]
  },
  {
    id: "devforge",
    role: "Executive, Corporate Relations & Social Media Joint Head",
    company: "DevForge Club",
    period: "August 2024 – April 2026",
    badge: "Leadership",
    type: "Technical Club Leadership",
    summary: "Promoted from Social Media Joint Head to Executive of Corporate Relations based on leadership and contributions.",
    deliverables: [
      "Promoted from Social Media Joint Head to Executive of Corporate Relations based on demonstrated leadership.",
      "Coordinated technical workshops, networking sessions, and promotional campaigns across university chapters.",
      "Led digital outreach initiatives, corporate sponsor collaborations, and student developer team coordination."
    ],
    stack: ["Leadership", "Corporate Relations", "Workshops", "Tech Outreach", "Team Collaboration"]
  }
];

export const TIMELINE_JOURNEY = [
  { year: "2023", milestone: "Started B.Tech", detail: "Computer Science & Bioscience at Manipal University Jaipur." },
  { year: "2024", milestone: "DevForge Leadership", detail: "Appointed Social Media Joint Head, advancing student tech initiatives." },
  { year: "2026", milestone: "Published Springer Research", detail: "Co-authored peer-reviewed Green Cybersecurity paper in Springer Discover Computing." },
  { year: "2026", milestone: "AI Systems Engineering", detail: "Engineered SARVA AI assistant, MedRAG engine, and IGT enterprise chatbot." },
  { year: "2027", milestone: "Graduation (Expected)", detail: "Completing B.Tech with focus on intelligent software & AI systems." }
];


export const CERTIFICATIONS = [
  {
    id: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google & Coursera",
    category: "AI / Machine Learning",
    description: "Foundations of AI, deep neural models, transformer architectures, and applied machine learning pipelines.",
    skills: ["Machine Learning", "Generative AI", "TensorFlow", "Deep Learning Foundations"]
  },
  {
    id: "ibm-pytorch",
    title: "Deep Learning with PyTorch",
    issuer: "IBM & Coursera",
    category: "Deep Learning",
    description: "Neural network implementation, backpropagation algorithms, CNNs, and GPU model optimization.",
    skills: ["PyTorch", "Neural Networks", "CNNs", "Loss Optimization"]
  },
  {
    id: "ibm-keras",
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    category: "Deep Learning",
    description: "Multi-layer perceptrons, activation topologies, model validation, and supervised learning workflows.",
    skills: ["Keras", "Deep Learning Architectures", "Model Training"]
  },
  {
    id: "msft-ai",
    title: "Foundations of AI and Machine Learning",
    issuer: "Microsoft",
    category: "AI / Machine Learning",
    description: "Core AI concepts, machine learning algorithms, model evaluation, and Azure AI architecture.",
    skills: ["AI Fundamentals", "Predictive ML Modeling", "Data Processing"]
  },
  {
    id: "google-cybersecurity",
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    category: "Security",
    description: "Security fundamentals, threat landscape analysis, access control, and defense-in-depth principles.",
    skills: ["Security Architecture", "Risk Mitigation", "Threat Analysis"]
  },
  {
    id: "ibm-pentest",
    title: "Penetration Testing, Threat Hunting, and Cryptography",
    issuer: "IBM",
    category: "Security",
    description: "Cryptographic protocols, penetration testing methodologies, vulnerability identification, and mitigation.",
    skills: ["Threat Hunting", "Cryptography Algorithms", "Vulnerability Scanning"]
  },
  {
    id: "deloitte-swe",
    title: "Software Engineering Job Simulation",
    issuer: "Deloitte Forage",
    category: "Software Engineering",
    description: "Enterprise software development lifecycle, architectural design, debugging, and code refactoring.",
    skills: ["System Architecture", "Code Refactoring", "Software Engineering"]
  },
  {
    id: "codechef-react",
    title: "Learn React JS for Front-end Development",
    issuer: "CodeChef",
    category: "Frontend Development",
    description: "Component hierarchies, hooks, state synchronization, client-side rendering, and responsive web design.",
    skills: ["React Components", "State Management", "Hooks", "Responsive UI"]
  }
];

export const EDUCATION_HISTORY = [
  {
    degree: "B.Tech in Computer Science and Bioscience",
    institution: "Manipal University Jaipur",
    period: "2023 – 2027",
    score: "CGPA: 7.75 / 10.0",
    highlights: [
      "Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks",
      "Machine Learning, Deep Learning, Generative AI, Natural Language Processing",
      "Bioinformatics: Computational Biology, Molecular Modeling, Biological Sequence Analysis"
    ]
  },
  {
    degree: "Class XII (PCM)",
    institution: "The Vivekanand School, Delhi",
    period: "2022 – 2023",
    score: "Percentage: 67.2%",
    highlights: ["Physics, Chemistry, Mathematics & Computer Science core foundations"]
  },
  {
    degree: "Class X (CBSE)",
    institution: "Silver Line Prestige School, Ghaziabad",
    period: "2020 – 2021",
    score: "Percentage: 93%",
    highlights: ["Academic distinction in Science and Mathematics"]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "AI-Powered Systems Engineering",
    desc: "Engineered and deployed end-to-end intelligent applications integrating LLMs, Computer Vision (YOLOv8/OpenCV), and full-stack REST architectures.",
    tag: "AI / ML"
  },
  {
    title: "Industry Internships in AI & Web",
    desc: "Completed technical internships at IGT Solutions (AI Chatbot Trainee) and Cognifyz Technologies (Full Stack Development).",
    tag: "Industry Experience"
  },
  {
    title: "DevForge Club Leadership",
    desc: "Promoted to Executive of Corporate Relations; led digital initiatives, workshops, and student developer community outreach.",
    tag: "Leadership"
  },
  {
    title: "Hackathons & Tech Challenges",
    desc: "Active participant in Smart India Hackathon (SIH) and EY Tech Challenge, building problem-solving prototypes under constraints.",
    tag: "Competitions"
  },
  {
    title: "Open Source Contributions",
    desc: "Active contributor to developer tooling, open-source AI utilities, and collaborative codebases on GitHub.",
    tag: "Open Source"
  }
];
