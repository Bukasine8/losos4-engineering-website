"use client"

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Pencil, Users, Cog, CheckCircle, Sparkles } from 'lucide-react'

interface Phase {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  duration: string
  color: string
  glowColor: string
  deliverables: string[]
}

export default function ProjectTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef
  })

  const phases: Phase[] = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: 'Discovery',
      description: 'Site analysis, requirements gathering, and initial feasibility studies',
      duration: '2-3 weeks',
      color: '#E9470C',
      glowColor: 'rgba(233, 71, 12, 0.3)',
      deliverables: ['Site Survey', 'Load Analysis', 'Code Review', 'Budget Estimate']
    },
    {
      id: 2,
      icon: <Pencil className="w-8 h-8" />,
      title: 'Design & Modelling',
      description: 'Detailed MEP design, 2D electrical layouts, and system specifications',
      duration: '4-6 weeks',
      color: '#08BDBD',
      glowColor: 'rgba(8, 189, 189, 0.3)',
      deliverables: ['MEP Drawings', 'Electrical Layouts', 'Load Calculations', 'Equipment Specs']
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: 'Coordination',
      description: 'Multi-discipline coordination, clash detection, and design refinement',
      duration: '2-4 weeks',
      color: '#29BF12',
      glowColor: 'rgba(41, 191, 18, 0.3)',
      deliverables: ['Coordinated Models', 'Clash Reports', 'RFI Responses', 'Shop Drawings']
    },
    {
      id: 4,
      icon: <Cog className="w-8 h-8" />,
      title: 'Execution Support',
      description: 'Construction administration, site visits, and technical support',
      duration: 'Ongoing',
      color: '#E9470C',
      glowColor: 'rgba(233, 71, 12, 0.3)',
      deliverables: ['Site Inspections', 'Field Changes', 'RFI Management', 'Progress Reports']
    },
    {
      id: 5,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Delivery',
      description: 'Final documentation, as-built drawings, and project closeout',
      duration: '1-2 weeks',
      color: '#08BDBD',
      glowColor: 'rgba(8, 189, 189, 0.3)',
      deliverables: ['As-Built Drawings', 'O&M Manuals', 'Warranty Docs', 'Final Reports']
    }
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-dark-neutral">
      {/* Section Header */}
      <div className="container mx-auto max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-accent/30 bg-light-neutral/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-accent" />
            <span className="text-sm font-mono text-light-neutral">PROJECT PHASES</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
            Our Engineering
            <span className="text-cyan-accent"> Process</span>
          </h2>
          
          <p className="text-lg text-light-neutral/70 max-w-2xl mx-auto">
            From concept to completion, we follow a proven methodology to deliver
            excellence at every stage of your project.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Timeline */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide pb-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="flex gap-8 px-4 md:px-8 min-w-max">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-80 md:w-96"
            >
              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="absolute top-20 left-full w-8 h-px bg-gradient-to-r from-cyan-accent to-cyan-accent/30 z-0" />
              )}

              {/* Phase Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                  style={{ background: phase.glowColor }}
                />

                {/* Card Content */}
                <div className="relative premium-card rounded-2xl p-8 bg-light-neutral/5 backdrop-blur-sm border-2 hover:border-cyan-accent transition-all duration-300">
                  {/* Phase Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2"
                       style={{ backgroundColor: phase.color, borderColor: phase.color, color: '#FFFFFA' }}>
                    {phase.id}
                  </div>

                  {/* Icon */}
                  <div
                    className="inline-flex p-4 rounded-xl mb-6"
                    style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
                  >
                    {phase.icon}
                  </div>

                  {/* Title & Duration */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-light-neutral mb-2">
                      {phase.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-neutral/50 border border-blueprint-line">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: phase.color }} />
                      <span className="text-sm font-mono text-light-neutral/80">{phase.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-light-neutral/70 mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase text-cyan-accent mb-3 tracking-wider">
                      Key Deliverables
                    </div>
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-light-neutral/80">
                        <div className="w-1 h-1 rounded-full bg-cyan-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Blueprint Corner Detail */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-accent/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-accent/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="text-center mt-8">
        <p className="text-light-neutral/50 text-sm font-mono flex items-center justify-center gap-2">
          <span>←</span>
          <span>Scroll horizontally to explore all phases</span>
          <span>→</span>
        </p>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-5" />
      
      {/* Animated Background Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1920 800"
        fill="none"
      >
        <path
          d="M 0 400 Q 480 300, 960 400 T 1920 400"
          stroke="url(#timelineGradient)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#08BDBD" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E9470C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#29BF12" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
