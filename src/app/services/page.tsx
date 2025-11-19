"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Zap, Settings, Building2, ClipboardCheck, ArrowRight, 
  CheckCircle2, Gauge, Wrench, Calculator, Shield,
  TrendingUp, Award, Users, Clock
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionDivider from '@/components/ui/SectionDivider'

interface Service {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  color: string
  glowColor: string
  description: string
  features: string[]
  capabilities: string[]
  stats: {
    projects: number
    satisfaction: number
    avgTime: string
  }
  href: string
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: 'electrical',
      title: 'Electrical Engineering',
      subtitle: 'Power & Control Systems',
      icon: <Zap className="w-8 h-8" />,
      color: '#E9470C',
      glowColor: 'rgba(233, 71, 12, 0.3)',
      description: 'Comprehensive electrical design and engineering services for commercial and industrial facilities, from power distribution to advanced automation systems.',
      features: [
        'Power Distribution Design',
        'Lighting & Controls',
        'Fire Alarm Systems',
        'Emergency Power',
        'Load Calculations',
        'Arc Flash Analysis'
      ],
      capabilities: [
        '120V - 480V Systems',
        'Up to 5000A Capacity',
        'NEC 2020 Compliant',
        'AutoCAD & Revit'
      ],
      stats: {
        projects: 150,
        satisfaction: 98,
        avgTime: '8-12'
      },
      href: '/services/electrical-design'
    },
    {
      id: 'mechanical',
      title: 'Mechanical Engineering',
      subtitle: 'HVAC & Plumbing Systems',
      icon: <Settings className="w-8 h-8" />,
      color: '#08BDBD',
      glowColor: 'rgba(8, 189, 189, 0.3)',
      description: 'Advanced mechanical system design including HVAC, plumbing, and energy-efficient solutions for optimal building performance and comfort.',
      features: [
        'HVAC System Design',
        'Plumbing & Piping',
        'Energy Modeling',
        'Ventilation Systems',
        'Equipment Selection',
        'Sustainable Design'
      ],
      capabilities: [
        '50-5000 CFM Systems',
        'ASHRAE 90.1 Standards',
        'Energy Star Certified',
        'BIM Integration'
      ],
      stats: {
        projects: 120,
        satisfaction: 96,
        avgTime: '10-16'
      },
      href: '/services/mechanical-design'
    },
    {
      id: 'civil',
      title: 'Civil Engineering',
      subtitle: 'Infrastructure & Construction',
      icon: <Building2 className="w-8 h-8" />,
      color: '#29BF12',
      glowColor: 'rgba(41, 191, 18, 0.3)',
      description: 'Structural engineering and civil design services for large-scale construction projects, ensuring safety, durability, and regulatory compliance.',
      features: [
        'Structural Analysis',
        'Site Development',
        'Foundation Design',
        'Seismic Engineering',
        'Code Compliance',
        'Construction Support'
      ],
      capabilities: [
        'Steel & Concrete Design',
        'IBC & ACI Standards',
        'Seismic Zone 4 Rated',
        'ETABS & SAP2000'
      ],
      stats: {
        projects: 85,
        satisfaction: 99,
        avgTime: '12-20'
      },
      href: '/services/civil-engineering'
    },
    {
      id: 'management',
      title: 'Project Management',
      subtitle: 'End-to-End Delivery',
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: '#E9470C',
      glowColor: 'rgba(233, 71, 12, 0.3)',
      description: 'Comprehensive project management services ensuring on-time, on-budget delivery with seamless coordination across all engineering disciplines.',
      features: [
        'Strategic Planning',
        'Resource Management',
        'Quality Assurance',
        'Risk Assessment',
        'Schedule Control',
        'Stakeholder Coordination'
      ],
      capabilities: [
        'PMP Certified Teams',
        'Agile Methodologies',
        'Real-time Tracking',
        'Multi-discipline Coordination'
      ],
      stats: {
        projects: 200,
        satisfaction: 100,
        avgTime: '6-24'
      },
      href: '/services/project-management'
    }
  ]

  return (
    <main className="relative bg-light-neutral min-h-screen">
      <BlueprintBackground />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blueprint-line bg-light-neutral/80 backdrop-blur-sm mb-8">
              <Gauge className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-mono text-dark-neutral">ENGINEERING SERVICES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-neutral mb-8 leading-tight">
              Engineering
              <span className="text-primary-orange block">Excellence</span>
            </h1>
            
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive MEP engineering services for large-scale commercial and industrial projects.
              From concept to completion, we deliver precision at every stage.
            </p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            >
              {[
                { value: 555, suffix: '+', label: 'Projects Delivered' },
                { value: 15, suffix: 'yrs', label: 'Experience' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
                { value: 24, suffix: '/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-light-neutral/50 border border-blueprint-line backdrop-blur-sm">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-bold text-primary-orange font-mono block"
                    duration={2}
                  />
                  <p className="text-sm text-neutral-gray mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Corner Elements */}
        <div className="absolute top-32 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-accent/30" />
        <div className="absolute top-32 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-accent/30" />
      </section>

      {/* Services Grid */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Our Core
              <span className="text-cyan-accent"> Disciplines</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Specialized engineering expertise across multiple disciplines,
              delivering integrated solutions for complex projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setActiveService(service.id)}
                onHoverEnd={() => setActiveService(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: service.glowColor }}
                />

                {/* Service Card */}
                <div className="relative premium-card rounded-3xl p-8 bg-light-neutral/80 backdrop-blur-sm border-2 border-blueprint-line hover:border-cyan-accent transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        boxShadow: activeService === service.id ? `0 0 30px ${service.glowColor}` : 'none'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-neutral-gray mb-1">DISCIPLINE</div>
                      <div className="text-sm font-semibold" style={{ color: service.color }}>
                        {service.id.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-dark-neutral mb-2">{service.title}</h3>
                    <p className="text-sm font-medium text-neutral-gray mb-4">{service.subtitle}</p>
                    <p className="text-dark-neutral leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-dark-neutral">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6 p-4 rounded-lg bg-dark-neutral/5 border border-blueprint-line">
                    <div className="text-xs font-mono text-neutral-gray mb-2 uppercase tracking-wider">
                      Technical Capabilities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded text-xs font-medium border"
                          style={{ 
                            color: service.color,
                            borderColor: `${service.color}30`,
                            backgroundColor: `${service.color}10`
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <AnimatedCounter
                        value={service.stats.projects}
                        suffix="+"
                        className="text-lg font-bold text-dark-neutral block"
                        duration={1.5}
                      />
                      <div className="text-xs text-neutral-gray">Projects</div>
                    </div>
                    <div className="text-center">
                      <AnimatedCounter
                        value={service.stats.satisfaction}
                        suffix="%"
                        className="text-lg font-bold text-dark-neutral block"
                        duration={1.5}
                      />
                      <div className="text-xs text-neutral-gray">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-dark-neutral">{service.stats.avgTime}w</div>
                      <div className="text-xs text-neutral-gray">Avg Timeline</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <button 
                      className="w-full py-3 rounded-lg font-semibold text-light-neutral transition-all group flex items-center justify-center gap-2"
                      style={{ backgroundColor: service.color }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  {/* Blueprint Corner Details */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 opacity-20 group-hover:opacity-40 transition-opacity"
                       style={{ borderColor: service.color }} />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 opacity-20 group-hover:opacity-40 transition-opacity"
                       style={{ borderColor: service.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-dark-neutral/5 to-light-neutral">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Our Engineering
              <span className="text-success-green"> Process</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              A systematic approach to engineering excellence, ensuring quality
              and precision at every stage of your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Calculator className="w-8 h-8" />, 
                title: 'Analysis', 
                description: 'Comprehensive site analysis and requirements assessment',
                step: '01'
              },
              { 
                icon: <Wrench className="w-8 h-8" />, 
                title: 'Design', 
                description: 'Detailed engineering design and system specifications',
                step: '02'
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: 'Coordination', 
                description: 'Multi-discipline coordination and clash detection',
                step: '03'
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: 'Delivery', 
                description: 'Final documentation and project handover',
                step: '04'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center p-6 rounded-xl bg-light-neutral border border-blueprint-line"
              >
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-primary-orange text-light-neutral text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>
                <div className="inline-flex p-4 rounded-xl bg-cyan-accent/10 text-cyan-accent mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-neutral mb-3">{step.title}</h3>
                <p className="text-neutral-gray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-dark-neutral">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
              Ready to Start Your
              <span className="text-primary-orange"> Project?</span>
            </h2>
            <p className="text-xl text-light-neutral/70 mb-12 leading-relaxed">
              Let's discuss how our engineering expertise can bring your vision to life.
              Contact us today for a comprehensive project consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="cta-glow px-8 py-4 rounded-lg text-light-neutral font-semibold text-lg flex items-center justify-center gap-2 group">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/projects">
                <button className="px-8 py-4 rounded-lg border-2 border-cyan-accent text-light-neutral font-semibold text-lg hover:bg-cyan-accent/10 transition-all">
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
