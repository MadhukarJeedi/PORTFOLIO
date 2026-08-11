import React from 'react';
import { 
  Code2, 
  Database, 
  Code, 
  TrendingUp, 
  CheckSquare, 
  Layers, 
  Trees, 
  Library, 
  Cpu, 
  Binary, 
  FileText, 
  Search, 
  Link, 
  GitBranch, 
  Bot, 
  MessageSquare, 
  Eye, 
  Globe, 
  AppWindow, 
  Cloud, 
  Filter, 
  BarChart2, 
  GitFork 
} from 'lucide-react';
import { profile } from '../data/profile';

const skillsList = [
  { name: 'Python', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'Data Structures & Alg.', icon: Code },
  { name: 'Stats & Probability', icon: TrendingUp },
  { name: 'Regression Analysis', icon: TrendingUp },
  { name: 'Classification', icon: CheckSquare },
  { name: 'Clustering Algorithms', icon: Layers },
  { name: 'Random Forest', icon: Trees },
  { name: 'Scikit-learn', icon: Library },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'Keras', icon: Cpu },
  { name: 'NumPy', icon: Binary },
  { name: 'Pandas', icon: Binary },
  { name: 'Prompt Engineering', icon: FileText },
  { name: 'RAG Systems', icon: Search },
  { name: 'LangChain', icon: Link },
  { name: 'LangGraph', icon: GitBranch },
  { name: 'AI Agents', icon: Bot },
  { name: 'Vector Databases', icon: Database },
  { name: 'Deep Learning', icon: Layers },
  { name: 'NLP (TF-IDF)', icon: MessageSquare },
  { name: 'Computer Vision', icon: Eye },
  { name: 'FastAPI', icon: Globe },
  { name: 'Streamlit', icon: AppWindow },
  { name: 'Render Cloud', icon: Cloud },
  { name: 'Data Cleaning & EDA', icon: Filter },
  { name: 'Matplotlib & Seaborn', icon: BarChart2 },
  { name: 'Git & GitHub', icon: GitFork }
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 md:py-24 relative flex items-center"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full lg:pl-8">
        {/* Title Heading */}
        <h2 className="section-title mb-10">ABOUT ME</h2>

        <div className="flex flex-col gap-12">
          
          {/* Biography at the top (Resume Summary) */}
          <div className="max-w-5xl">
            <h3 className="font-black text-2xl text-brand-charcoal mb-4 uppercase">
              Welcome! I'm <span className="text-brand-yellow">{profile.name}</span>
            </h3>
            <p className="text-brand-charcoal/90 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              Data Science graduate and AI/ML Engineer with hands-on experience across the full machine learning lifecycle — data cleaning, preprocessing, feature engineering, exploratory data analysis, model development, evaluation, and deployment — using Python, Scikit-learn, TensorFlow, and Keras. Practical project experience in Generative AI and LLM-based systems, including prompt engineering, Retrieval-Augmented Generation (RAG), LangChain/LangGraph, AI agents, and vector databases (FAISS, ChromaDB), applied to build intelligent, production-style applications (FastAPI, Flask, Streamlit). Strong statistical foundation, SQL proficiency, and a track record of end-to-end project delivery, documentation, and clear technical communication. Motivated to apply AI, ML, and Generative AI skills to engineering, quality, and product lifecycle challenges in a regulated, mission-driven environment.
            </p>
            <div className="border-l-4 border-brand-yellow pl-4 italic text-sm text-brand-charcoal/70">
              "{profile.tagline}"
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="border-t border-black/5 pt-10 mt-4">
            {/* Styled exactly like ABOUT ME */}
            <h2 className="section-title mb-10">TECHNICAL SKILLS</h2>

            {/* Square Capsule Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsList.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-white border border-black/5 rounded-none p-3.5 flex items-center justify-start shadow-sm hover:border-brand-yellow/60 hover:scale-[1.04] hover:shadow-md transition-all duration-300"
                  >
                    {/* Left Icon (No rounded corners) */}
                    <div className="text-brand-yellow flex-shrink-0">
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                    {/* Vertical Divider line */}
                    <div className="w-px h-5 bg-black/10 mx-3 flex-shrink-0" />
                    {/* Skill Label */}
                    <span className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
