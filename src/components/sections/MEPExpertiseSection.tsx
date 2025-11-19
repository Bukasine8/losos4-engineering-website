"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Wind, Droplets, Gauge, Settings, Shield } from 'lucide-react'

interface ExpertiseCard {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  glowColor: string
  specs: {
    label: string
    value: string
  }[]
  capabilities: string[]
}

export default function MEPExpertiseSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const expertiseCards: ExpertiseCard[] = [
    {
      id: 'electrical',
      title: 'Electrical Engineering',
      icon: <Zap className="w-8 h-8" />,
      color: '#E9470C',
      glowColor: 'rgba(233, 71, 12, 0.3)',
      specs: [
        { label: 'Voltage Range', value: '120V - 480V' },
        { label: 'Load Capacity', value: 'Up to 5000A' },
        { label: 'Compliance', value: 'NEC 2020' }
      ],
      capabilities: [
        'Power distribution systems',
        '2D electrical layout design',
        'Lighting & controls engineering',
        'Emergency power systems',
        'Load calculations & analysis'
      ]
    },
    {
      id: 'mechanical',
      title: 'Mechanical Systems',
      icon: <Settings className="w-8 h-8" />,
      color: '#08BDBD',
      glowColor: 'rgba(8, 189, 189, 0.3)',
      specs: [
        { label: 'HVAC Capacity', value: '50-5000 CFM' },
        { label: 'Temp Range', value: '-20°F to 120°F' },
        { label: 'Standards', value: 'ASHRAE 90.1' }
      ],
      capabilities: [
        'HVAC system design',
        'Ventilation & air quality',
        'Energy modeling & optimization',
        'Equipment selection & sizing',
        'Ductwork & piping layout'
      ]
    },
    {
      id: 'plumbing',
      title: 'Plumbing Engineering',
      icon: <Droplets className="w-8 h-8" />,
      color: '#29BF12',
      glowColor: 'rgba(41, 191, 18, 0.3)',
      specs: [
        { label: 'Pipe Sizes', value: '½" to 12"' },
        { label: 'Flow Rate', value: 'Up to 2000 GPM' },
        { label: 'Code', value: 'IPC/UPC' }
      ],
      capabilities: [
        'Water supply systems',
        'Drainage & waste design',
        'Fire protection systems',
        'Gas piping design',
        'Fixture count & sizing'
      ]
    }
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blueprint-line bg-light-neutral/50 backdrop-blur-sm mb-6">
            <Gauge className="w-4 h-4 text-cyan-accent" />
            <span className="text-sm font-mono text-dark-neutral">MEP EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
            Comprehensive
            <span className="text-primary-orange"> MEP </span>
            Design
          </h2>
          
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Full-spectrum mechanical, electrical, and plumbing engineering services
            for large-scale commercial and industrial projects.
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveCard(card.id)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative group cursor-pointer"
            >
              {/* Card Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: card.glowColor }}
              />

              {/* Card Content */}
              <div className="relative premium-card rounded-2xl p-8 bg-light-neutral/80 backdrop-blur-sm h-full">
                {/* Icon Header */}
                <div
                  className="inline-flex p-4 rounded-xl mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${card.color}15`,
                    color: card.color,
                    boxShadow: activeCard === card.id ? `0 0 30px ${card.glowColor}` : 'none'
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-dark-neutral mb-4">
                  {card.title}
                </h3>

                {/* Technical Specs - Blueprint Style */}
                <div className="space-y-3 mb-6 pb-6 border-b border-blueprint-line">
                  {card.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="font-mono text-neutral-gray">{spec.label}</span>
                      <span className="font-bold text-dark-neutral">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Capabilities List */}
                <AnimatePresence>
                  {activeCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {card.capabilities.map((capability, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: card.color }}
                          />
                          <span className="text-neutral-gray">{capability}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Blueprint Corner Detail */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 opacity-20 group-hover:opacity-40 transition-opacity"
                     style={{ borderColor: card.color }} />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 opacity-20 group-hover:opacity-40 transition-opacity"
                     style={{ borderColor: card.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: <Shield className="w-5 h-5" />, text: 'ISO 9001 Certified' },
            { icon: <Gauge className="w-5 h-5" />, text: 'LEED Accredited' },
            { icon: <Settings className="w-5 h-5" />, text: 'ASHRAE Member' }
          ].map((badge, index) => (
            <div
              key={index}
              className="tech-badge flex items-center gap-2 px-5 py-3 rounded-lg"
            >
              <div className="text-cyan-accent">{badge.icon}</div>
              <span className="text-sm font-medium text-dark-neutral">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Technical SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M 0 400 Q 300 350, 600 400 T 1200 400"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-accent"
        />
        <path
          d="M 0 450 Q 300 500, 600 450 T 1200 450"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary-orange"
        />
      </svg>
    </section>
  )
}
