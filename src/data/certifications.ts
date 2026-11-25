import type { LucideIcon } from 'lucide-react';
import { Layers, Zap, Server, Triangle, Database, Code2, Code, Brain, Cloud, Table2 } from 'lucide-react';

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  color: string;
  Icon: LucideIcon;
}

export const certifications: Certification[] = [
  { id: 1,  name: 'MEAN-DSE Full Stack Developer',  issuer: 'Infosys',     color: 'from-blue-400 to-cyan-500',     Icon: Layers   },
  { id: 2,  name: 'API Development using Express',  issuer: 'Infosys',     color: 'from-green-400 to-teal-500',    Icon: Zap      },
  { id: 3,  name: 'Node.js and Microservices',      issuer: 'Infosys',     color: 'from-green-500 to-emerald-600', Icon: Server   },
  { id: 4,  name: 'Angular Beyond the Basics',      issuer: 'Infosys',     color: 'from-red-400 to-rose-500',      Icon: Triangle },
  { id: 5,  name: 'NoSQL Databases',                issuer: 'Infosys',     color: 'from-purple-400 to-violet-500', Icon: Database },
  { id: 6,  name: 'DSA in Java',                    issuer: 'Infosys',     color: 'from-orange-400 to-amber-500',  Icon: Code2    },
  { id: 7,  name: 'Basics of Java and OOP',         issuer: 'Infosys',     color: 'from-yellow-400 to-orange-500', Icon: Code     },
  { id: 8,  name: 'Machine Learning',               issuer: 'AWS Academy', color: 'from-cyan-400 to-sky-500',      Icon: Brain    },
  { id: 9,  name: 'Cloud Computing',                issuer: 'AWS Academy', color: 'from-sky-400 to-blue-500',      Icon: Cloud    },
  { id: 10, name: 'DBMS',                           issuer: 'NPTEL',       color: 'from-indigo-400 to-purple-500', Icon: Table2   },
];
