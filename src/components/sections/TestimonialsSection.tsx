"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, Building2, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  industry: string
  content: string
  rating: number
  projectValue: string
  projectType: string
  avatar: string
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'VP of Operations',
      company: 'TechCorp Industries',
      industry: 'Technology',
      content: 'Losos4 delivered exceptional MEP design for our new data center. Their attention to detail and innovative solutions exceeded our expectations. The project was completed on time and within budget.',
      rating: 5,
      projectValue: '$2.5M',
      projectType: 'Data Center MEP',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      title: 'Facilities Director',
      company: 'Metropolitan Hospital',
      industry: 'Healthcare',
      content: 'The electrical systems design for our hospital expansion was flawless. Losos4 understood the critical nature of healthcare infrastructure and delivered a robust, reliable solution.',
      rating: 5,
      projectValue: '$4.2M',
      projectType: 'Hospital Electrical',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: '3',
      name: 'Jennifer Park',
      title: 'Project Manager',
      company: 'Urban Development LLC',
      industry: 'Real Estate',
      content: 'Working with Losos4 on our commercial complex was a game-changer. Their comprehensive approach to mechanical systems optimization resulted in 30% energy savings.',
      rating: 5,
      projectValue: '$1.8M',
      projectType: 'Commercial HVAC',
      avatar: '/api/placeholder/80/80'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-24 px-4 bg-dark-neutral overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1920 1080"
          fill="none"
        >
          <motion.path
            d="M 0 540 Q 480 400, 960 540 T 1920 540"
            stroke="url(#testimonialGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#08BDBD" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#E9470C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#29BF12" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-accent/30 bg-light-neutral/10 backdrop-blur-sm mb-6">
            <Quote className="w-4 h-4 text-cyan-accent" />
            <span className="text-sm font-mono text-light-neutral">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
            Trusted by Industry
            <span className="text-cyan-accent"> Leaders</span>
          </h2>
          
          <p className="text-lg text-light-neutral/70 max-w-2xl mx-auto">
            Hear from our clients about their experience working with our engineering team
            on complex, large-scale projects.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="premium-card rounded-3xl p-8 md:p-12 bg-light-neutral/10 backdrop-blur-sm border border-cyan-accent/20"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-primary-orange/20 flex items-center justify-center mb-8 mx-auto"
              >
                <Quote className="w-8 h-8 text-primary-orange" />
              </motion.div>

              {/* Testimonial Content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-light-neutral leading-relaxed text-center mb-8 font-medium"
              >
                "{currentTestimonial.content}"
              </motion.blockquote>

              {/* Rating Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-1 mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Star 
                      className={`w-6 h-6 ${
                        i < currentTestimonial.rating 
                          ? 'text-primary-orange fill-primary-orange' 
                          : 'text-light-neutral/30'
                      }`} 
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col md:flex-row items-center justify-between gap-6"
              >
                {/* Client Details */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-accent to-primary-orange p-0.5">
                    <div className="w-full h-full rounded-full bg-dark-neutral flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-cyan-accent" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-light-neutral">{currentTestimonial.name}</h4>
                    <p className="text-light-neutral/70">{currentTestimonial.title}</p>
                    <p className="text-cyan-accent font-semibold">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex gap-4 text-center">
                  <div className="px-4 py-2 rounded-lg bg-light-neutral/10 border border-cyan-accent/30">
                    <div className="text-lg font-bold text-primary-orange">{currentTestimonial.projectValue}</div>
                    <div className="text-xs text-light-neutral/70">Project Value</div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-light-neutral/10 border border-cyan-accent/30">
                    <div className="text-sm font-semibold text-light-neutral">{currentTestimonial.projectType}</div>
                    <div className="text-xs text-light-neutral/70">Project Type</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-light-neutral/10 border border-cyan-accent/30 text-light-neutral hover:bg-cyan-accent/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-orange scale-125'
                      : 'bg-light-neutral/30 hover:bg-light-neutral/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-light-neutral/10 border border-cyan-accent/30 text-light-neutral hover:bg-cyan-accent/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Auto-play Progress Bar */}
          {isAutoPlaying && (
            <div className="mt-6 max-w-md mx-auto">
              <div className="h-1 bg-light-neutral/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-accent to-primary-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Repeat Clients', value: '85%' },
            { label: 'On-Time Delivery', value: '100%' },
            { label: 'Industries Served', value: '12+' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-light-neutral/5 border border-cyan-accent/20">
              <div className="text-3xl font-bold text-primary-orange mb-2">{stat.value}</div>
              <div className="text-sm text-light-neutral/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
