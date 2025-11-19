"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Factory, Hospital, School, ArrowRight, Check } from 'lucide-react'

interface ServiceConfig {
  scale: 'small' | 'medium' | 'large' | 'enterprise'
  industry: 'commercial' | 'industrial' | 'healthcare' | 'education'
  services: string[]
}

export default function ServiceSelectorSection() {
  const [config, setConfig] = useState<ServiceConfig>({
    scale: 'large',
    industry: 'commercial',
    services: []
  })

  const scales = [
    { id: 'small', label: 'Small', range: '< 10,000 sq ft', team: '2-3' },
    { id: 'medium', label: 'Medium', range: '10k - 50k sq ft', team: '4-6' },
    { id: 'large', label: 'Large', range: '50k - 200k sq ft', team: '8-12' },
    { id: 'enterprise', label: 'Enterprise', range: '> 200k sq ft', team: '15+' }
  ]

  const industries = [
    { id: 'commercial', label: 'Commercial', icon: <Building2 className="w-6 h-6" />, color: '#E9470C' },
    { id: 'industrial', label: 'Industrial', icon: <Factory className="w-6 h-6" />, color: '#08BDBD' },
    { id: 'healthcare', label: 'Healthcare', icon: <Hospital className="w-6 h-6" />, color: '#29BF12' },
    { id: 'education', label: 'Education', icon: <School className="w-6 h-6" />, color: '#E9470C' }
  ]

  const availableServices = [
    'Electrical Design',
    'HVAC Systems',
    'Plumbing Design',
    'Fire Protection',
    'Energy Analysis',
    'Project Management'
  ]

  const toggleService = (service: string) => {
    setConfig(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  // Calculate estimated values based on selection
  const getEstimates = () => {
    const baseTime = {
      small: 4,
      medium: 8,
      large: 16,
      enterprise: 24
    }

    const timeMultiplier = config.services.length * 0.5 + 1
    const leadTime = Math.ceil(baseTime[config.scale] * timeMultiplier)
    
    const teamSize = scales.find(s => s.id === config.scale)?.team || '2-3'

    return { leadTime, teamSize }
  }

  const estimates = getEstimates()

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-light-neutral to-light-neutral/50">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blueprint-line bg-light-neutral backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-sm font-mono text-dark-neutral">PROJECT CONFIGURATOR</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
            Configure Your
            <span className="text-cyan-accent"> Project</span>
          </h2>
          
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Interactive project planner to estimate timeline, team size, and service requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Project Scale Selector */}
            <div>
              <label className="text-sm font-mono uppercase text-neutral-gray mb-4 block tracking-wider">
                Project Scale
              </label>
              <div className="grid grid-cols-2 gap-3">
                {scales.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setConfig({ ...config, scale: scale.id as any })}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      config.scale === scale.id
                        ? 'border-primary-orange bg-primary-orange/10'
                        : 'border-blueprint-line hover:border-cyan-accent'
                    }`}
                  >
                    <div className="font-bold text-dark-neutral mb-1">{scale.label}</div>
                    <div className="text-xs text-neutral-gray">{scale.range}</div>
                    <div className="text-xs font-mono text-cyan-accent mt-1">Team: {scale.team}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Selector */}
            <div>
              <label className="text-sm font-mono uppercase text-neutral-gray mb-4 block tracking-wider">
                Industry Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setConfig({ ...config, industry: industry.id as any })}
                    className={`p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                      config.industry === industry.id
                        ? 'border-primary-orange bg-primary-orange/10'
                        : 'border-blueprint-line hover:border-cyan-accent'
                    }`}
                  >
                    <div style={{ color: industry.color }}>{industry.icon}</div>
                    <div className="font-semibold text-dark-neutral">{industry.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Selector */}
            <div>
              <label className="text-sm font-mono uppercase text-neutral-gray mb-4 block tracking-wider">
                Required Services
              </label>
              <div className="space-y-2">
                {availableServices.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      config.services.includes(service)
                        ? 'border-success-green bg-success-green/10'
                        : 'border-blueprint-line hover:border-cyan-accent'
                    }`}
                  >
                    <span className="font-medium text-dark-neutral">{service}</span>
                    {config.services.includes(service) && (
                      <Check className="w-5 h-5 text-success-green" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="premium-card rounded-2xl p-8 bg-gradient-to-br from-light-neutral to-light-neutral/50 backdrop-blur-sm">
              {/* Blueprint Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-blueprint-line">
                <h3 className="text-2xl font-bold text-dark-neutral">Project Estimate</h3>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center p-4 rounded-lg bg-dark-neutral/5">
                  <span className="font-mono text-sm text-neutral-gray">ESTIMATED LEAD TIME</span>
                  <span className="text-3xl font-bold text-primary-orange">{estimates.leadTime}w</span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-dark-neutral/5">
                  <span className="font-mono text-sm text-neutral-gray">TEAM SIZE</span>
                  <span className="text-3xl font-bold text-cyan-accent">{estimates.teamSize}</span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-dark-neutral/5">
                  <span className="font-mono text-sm text-neutral-gray">SERVICES SELECTED</span>
                  <span className="text-3xl font-bold text-success-green">{config.services.length}</span>
                </div>
              </div>

              {/* Selected Configuration Summary */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full bg-primary-orange rounded-full" />
                  <div>
                    <div className="text-xs font-mono text-neutral-gray mb-1">PROJECT SCALE</div>
                    <div className="font-bold text-dark-neutral capitalize">{config.scale}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1 h-full bg-cyan-accent rounded-full" />
                  <div>
                    <div className="text-xs font-mono text-neutral-gray mb-1">INDUSTRY</div>
                    <div className="font-bold text-dark-neutral capitalize">{config.industry}</div>
                  </div>
                </div>

                {config.services.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-success-green rounded-full" />
                    <div className="flex-1">
                      <div className="text-xs font-mono text-neutral-gray mb-2">SELECTED SERVICES</div>
                      <div className="flex flex-wrap gap-2">
                        {config.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-success-green/10 border border-success-green/30 rounded-full text-xs font-medium text-dark-neutral"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className="cta-glow w-full py-4 rounded-lg text-light-neutral font-semibold flex items-center justify-center gap-2 group">
                <span>Request Detailed Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Technical Note */}
              <p className="text-xs text-neutral-gray text-center mt-4 font-mono">
                * Estimates based on typical project parameters. Final timelines may vary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Technical Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M 0 200 L 1200 200 M 0 400 L 1200 400 M 0 600 L 1200 600"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-accent"
          strokeDasharray="10 10"
        />
      </svg>
    </section>
  )
}
