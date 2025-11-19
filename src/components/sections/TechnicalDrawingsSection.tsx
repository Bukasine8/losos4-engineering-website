"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Layers, Zap, Settings, Eye, Download } from 'lucide-react'

interface Drawing {
  id: string
  title: string
  category: 'electrical' | 'mechanical' | 'plumbing'
  type: string
  scale: string
  image: string
  description: string
  specs: string[]
}

export default function TechnicalDrawingsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedDrawing, setSelectedDrawing] = useState<Drawing | null>(null)

  const drawings: Drawing[] = [
    {
      id: 'elec-001',
      title: 'Main Distribution Panel',
      category: 'electrical',
      type: 'Single Line Diagram',
      scale: '1:100',
      image: '/api/placeholder/400/300',
      description: 'Primary electrical distribution for commercial facility with load calculations and protection coordination.',
      specs: ['480V/277V System', '2000A Main Breaker', 'Arc Flash Analysis', 'Short Circuit Study']
    },
    {
      id: 'mech-001', 
      title: 'HVAC System Layout',
      category: 'mechanical',
      type: 'Plan View',
      scale: '1:200',
      image: '/api/placeholder/400/300',
      description: 'Complete HVAC system design with ductwork routing and equipment placement for optimal air distribution.',
      specs: ['50 Ton Capacity', 'VAV System', 'Energy Recovery', 'BMS Integration']
    },
    {
      id: 'plumb-001',
      title: 'Fire Protection System',
      category: 'plumbing',
      type: 'Isometric',
      scale: '1:50',
      image: '/api/placeholder/400/300',
      description: 'Comprehensive fire sprinkler system with hydraulic calculations and NFPA compliance.',
      specs: ['Wet Pipe System', 'NFPA 13 Compliant', 'Hydraulic Calc', 'Seismic Bracing']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Drawings', icon: <Layers className="w-4 h-4" /> },
    { id: 'electrical', label: 'Electrical', icon: <Zap className="w-4 h-4" /> },
    { id: 'mechanical', label: 'Mechanical', icon: <Settings className="w-4 h-4" /> },
    { id: 'plumbing', label: 'Plumbing', icon: <FileText className="w-4 h-4" /> }
  ]

  const filteredDrawings = activeCategory === 'all' 
    ? drawings 
    : drawings.filter(d => d.category === activeCategory)

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-light-neutral/50 to-dark-neutral/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blueprint-line bg-light-neutral backdrop-blur-sm mb-6">
            <FileText className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-mono text-dark-neutral">TECHNICAL DRAWINGS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
            Precision in Every
            <span className="text-primary-orange"> Line</span>
          </h2>
          
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Detailed technical drawings and schematics showcasing our engineering precision
            and adherence to industry standards.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all font-medium ${
                activeCategory === category.id
                  ? 'border-primary-orange bg-primary-orange/10 text-primary-orange'
                  : 'border-blueprint-line text-dark-neutral hover:border-cyan-accent hover:text-cyan-accent'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Drawings Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDrawings.map((drawing, index) => (
              <motion.div
                key={drawing.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedDrawing(drawing)}
              >
                {/* Drawing Card */}
                <div className="relative premium-card rounded-2xl overflow-hidden bg-light-neutral border-2 border-blueprint-line hover:border-cyan-accent transition-all">
                  {/* Drawing Preview */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-neutral/5 to-dark-neutral/10 overflow-hidden">
                    {/* Blueprint Grid Overlay */}
                    <div className="absolute inset-0 blueprint-grid opacity-20" />
                    
                    {/* Simulated Technical Drawing */}
                    <svg
                      className="absolute inset-0 w-full h-full p-4"
                      viewBox="0 0 400 300"
                      fill="none"
                    >
                      {/* Grid Lines */}
                      <defs>
                        <pattern id={`grid-${drawing.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-accent/30" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${drawing.id})`} />
                      
                      {/* Technical Elements based on category */}
                      {drawing.category === 'electrical' && (
                        <g className="text-primary-orange">
                          <rect x="50" y="50" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="2" />
                          <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                          <line x1="115" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="2" />
                          <rect x="200" y="85" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
                          <line x1="230" y1="100" x2="300" y2="100" stroke="currentColor" strokeWidth="2" />
                        </g>
                      )}
                      
                      {drawing.category === 'mechanical' && (
                        <g className="text-cyan-accent">
                          <rect x="50" y="50" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="2" />
                          <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path d="M 160 150 Q 180 130, 200 150 T 240 150" stroke="currentColor" strokeWidth="2" fill="none" />
                          <rect x="100" y="80" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
                        </g>
                      )}
                      
                      {drawing.category === 'plumbing' && (
                        <g className="text-success-green">
                          <rect x="50" y="50" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path d="M 80 100 L 150 100 L 150 200 L 250 200 L 250 120" stroke="currentColor" strokeWidth="3" fill="none" />
                          <circle cx="80" cy="100" r="8" fill="currentColor" />
                          <circle cx="150" cy="200" r="8" fill="currentColor" />
                          <circle cx="250" cy="120" r="8" fill="currentColor" />
                        </g>
                      )}
                    </svg>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark-neutral/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex gap-4">
                        <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm">
                          <Eye className="w-6 h-6 text-light-neutral" />
                        </div>
                        <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm">
                          <Download className="w-6 h-6 text-light-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Drawing Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-dark-neutral">{drawing.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        drawing.category === 'electrical' ? 'bg-primary-orange/10 text-primary-orange' :
                        drawing.category === 'mechanical' ? 'bg-cyan-accent/10 text-cyan-accent' :
                        'bg-success-green/10 text-success-green'
                      }`}>
                        {drawing.scale}
                      </span>
                    </div>
                    
                    <p className="text-sm text-neutral-gray mb-4">{drawing.type}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {drawing.specs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-neutral/5 border border-blueprint-line rounded text-xs text-dark-neutral"
                        >
                          {spec}
                        </span>
                      ))}
                      {drawing.specs.length > 2 && (
                        <span className="px-2 py-1 bg-dark-neutral/5 border border-blueprint-line rounded text-xs text-neutral-gray">
                          +{drawing.specs.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Blueprint Corner Details */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-accent/40" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-accent/40" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Drawing Modal */}
        <AnimatePresence>
          {selectedDrawing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-neutral/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedDrawing(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-light-neutral rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-dark-neutral mb-2">{selectedDrawing.title}</h3>
                    <p className="text-neutral-gray">{selectedDrawing.type} • Scale: {selectedDrawing.scale}</p>
                  </div>
                  <button
                    onClick={() => setSelectedDrawing(null)}
                    className="p-2 rounded-lg hover:bg-dark-neutral/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-dark-neutral mb-6">{selectedDrawing.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedDrawing.specs.map((spec, i) => (
                    <div key={i} className="p-4 bg-dark-neutral/5 rounded-lg border border-blueprint-line">
                      <span className="text-sm font-medium text-dark-neutral">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Technical Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <defs>
          <pattern id="techPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-cyan-accent" />
            <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="currentColor" strokeWidth="0.5" className="text-cyan-accent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#techPattern)" />
      </svg>
    </section>
  )
}
