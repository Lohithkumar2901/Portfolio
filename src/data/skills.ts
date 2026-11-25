export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  glow: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 245, 255, 0.3)',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Angular', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-purple-400 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.3)',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 88 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 75 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    category: 'AI / ML',
    color: 'from-green-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.3)',
    skills: [
      { name: 'NLP', level: 82 },
      { name: 'Deep Learning', level: 80 },
      { name: 'RAG', level: 85 },
      { name: 'TensorFlow', level: 78 },
      { name: 'Computer Vision', level: 78 },
      { name: 'OpenAI APIs', level: 85 },
    ],
  },
  {
    category: 'Databases',
    color: 'from-orange-400 to-yellow-500',
    glow: 'rgba(251, 146, 60, 0.3)',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    category: 'Security',
    color: 'from-red-400 to-rose-500',
    glow: 'rgba(248, 113, 113, 0.3)',
    skills: [
      { name: 'AES-256-GCM', level: 80 },
      { name: 'JWT / OAuth 2.0', level: 85 },
      { name: 'Azure AD (MSAL)', level: 78 },
    ],
  },
  {
    category: 'Tools & Cloud',
    color: 'from-blue-400 to-indigo-500',
    glow: 'rgba(96, 165, 250, 0.3)',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vite', level: 82 },
      { name: 'AWS Cloud', level: 72 },
      { name: 'Excel Automation', level: 85 },
    ],
  },
];
