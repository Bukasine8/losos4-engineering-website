"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, 
  Building2, Users, Zap, CheckCircle,
  MessageSquare, Calendar, Globe
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Office Address',
      value: '123 Engineering Plaza, Suite 500\nMetropolis, CA 90210',
      color: '#E9470C'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone Number',
      value: '+1 (555) 123-4567\nMon-Fri, 8AM-6PM PST',
      color: '#08BDBD'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email Address',
      value: 'info@losos4.com\nprojects@losos4.com',
      color: '#29BF12'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Business Hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM',
      color: '#E9470C'
    }
  ]

  const projectTypes = [
    'Commercial Building MEP',
    'Industrial Facility Design',
    'Healthcare Infrastructure',
    'Educational Campus',
    'Data Center Engineering',
    'Residential Complex',
    'Other'
  ]

  const budgetRanges = [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M+',
    'To be determined'
  ]

  const timelines = [
    'ASAP (Rush)',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '1+ years',
    'Flexible'
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
              <MessageSquare className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-mono text-dark-neutral">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-neutral mb-8 leading-tight">
              Let's Build
              <span className="text-primary-orange block">Together</span>
            </h1>
            
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
              Ready to start your next engineering project? Our team of experts is here to help
              bring your vision to life with precision and innovation.
            </p>
          </motion.div>
        </div>

        {/* Technical Corner Elements */}
        <div className="absolute top-32 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-accent/30" />
        <div className="absolute top-32 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-accent/30" />
      </section>

      {/* Main Content */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-dark-neutral mb-6">
                    Contact
                    <span className="text-cyan-accent"> Information</span>
                  </h2>
                  <p className="text-neutral-gray leading-relaxed">
                    Multiple ways to reach our engineering team. We're here to discuss
                    your project requirements and provide expert consultation.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="premium-card rounded-xl p-6 bg-light-neutral border border-blueprint-line"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${info.color}15`, color: info.color }}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-neutral mb-2">{info.label}</h3>
                          <p className="text-sm text-neutral-gray whitespace-pre-line">{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="premium-card rounded-xl p-6 bg-gradient-to-br from-success-green/10 to-success-green/5 border border-success-green/20"
                >
                  <h3 className="font-bold text-dark-neutral mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success-green" />
                    Response Guarantee
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Initial Response:</span>
                      <span className="font-semibold text-dark-neutral">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Detailed Proposal:</span>
                      <span className="font-semibold text-dark-neutral">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Project Kickoff:</span>
                      <span className="font-semibold text-dark-neutral">Within 1 week</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="premium-card rounded-3xl p-8 bg-light-neutral/80 backdrop-blur-sm border-2 border-blueprint-line"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-dark-neutral mb-4">
                    Start Your
                    <span className="text-primary-orange"> Project</span>
                  </h2>
                  <p className="text-neutral-gray">
                    Fill out the form below and our engineering team will get back to you
                    with a comprehensive project assessment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                      >
                        <option value="">Select Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                      >
                        <option value="">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-neutral mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
                      >
                        <option value="">Select Timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-dark-neutral mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all resize-none"
                      placeholder="Tell us about your project requirements, scope, and any specific challenges you're facing..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
                      isSubmitted
                        ? 'bg-success-green text-light-neutral'
                        : isSubmitting
                        ? 'bg-neutral-gray text-light-neutral cursor-not-allowed'
                        : 'cta-glow text-light-neutral hover:shadow-lg'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-light-neutral/30 border-t-light-neutral rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-neutral-gray text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                    We'll never share your information with third parties.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="relative py-24 px-4 bg-dark-neutral">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
              Alternative
              <span className="text-primary-orange"> Contact Methods</span>
            </h2>
            <p className="text-lg text-light-neutral/70 max-w-2xl mx-auto">
              Choose the communication method that works best for your project needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Schedule a Consultation',
                description: 'Book a 30-minute consultation call with our engineering team to discuss your project requirements.',
                action: 'Book Meeting',
                color: '#E9470C'
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: 'Live Chat Support',
                description: 'Get instant answers to your questions through our live chat during business hours.',
                action: 'Start Chat',
                color: '#08BDBD'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Virtual Site Visit',
                description: 'Schedule a virtual site assessment using advanced remote surveying technology.',
                action: 'Schedule Visit',
                color: '#29BF12'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-light-neutral/10 border border-cyan-accent/30 backdrop-blur-sm"
              >
                <div
                  className="inline-flex p-4 rounded-xl mb-6"
                  style={{ backgroundColor: `${method.color}20`, color: method.color }}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-light-neutral mb-4">{method.title}</h3>
                <p className="text-light-neutral/70 mb-6 leading-relaxed">{method.description}</p>
                <button
                  className="px-6 py-3 rounded-lg border-2 text-light-neutral font-semibold hover:bg-light-neutral/10 transition-all"
                  style={{ borderColor: method.color, color: method.color }}
                >
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
