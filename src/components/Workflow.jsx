import React, { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand the Problem',
    desc: 'Define the business objective, identify the ML/AI problem type, and determine success metrics before writing any code.',
    color: '#3b82f6',
  },
  {
    num: '02',
    title: 'Collect & Prepare Data',
    desc: 'Gather raw data, handle missing values, remove duplicates, and prepare a clean dataset for analysis.',
    color: '#60a5fa',
  },
  {
    num: '03',
    title: 'Explore & Engineer Features',
    desc: 'Perform EDA to understand patterns, engineer domain-relevant features, and address class imbalance.',
    color: '#8b5cf6',
  },
  {
    num: '04',
    title: 'Build ML / AI Model',
    desc: 'Select appropriate algorithms, train models (classical ML, DL, or LLM-based), and tune hyperparameters.',
    color: '#a78bfa',
  },
  {
    num: '05',
    title: 'Evaluate & Improve',
    desc: 'Assess model performance with appropriate metrics, identify weaknesses, and iteratively improve.',
    color: '#10b981',
  },
  {
    num: '06',
    title: 'Build Application',
    desc: 'Package the model into a usable application using FastAPI, Streamlit, or Flask with a clean API design.',
    color: '#34d399',
  },
  {
    num: '07',
    title: 'Deploy',
    desc: 'Deploy to production infrastructure (Render, Streamlit Cloud) with proper environment configuration.',
    color: '#f59e0b',
  },
  {
    num: '08',
    title: 'Monitor & Iterate',
    desc: 'Track performance, collect user feedback, and continuously improve the model and application over time.',
    color: '#fbbf24',
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #04080F 0%, #07101E 50%, #04080F 100%)',
      }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">My Process</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            How I Build{' '}
            <span className="gradient-text-blue">AI Solutions</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            A disciplined, end-to-end approach to developing production-ready AI/ML applications.
            <br />
            <span className="text-sm" style={{ color: '#4b5563' }}>Click any step to expand.</span>
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={i}
                className="rounded-2xl p-5 cursor-pointer transition-all duration-300"
                style={{
                  background: isActive ? `${step.color}10` : 'rgba(17, 24, 39, 0.4)',
                  border: isActive
                    ? `1px solid ${step.color}40`
                    : '1px solid rgba(255,255,255,0.06)',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  boxShadow: isActive ? `0 12px 30px ${step.color}15` : 'none',
                }}
                onClick={() => setActiveStep(isActive ? null : i)}
              >
                {/* Step number */}
                <div
                  className="text-3xl font-black mb-3 leading-none"
                  style={{
                    color: isActive ? step.color : '#1f2937',
                    fontFamily: 'JetBrains Mono, monospace',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {step.num}
                </div>

                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: isActive ? '#f9fafb' : '#e5e7eb' }}
                >
                  {step.title}
                </h3>

                {/* Expandable description */}
                <div
                  style={{
                    maxHeight: isActive ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p className="text-xs leading-relaxed pt-1" style={{ color: '#9ca3af' }}>
                    {step.desc}
                  </p>
                </div>

                {/* Color bar at bottom */}
                <div
                  className="h-0.5 rounded-full mt-4 transition-all duration-300"
                  style={{
                    background: step.color,
                    opacity: isActive ? 1 : 0.15,
                    width: isActive ? '100%' : '30%',
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
