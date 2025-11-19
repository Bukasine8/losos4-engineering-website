"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Building2, Cpu } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const elements = containerRef.current.querySelectorAll('.parallax-item')
      elements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1)
        ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-16 px-4">
      
      {/* Animated Corner Brackets - Blueprint Style */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-accent opacity-40 animate-pulse" />
      <div className="absolute top-32 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-accent opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-accent opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-accent opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Technical Badge */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="tech-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono text-cyan-accent">
              <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
              <span>Engineering Excellence Since 2010</span>
            </div>
          </motion.div>

          {/* Main Heading with Technical Emphasis */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-dark-neutral">Engineering</span>
              <br />
              <span className="text-primary-orange">Large-Scale</span>
              <br />
              <span className="text-dark-neutral">Solutions</span>
            </h1>
            
            {/* Animated Underline */}
            <div className="flex justify-center">
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-cyan-accent to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Subtitle with Technical Specs */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive MEP design, project management, and electrical engineering
            for industrial and commercial projects. 
            <span className="text-cyan-accent font-semibold"> Precision at scale.</span>
          </motion.p>

          {/* Service Pills */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-neutral/5 border border-blueprint-line rounded-lg backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-medium text-dark-neutral">Electrical Systems</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-neutral/5 border border-blueprint-line rounded-lg backdrop-blur-sm">
              <Building2 className="w-4 h-4 text-cyan-accent" />
              <span className="text-sm font-medium text-dark-neutral">MEP Design</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-neutral/5 border border-blueprint-line rounded-lg backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-success-green" />
              <span className="text-sm font-medium text-dark-neutral">Project Management</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/contact">
              <button className="cta-glow group px-8 py-4 rounded-lg text-light-neutral font-semibold text-lg flex items-center justify-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/projects">
              <button className="px-8 py-4 rounded-lg border-2 border-cyan-accent text-dark-neutral font-semibold text-lg hover:bg-cyan-accent/10 transition-all">
                View Portfolio
              </button>
            </Link>
          </motion.div>

          {/* Technical Stats with Animated Counters */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto"
          >
            {[
              { value: 500, suffix: '+', label: 'Projects Completed', color: 'text-primary-orange' },
              { value: 15, suffix: 'yrs', label: 'Industry Experience', color: 'text-cyan-accent' },
              { value: 50, suffix: '+', label: 'Expert Engineers', color: 'text-success-green' },
              { value: 98, suffix: '%', label: 'Client Satisfaction', color: 'text-primary-orange' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-lg border border-blueprint-line backdrop-blur-sm bg-light-neutral/50">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className={`text-3xl md:text-4xl font-bold ${stat.color} font-mono block`}
                    duration={2.5}
                  />
                  <div className="text-sm text-neutral-gray mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Technical Elements */}
        <div className="parallax-item absolute top-1/4 left-10 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" className="animate-spin" style={{ animationDuration: '20s' }}>
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" fill="none" className="text-cyan-accent" />
            <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1" fill="none" className="text-cyan-accent" />
            <line x1="30" y1="2" x2="30" y2="58" stroke="currentColor" strokeWidth="1" className="text-cyan-accent" />
            <line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="1" className="text-cyan-accent" />
          </svg>
        </div>

        <div className="parallax-item absolute bottom-1/4 right-10 opacity-30">
          <svg width="80" height="80" viewBox="0 0 80 80" className="animate-pulse">
            <rect x="5" y="5" width="70" height="70" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary-orange" />
            <rect x="15" y="15" width="50" height="50" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary-orange" />
            <circle cx="40" cy="40" r="5" fill="currentColor" className="text-primary-orange" />
          </svg>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-gray">
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
