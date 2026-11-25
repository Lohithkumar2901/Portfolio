export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  color: string;       // solid hex for text/dots
  glowColor: string;   // rgba for box-shadow
  responsibilities: string[];
  tech: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Information Technology Engineer',
    company: 'Wheels India Limited',
    location: 'Chennai, India',
    duration: 'Dec 2025 – Jun 2026',
    type: 'Full-time Contract',
    color: '#00f5ff',
    glowColor: 'rgba(0,245,255,0.18)',
    responsibilities: [
      'Architected an AI-driven Safety Analytics Dashboard integrating SO, Near Miss, and Incident datasets through AES-256-GCM encrypted enterprise APIs',
      'Built a semantic hazard correlation engine for proactive risk-chain detection across multi-plant environments',
      'Automated Excel audit reporting and KPI dashboards — reducing manual reporting effort by 70%',
      'Developed StockBot, an AI-powered inventory analytics chatbot with NLP query handling and plant-wise drill-down',
      'Shipped a production RAG-based NOC Policy Chatbot with Azure AD SSO, vector search, and CIS Benchmark alignment',
    ],
    tech: ['Node.js', 'React.js', 'FastAPI', 'Python', 'AES-256-GCM', 'RAG', 'OpenAI API', 'Azure AD'],
    achievements: ['70% reduction in manual reporting', 'Production RAG deployment', 'Multi-plant AI analytics'],
  },
  {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    duration: 'Nov 2025 – Dec 2025',
    type: 'Internship',
    color: '#bf5af2',
    glowColor: 'rgba(191,90,242,0.18)',
    responsibilities: [
      'Developed reusable frontend modules and backend API features within agile sprint cycles for production web apps',
      'Maintained clean, tested, and documented codebases while consistently delivering sprint milestones on schedule',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
    achievements: ['Sprint-milestone delivery', 'Reusable component library'],
  },
  {
    id: 3,
    role: 'System Engineer Intern',
    company: 'Infosys',
    location: 'Mysore, India',
    duration: 'Jan 2025 – Jun 2025',
    type: 'Internship',
    color: '#0a84ff',
    glowColor: 'rgba(10,132,255,0.18)',
    responsibilities: [
      'Completed enterprise training in Java, SQL, DSA, and software engineering practices under Infosys onboarding',
      'Developed a full-stack Inventory Management System with real-time stock tracking, RBAC authentication, and dashboards',
      'Improved inventory monitoring through automated dashboard-based stock visibility and multi-user access management',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Java', 'RBAC'],
    achievements: ['Full-stack enterprise delivery', 'RBAC multi-user system', 'Real-time dashboards'],
  },
  {
    id: 4,
    role: 'AI Research Intern',
    company: 'Agnirva Space Research',
    location: 'Remote',
    duration: 'Apr 2024 – Jul 2024',
    type: 'Research Internship',
    color: '#30d158',
    glowColor: 'rgba(48,209,88,0.18)',
    responsibilities: [
      'Built AI/ML pipelines for satellite image analysis and automated terrain classification using large-scale geospatial datasets',
      'Optimized preprocessing and validation workflows to improve deep learning training efficiency and dataset quality',
    ],
    tech: ['Python', 'U-Net', 'TensorFlow', 'Computer Vision', 'Geospatial Data'],
    achievements: ['82% IoU satellite segmentation', 'Automated classification pipeline'],
  },
  {
    id: 5,
    role: 'Python Developer Intern',
    company: 'TWM Inc.',
    location: 'Chennai, India',
    duration: 'Dec 2023 – Jan 2024',
    type: 'Internship',
    color: '#ff9f0a',
    glowColor: 'rgba(255,159,10,0.18)',
    responsibilities: [
      'Developed resume parsing and generation modules for an AI Resume Builder platform using AngularJS',
      'Improved document processing accuracy and automated structured resume generation functionality',
    ],
    tech: ['Python', 'AngularJS', 'NLP', 'Document Processing'],
    achievements: ['Automated parsing pipeline', 'Structured generation workflow'],
  },
];
