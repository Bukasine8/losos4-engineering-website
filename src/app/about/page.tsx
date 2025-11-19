"use client"

import { motion } from 'framer-motion'
import { 
  Award, Users, Target, Eye, Heart, Shield, 
  TrendingUp, Building2, Zap, Settings, 
  CheckCircle, Calendar, MapPin, Mail
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Principal Engineer & Founder',
      experience: '25+ Years',
      specialization: 'Electrical Systems Design',
      education: 'Ph.D. Electrical Engineering, MIT',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Mechanical Engineering',
      experience: '20+ Years',
      specialization: 'HVAC & Energy Systems',
      education: 'M.S. Mechanical Engineering, Stanford',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Jennifer Park',
      title: 'Director of Civil Engineering',
      experience: '18+ Years',
      specialization: 'Structural & Seismic Design',
      education: 'M.S. Civil Engineering, UC Berkeley',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Thompson',
      title: 'Head of Project Management',
      experience: '22+ Years',
      specialization: 'Large-Scale Project Delivery',
      education: 'MBA, PMP Certified',
      image: '/api/placeholder/300/300'
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Every calculation, every design decision, and every project milestone is executed with meticulous attention to detail.',
      color: '#E9470C'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe the best solutions emerge from diverse perspectives working together toward a common goal.',
      color: '#08BDBD'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of engineering excellence through cutting-edge technology and methodologies.',
      color: '#29BF12'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices, transparency, and delivering on our promises.',
      color: '#E9470C'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'LEED AP BD+C', description: 'Green Building Certification' },
    { name: 'Professional Engineer', description: 'Licensed in 12 States' },
    { name: 'PMP Certified', description: 'Project Management Professional' },
    { name: 'ASHRAE Member', description: 'HVAC&R Engineering Society' },
    { name: 'IEEE Member', description: 'Electrical & Electronics Engineers' }
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
              <Building2 className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-mono text-dark-neutral">ABOUT LOSOS4</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-neutral mb-8 leading-tight">
              Engineering
              <span className="text-primary-orange block">Excellence</span>
              <span className="text-cyan-accent">Since 2010</span>
            </h1>
            
            <p className="text-xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              We are a premier engineering consultancy specializing in large-scale MEP design,
              delivering innovative solutions that shape the infrastructure of tomorrow.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: 15, suffix: '+', label: 'Years of Excellence' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 50, suffix: '+', label: 'Expert Engineers' },
              { value: 12, suffix: '', label: 'States Licensed' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-light-neutral/60 border border-blueprint-line backdrop-blur-sm">
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
        </div>

        {/* Technical Corner Elements */}
        <div className="absolute top-32 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-accent/30" />
        <div className="absolute top-32 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-accent/30" />
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-card rounded-3xl p-8 bg-gradient-to-br from-primary-orange/10 to-primary-orange/5 border-2 border-primary-orange/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary-orange/20">
                    <Target className="w-8 h-8 text-primary-orange" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-dark-neutral">Our Mission</h2>
                    <p className="text-neutral-gray">Driving Engineering Innovation</p>
                  </div>
                </div>
                <p className="text-lg text-dark-neutral leading-relaxed">
                  To deliver exceptional MEP engineering solutions that exceed client expectations,
                  enhance communities, and set new standards for technical excellence and sustainability
                  in large-scale infrastructure projects.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-card rounded-3xl p-8 bg-gradient-to-br from-cyan-accent/10 to-cyan-accent/5 border-2 border-cyan-accent/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-cyan-accent/20">
                    <Eye className="w-8 h-8 text-cyan-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-dark-neutral">Our Vision</h2>
                    <p className="text-neutral-gray">Shaping Tomorrow's Infrastructure</p>
                  </div>
                </div>
                <p className="text-lg text-dark-neutral leading-relaxed">
                  To be the most trusted engineering partner for complex infrastructure projects,
                  recognized globally for our innovative approach, technical expertise, and
                  commitment to creating sustainable solutions for future generations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-dark-neutral/5 to-light-neutral">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Our Core
              <span className="text-success-green"> Values</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="premium-card rounded-2xl p-6 bg-light-neutral border border-blueprint-line h-full text-center">
                  <div
                    className="inline-flex p-4 rounded-xl mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${value.color}15`, color: value.color }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-neutral mb-3">{value.title}</h3>
                  <p className="text-neutral-gray leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Leadership
              <span className="text-cyan-accent"> Team</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Meet the experienced professionals leading our engineering excellence
              and driving innovation across all disciplines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="premium-card rounded-2xl p-6 bg-light-neutral border border-blueprint-line text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-accent/20 to-primary-orange/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-dark-neutral" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-success-green flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-light-neutral" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-dark-neutral mb-2">{member.name}</h3>
                  <p className="text-primary-orange font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-neutral-gray mb-3">{member.specialization}</p>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 mb-4">
                    <Calendar className="w-4 h-4 text-cyan-accent" />
                    <span className="text-xs font-mono text-cyan-accent">{member.experience}</span>
                  </div>

                  <p className="text-xs text-neutral-gray">{member.education}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="relative py-24 px-4 bg-dark-neutral">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
              Certifications &
              <span className="text-primary-orange"> Licenses</span>
            </h2>
            <p className="text-lg text-light-neutral/70 max-w-2xl mx-auto">
              Industry-leading certifications and professional licenses that validate
              our commitment to excellence and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-light-neutral/10 border border-cyan-accent/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary-orange/20">
                    <Award className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-light-neutral">{cert.name}</h3>
                    <p className="text-sm text-light-neutral/70">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-light-neutral to-light-neutral/80">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Ready to Work
              <span className="text-primary-orange"> Together?</span>
            </h2>
            <p className="text-xl text-neutral-gray mb-12 leading-relaxed">
              Let's discuss how our engineering expertise can bring your project vision to life.
              Contact us today to start your journey toward engineering excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cta-glow px-8 py-4 rounded-lg text-light-neutral font-semibold text-lg flex items-center justify-center gap-2 group">
                <Mail className="w-5 h-5" />
                <span>Contact Our Team</span>
              </button>
              
              <button className="px-8 py-4 rounded-lg border-2 border-cyan-accent text-dark-neutral font-semibold text-lg hover:bg-cyan-accent/10 transition-all flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Visit Our Office</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
