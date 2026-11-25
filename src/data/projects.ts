import type { LucideIcon } from 'lucide-react';
import { Shield, Bot, MessageSquare, Package, Satellite, Hash } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  gradient: string;
  Icon: LucideIcon;
  github?: string;
  demo?: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Safety Analytics Dashboard',
    subtitle: 'Enterprise Safety Intelligence Platform',
    description:
      'AI-driven safety intelligence platform integrating Safety Observation, Near Miss, and Incident datasets through secure enterprise APIs with real-time KPI tracking.',
    longDescription:
      'Architected an enterprise safety intelligence platform that unifies SO, NM, and Incident datasets through secure APIs. Built semantic hazard correlation workflows that proactively detect risk chains before incidents escalate. Implemented AES-256-GCM encrypted enterprise data transmission and automated Excel-based audit reporting — reducing manual analysis effort by 70%.',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'Bootstrap', 'AES-256-GCM', 'REST APIs', 'Excel Automation'],
    category: 'Enterprise AI',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    Icon: Shield,
    metrics: [
      { label: 'Manual Effort Reduced', value: '70%' },
      { label: 'Datasets Integrated', value: '3' },
      { label: 'Encryption Standard', value: 'AES-256' },
    ],
  },
  {
    id: 2,
    title: 'StockBot',
    subtitle: 'AI-Powered Inventory Analytics Chatbot',
    description:
      'AI-powered inventory assistant with NLP query handling and drill-down analytics for plant-wise and region-wise inventory insights with interactive dashboards.',
    longDescription:
      'Developed a conversational AI chatbot that transforms complex inventory queries into structured insights. Integrates NLP query parsing with dynamic Recharts visualizations to deliver plant-wise and region-wise analytics in real time. Automated structured inventory reporting workflows reduce manual data extraction work significantly.',
    tech: ['React.js', 'Tailwind CSS', 'Recharts', 'Python', 'FastAPI', 'NLP'],
    category: 'AI Chatbot',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    Icon: Bot,
    metrics: [
      { label: 'Plants Monitored', value: 'Multi' },
      { label: 'Query Response', value: '<2s' },
      { label: 'Dashboard Widgets', value: '12+' },
    ],
  },
  {
    id: 3,
    title: 'NOC Policy Chatbot',
    subtitle: 'Enterprise RAG Assistant',
    description:
      'Production RAG-based chatbot with Azure SSO, JWT authentication, OpenAI integration, and semantic vector retrieval aligned with CIS Benchmark standards.',
    longDescription:
      'Built a production-grade Retrieval-Augmented Generation chatbot with Azure AD Single Sign-On and JWT-secured endpoints. Uses vector embeddings and semantic reranking to retrieve precise policy information from enterprise NOC documents. Implemented query filtering and reranking pipelines aligned with CIS Benchmark security standards.',
    tech: ['Node.js', 'Express.js', 'Azure AD', 'OpenAI API', 'Vector Embeddings', 'JWT', 'RAG'],
    category: 'RAG / LLM',
    gradient: 'from-green-500/20 via-teal-500/10 to-transparent',
    Icon: MessageSquare,
    metrics: [
      { label: 'Auth Provider', value: 'Azure AD' },
      { label: 'Retrieval Method', value: 'RAG' },
      { label: 'Security Standard', value: 'CIS' },
    ],
  },
  {
    id: 4,
    title: 'Inventory Management System',
    subtitle: 'Full Stack Enterprise Application',
    description:
      'Full-stack inventory platform with RBAC authentication, real-time stock tracking, dashboards, and enterprise API integration built at Infosys.',
    longDescription:
      'Developed a comprehensive inventory management platform during the Infosys internship. Features role-based access control (RBAC), real-time stock dashboards, multi-user access management, and enterprise API integration. Built with Angular for a responsive SPA frontend and Node.js/Express.js for the backend, backed by a MySQL database.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'RBAC', 'REST APIs'],
    category: 'Full Stack',
    gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent',
    Icon: Package,
    metrics: [
      { label: 'User Roles', value: 'Multi-RBAC' },
      { label: 'Stock Tracking', value: 'Real-time' },
      { label: 'Database', value: 'MySQL' },
    ],
  },
  {
    id: 5,
    title: 'Aerial Image Segmentation',
    subtitle: 'Urban Terrain Analysis Using U-Net',
    description:
      'U-Net deep learning architecture for pixel-level semantic segmentation of urban satellite imagery achieving 82% IoU on the Kaggle benchmark dataset.',
    longDescription:
      'Applied the U-Net architecture for semantic segmentation of large-scale urban satellite imagery. End-to-end pipeline includes multi-stage preprocessing, augmentation, and validation workflows. Achieved 82% Intersection over Union (IoU) on the Kaggle Urban Aerial Segmentation benchmark — competitive with state-of-the-art baselines.',
    tech: ['Python', 'U-Net', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Kaggle'],
    category: 'Computer Vision',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    Icon: Satellite,
    metrics: [
      { label: 'IoU Score', value: '82%' },
      { label: 'Architecture', value: 'U-Net' },
      { label: 'Dataset', value: 'Kaggle' },
    ],
  },
  {
    id: 6,
    title: 'Twitter NLP Event Classifier',
    subtitle: 'Emerging Event Classification',
    description:
      'Deep learning NLP classifier to detect trending social events from Twitter data using tokenization, embedding layers, and sequence modeling.',
    longDescription:
      'Built a deep learning pipeline for classifying emerging real-world events from noisy Twitter data. Implements tokenization, custom embedding layers, LSTM-based sequence modeling, and noise-handling pipelines designed for real-world social media language patterns.',
    tech: ['Python', 'NLP', 'Deep Learning', 'Scikit-learn', 'TensorFlow', 'LSTM'],
    category: 'NLP',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    Icon: Hash,
    metrics: [
      { label: 'Model', value: 'LSTM' },
      { label: 'Data Source', value: 'Twitter' },
      { label: 'Task', value: 'Classification' },
    ],
  },
];
