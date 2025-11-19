"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Building2, Zap, Settings, MapPin, Calendar, 
  ArrowRight, Filter, Search, Eye, ExternalLink,
  Award, Users, Clock, DollarSign
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface Project {
  id: string
  title: string
  category: 'Electrical' | 'Mechanical' | 'Civil' | 'Project Management'
  location: string
  year: number
  value: string
  duration: string
  client: string
  description: string
  summary: string
  image: string
  tags: string[]
  status: 'Completed' | 'In Progress' | 'Planning'
  featured: boolean
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'metropolitan-tower',
      title: 'Metropolitan Tower Complex',
      category: 'Electrical',
      location: 'New York, NY',
      year: 2024,
      value: '$4.2M',
      duration: '18 months',
      client: 'Metropolitan Development Corp',
      description: 'Complete electrical infrastructure design for a 45-story mixed-use tower including power distribution, lighting systems, fire safety, and building automation.',
      summary: 'Large-scale electrical design for luxury high-rise development with advanced smart building technology.',
      image: '/api/placeholder/600/400',
      tags: ['High-Rise', 'Smart Building', 'Power Distribution', 'Fire Safety'],
      status: 'Completed',
      featured: true
    },
    {
      id: 'tech-campus-hvac',
      title: 'Silicon Valley Tech Campus',
      category: 'Mechanical',
      location: 'San Jose, CA',
      year: 2024,
      value: '$6.8M',
      duration: '24 months',
      client: 'TechCorp Industries',
      description: 'Comprehensive HVAC design for 500,000 sq ft tech campus with data center cooling, energy recovery systems, and sustainable design features.',
      summary: 'Advanced mechanical systems for large-scale technology campus with focus on energy efficiency.',
      image: '/api/placeholder/600/400',
      tags: ['Data Center', 'Energy Recovery', 'Sustainable Design', 'Large Scale'],
      status: 'In Progress',
      featured: true
    },
    {
      id: 'hospital-expansion',
      title: 'Regional Medical Center Expansion',
      category: 'Electrical',
      location: 'Chicago, IL',
      year: 2023,
      value: '$3.5M',
      duration: '15 months',
      client: 'Regional Healthcare System',
      description: 'Critical electrical systems for hospital expansion including emergency power, surgical suite electrical, and medical equipment power.',
      summary: 'Mission-critical electrical infrastructure for healthcare facility expansion.',
      image: '/api/placeholder/600/400',
      tags: ['Healthcare', 'Emergency Power', 'Critical Systems', 'Medical'],
      status: 'Completed',
      featured: false
    },
    {
      id: 'bridge-infrastructure',
      title: 'Golden Gate Bridge Retrofit',
      category: 'Civil',
      location: 'San Francisco, CA',
      year: 2023,
      value: '$12.5M',
      duration: '36 months',
      client: 'California Department of Transportation',
      description: 'Seismic retrofit and structural upgrades to iconic suspension bridge including cable replacement and deck reinforcement.',
      summary: 'Major infrastructure upgrade for historic landmark bridge with seismic improvements.',
      image: '/api/placeholder/600/400',
      tags: ['Infrastructure', 'Seismic', 'Historic', 'Transportation'],
      status: 'Completed',
      featured: true
    },
    {
      id: 'manufacturing-plant',
      title: 'Automotive Manufacturing Plant',
      category: 'Mechanical',
      location: 'Detroit, MI',
      year: 2022,
      value: '$8.9M',
      duration: '30 months',
      client: 'AutoTech Manufacturing',
      description: 'Complete mechanical systems design for automotive assembly plant including process cooling, compressed air, and industrial ventilation.',
      summary: 'Industrial-scale mechanical systems for automotive manufacturing facility.',
      image: '/api/placeholder/600/400',
      tags: ['Industrial', 'Manufacturing', 'Process Systems', 'Automotive'],
      status: 'Completed',
      featured: false
    },
    {
      id: 'airport-terminal',
      title: 'International Airport Terminal',
      category: 'Project Management',
      location: 'Miami, FL',
      year: 2024,
      value: '$15.2M',
      duration: '42 months',
      client: 'Miami International Airport Authority',
      description: 'End-to-end project management for new international terminal including MEP coordination, scheduling, and stakeholder management.',
      summary: 'Large-scale project management for major airport infrastructure development.',
      image: '/api/placeholder/600/400',
      tags: ['Airport', 'Infrastructure', 'Coordination', 'Large Scale'],
      status: 'In Progress',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Building2 className="w-4 h-4" /> },
    { id: 'Electrical', label: 'Electrical', icon: <Zap className="w-4 h-4" /> },
    { id: 'Mechanical', label: 'Mechanical', icon: <Settings className="w-4 h-4" /> },
    { id: 'Civil', label: 'Civil', icon: <Building2 className="w-4 h-4" /> },
    { id: 'Project Management', label: 'Management', icon: <Users className="w-4 h-4" /> }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter(p => p.featured)

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
              <Award className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-mono text-dark-neutral">PROJECT PORTFOLIO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-neutral mb-8 leading-tight">
              Engineering
              <span className="text-primary-orange block">Excellence</span>
              <span className="text-cyan-accent">In Action</span>
            </h1>
            
            <p className="text-xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful engineering projects across multiple disciplines,
              showcasing innovation, precision, and technical excellence.
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: 150, suffix: '+', label: 'Projects Completed' },
              { value: 45, suffix: 'M', label: 'Total Project Value', prefix: '$' },
              { value: 98, suffix: '%', label: 'On-Time Delivery' },
              { value: 12, suffix: '', label: 'Industry Sectors' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-light-neutral/60 border border-blueprint-line backdrop-blur-sm">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold text-primary-orange font-mono block"
                  duration={2}
                />
                <p className="text-sm text-neutral-gray mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Featured
              <span className="text-cyan-accent"> Projects</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Highlighting our most innovative and impactful engineering solutions
              across various industries and project scales.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="premium-card rounded-3xl overflow-hidden bg-light-neutral border-2 border-blueprint-line hover:border-cyan-accent transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-dark-neutral/10 to-dark-neutral/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/60 to-transparent z-10" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' ? 'bg-success-green/20 text-success-green border border-success-green/30' :
                        project.status === 'In Progress' ? 'bg-primary-orange/20 text-primary-orange border border-primary-orange/30' :
                        'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm border border-light-neutral/30">
                        <Eye className="w-5 h-5 text-light-neutral" />
                      </div>
                    </div>

                    {/* Simulated Project Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 to-primary-orange/20" />
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-dark-neutral mb-2">{project.title}</h3>
                        <p className="text-neutral-gray">{project.summary}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-neutral-gray mb-1">VALUE</div>
                        <div className="text-lg font-bold text-primary-orange">{project.value}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6 text-sm text-neutral-gray">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-dark-neutral/5 border border-blueprint-line rounded-full text-xs text-dark-neutral"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-dark-neutral/5 border border-blueprint-line rounded-full text-xs text-neutral-gray">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-dark-neutral/5 to-light-neutral">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-8 text-center">
              All
              <span className="text-success-green"> Projects</span>
            </h2>

            {/* Filters and Search */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-medium ${
                      activeFilter === category.id
                        ? 'border-cyan-accent bg-cyan-accent/10 text-cyan-accent'
                        : 'border-blueprint-line text-dark-neutral hover:border-cyan-accent/50'
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm">{category.label}</span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="premium-card rounded-2xl overflow-hidden bg-light-neutral border border-blueprint-line hover:border-cyan-accent transition-all">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-neutral/10 to-dark-neutral/5">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/40 to-transparent z-10" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="px-2 py-1 rounded bg-light-neutral/90 text-xs font-semibold text-dark-neutral">
                          {project.category}
                        </span>
                      </div>

                      {/* Simulated Image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/15 to-primary-orange/15" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-dark-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm">
                          <ExternalLink className="w-6 h-6 text-light-neutral" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark-neutral mb-2 line-clamp-2">{project.title}</h3>
                      <p className="text-sm text-neutral-gray mb-4 line-clamp-2">{project.summary}</p>
                      
                      <div className="flex items-center justify-between text-xs text-neutral-gray mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-primary-orange">{project.value}</div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === 'Completed' ? 'bg-success-green/10 text-success-green' :
                          project.status === 'In Progress' ? 'bg-primary-orange/10 text-primary-orange' :
                          'bg-cyan-accent/10 text-cyan-accent'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-dark-neutral mb-2">No Projects Found</h3>
              <p className="text-neutral-gray">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-neutral/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-light-neutral rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-dark-neutral mb-2">{selectedProject.title}</h2>
                  <p className="text-neutral-gray">{selectedProject.category} • {selectedProject.location}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-dark-neutral/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-dark-neutral/5 rounded-lg">
                  <div className="text-xs font-mono text-neutral-gray mb-1">PROJECT VALUE</div>
                  <div className="text-xl font-bold text-primary-orange">{selectedProject.value}</div>
                </div>
                <div className="p-4 bg-dark-neutral/5 rounded-lg">
                  <div className="text-xs font-mono text-neutral-gray mb-1">DURATION</div>
                  <div className="text-xl font-bold text-dark-neutral">{selectedProject.duration}</div>
                </div>
                <div className="p-4 bg-dark-neutral/5 rounded-lg">
                  <div className="text-xs font-mono text-neutral-gray mb-1">CLIENT</div>
                  <div className="text-lg font-semibold text-dark-neutral">{selectedProject.client}</div>
                </div>
              </div>

              <p className="text-dark-neutral mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-accent/10 border border-cyan-accent/30 rounded-full text-sm text-cyan-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link href={`/projects/${selectedProject.id}`}>
                  <button className="cta-glow px-6 py-3 rounded-lg text-light-neutral font-semibold flex items-center gap-2">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="px-6 py-3 rounded-lg border-2 border-cyan-accent text-cyan-accent font-semibold hover:bg-cyan-accent/10 transition-all">
                  Contact About Similar Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <span className="text-primary-orange"> Next Project?</span>
            </h2>
            <p className="text-xl text-light-neutral/70 mb-12 leading-relaxed">
              Let's discuss how we can bring the same level of excellence and innovation
              to your engineering challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="cta-glow px-8 py-4 rounded-lg text-light-neutral font-semibold text-lg flex items-center justify-center gap-2 group">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/services">
                <button className="px-8 py-4 rounded-lg border-2 border-cyan-accent text-light-neutral font-semibold text-lg hover:bg-cyan-accent/10 transition-all">
                  View Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
