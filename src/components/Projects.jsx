import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const categories = ['ALL', 'MACHINE LEARNING', 'NLP', 'GENERATIVE AI'];

// Bullet points from official resume
const resumeProjectDetails = {
  1: [
    'Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on agricultural and environmental datasets to engineer features and surface actionable patterns for model training.',
    'Applied feature engineering and handled class-imbalanced data using supervised learning techniques to improve model reliability, generalization, and predictive accuracy.',
    'Built, trained, and tuned a Random Forest classification model, running validation tests and logging performance metrics to optimize hyperparameters, achieving 90% accuracy.',
    'Deployed the trained model as a live inference application, integrating the full ML pipeline (preprocessing → prediction → output) into a usable interface.'
  ],
  2: [
    'Engineered a content-based recommendation model in Python using NLP techniques (TF-IDF, CountVectorizer) to match user skill profiles against job listings.',
    'Built and integrated a Streamlit web application to expose the model as a usable, API-like interface, covering data preprocessing and inference end-to-end.',
    'Deployed the application as a live, publicly accessible tool providing continuous, real-time recommendations.'
  ],
  3: [
    'Designed and built an AI-powered agent using a Groq-hosted LLM within a modular, agentic architecture to generate personalized itineraries from natural-language queries, applying prompt engineering and Generative AI techniques.',
    'Developed a FastAPI backend with a documented REST API and a Streamlit frontend, integrating five external data pipelines (OpenWeather, Geoapify, RapidAPI, OpenRouteService, Unsplash) for live weather, points of interest, routing, and imagery.',
    'Deployed the full-stack application (API + UI) to Render as an end-to-end, publicly accessible microservice, with secure environment-based configuration and live performance monitoring.'
  ]
};

function ProjectCard({ project, onViewDetails }) {
  const points = resumeProjectDetails[project.id] || [];

  return (
    <div
      className="bg-white border border-black/5 rounded-none overflow-hidden shadow-md flex flex-col lg:flex-row group hover:border-brand-yellow/60 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Project Image Panel */}
      {project.image && (
        <div className="lg:w-[35%] xl:w-[30%] relative overflow-hidden bg-brand-light-grey border-b lg:border-b-0 lg:border-r border-black/5 flex items-center justify-center min-h-[220px] lg:min-h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 absolute inset-0"
          />
          {/* Overlay Category Pill */}
          <span className="absolute top-4 left-4 bg-brand-charcoal text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-none shadow-md z-20">
            {project.category.toUpperCase()}
          </span>
        </div>
      )}

      {/* Details Content Area */}
      <div className="lg:w-[65%] xl:w-[70%] p-6 md:p-8 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
            <h3 className="font-extrabold text-lg sm:text-xl text-brand-charcoal">
              {project.title}
            </h3>
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
              {project.tagline}
            </span>
          </div>

          {/* Point-wise Project Details */}
          <ul className="project-points space-y-2 mb-6 text-xs sm:text-sm text-brand-charcoal/80">
            {points.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row: Tech tags and buttons */}
        <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 max-w-xl">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-black px-2 py-0.5 rounded-none bg-brand-light-grey text-brand-charcoal/70 uppercase tracking-wide border border-black/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="text-[9px] text-brand-charcoal/40 font-bold self-center">
                +{project.techStack.length - 6} MORE
              </span>
            )}
          </div>

          {/* Action links */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => onViewDetails(project)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-none bg-brand-charcoal text-white font-black text-[10px] tracking-widest uppercase hover:bg-brand-charcoal/90 transition-colors cursor-pointer"
            >
              <Layers size={12} />
              View Architecture
            </button>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white hover:bg-brand-charcoal hover:text-white font-black text-[10px] tracking-widest px-5 py-2.5 rounded-full uppercase border-b-4 border-[#00527c] active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md flex items-center justify-center gap-1.5 no-underline select-none cursor-pointer"
                aria-label={`Open ${project.title} live preview`}
              >
                <ExternalLink size={12} />
                Live App
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter project cards
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    return project.category.toUpperCase() === activeCategory;
  });

  return (
    <section
      id="projects"
      className="min-h-fit md:min-h-screen py-12 md:py-24 relative flex items-center"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full lg:pl-8">
        
        {/* Title Heading */}
        <h2 className="section-title mb-10">PROJECTS</h2>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-black/5 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-black text-xs tracking-widest px-4 py-2 rounded-full transition-all duration-250 cursor-pointer ${
                  isActive
                    ? 'bg-brand-yellow text-brand-charcoal shadow-sm'
                    : 'text-brand-charcoal/60 hover:text-brand-charcoal'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Large Horizontal Projects Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Modal Popup Details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
