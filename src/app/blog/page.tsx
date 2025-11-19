"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, Filter, Calendar, Clock, ArrowRight, 
  User, Tag, BookOpen, TrendingUp, Zap, 
  Settings, Building2, Users
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'
import SectionDivider from '@/components/ui/SectionDivider'

interface BlogPost {
  id: number
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
  featured: boolean
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'Mechanical Engineering',
      title: 'Innovations in MEP Design for Sustainable Buildings',
      excerpt: 'Discover how modern mechanical, electrical, and plumbing designs are paving the way for greener, more efficient structures. From advanced HVAC systems to smart water management, learn about the cutting-edge technologies transforming building performance.',
      author: 'Dr. Sarah Chen',
      date: '2024-11-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      tags: ['MEP Design', 'Sustainability', 'Green Building', 'HVAC'],
      featured: true
    },
    {
      id: 2,
      category: 'Electrical Engineering',
      title: 'The Future of Smart Grids and Electrical Infrastructure',
      excerpt: 'An in-depth look at how intelligent grid technology is revolutionizing power distribution and management for future cities. Explore the integration of renewable energy sources and advanced monitoring systems.',
      author: 'Michael Rodriguez',
      date: '2024-11-12',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      tags: ['Smart Grid', 'Power Systems', 'IoT', 'Renewable Energy'],
      featured: true
    },
    {
      id: 3,
      category: 'Project Management',
      title: 'Managing Complex Construction Projects with Agile Methodologies',
      excerpt: 'Learn how agile frameworks are being adapted to enhance flexibility and efficiency in large-scale construction initiatives. Discover best practices for team coordination and risk management.',
      author: 'Jennifer Park',
      date: '2024-11-10',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      tags: ['Agile', 'Project Management', 'Construction', 'Team Leadership'],
      featured: false
    },
    {
      id: 4,
      category: 'Civil Engineering',
      title: 'Key Principles in Modern Civil Engineering Projects',
      excerpt: 'Exploring the foundational elements that ensure stability, safety, and longevity in today\'s most ambitious construction projects. From materials science to structural analysis.',
      author: 'David Thompson',
      date: '2024-11-08',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      tags: ['Structural Design', 'Materials', 'Safety', 'Innovation'],
      featured: false
    },
    {
      id: 5,
      category: 'Mechanical Engineering',
      title: 'Advancements in Industrial Automation Systems',
      excerpt: 'A comprehensive review of the latest robotic and automated systems transforming the manufacturing and industrial sectors. Explore AI integration and predictive maintenance.',
      author: 'Dr. Amanda Foster',
      date: '2024-11-05',
      readTime: '9 min read',
      image: '/api/placeholder/600/400',
      tags: ['Automation', 'Robotics', 'AI', 'Manufacturing'],
      featured: false
    },
    {
      id: 6,
      category: 'Electrical Engineering',
      title: 'National Electrical Code Updates: What You Need to Know',
      excerpt: 'Stay compliant and ahead of the curve with our breakdown of the most critical changes in the latest electrical standards. Essential updates for electrical engineers and contractors.',
      author: 'Robert Kim',
      date: '2024-11-03',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['NEC', 'Compliance', 'Standards', 'Safety'],
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'Mechanical Engineering', label: 'Mechanical', icon: <Settings className="w-4 h-4" /> },
    { id: 'Electrical Engineering', label: 'Electrical', icon: <Zap className="w-4 h-4" /> },
    { id: 'Civil Engineering', label: 'Civil', icon: <Building2 className="w-4 h-4" /> },
    { id: 'Project Management', label: 'Management', icon: <Users className="w-4 h-4" /> }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

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
              <BookOpen className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-mono text-dark-neutral">ENGINEERING INSIGHTS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-neutral mb-8 leading-tight">
              Engineering
              <span className="text-primary-orange block">Knowledge</span>
              <span className="text-cyan-accent">Hub</span>
            </h1>
            
            <p className="text-xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, innovations, and best practices in mechanical, 
              electrical, and civil engineering through our expert insights and technical articles.
            </p>
          </motion.div>
        </div>

        {/* Technical Corner Elements */}
        <div className="absolute top-32 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-accent/30" />
        <div className="absolute top-32 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-accent/30" />
      </section>

      <SectionDivider type="wave" color="cyan" height="md" />

      {/* Featured Posts */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-light-neutral to-dark-neutral/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
              Featured
              <span className="text-primary-orange"> Articles</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our most popular and impactful engineering insights, handpicked by our editorial team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="premium-card rounded-3xl overflow-hidden bg-light-neutral border-2 border-blueprint-line hover:border-primary-orange transition-all duration-300">
                    {/* Featured Image */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-dark-neutral/10 to-dark-neutral/5 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/60 to-transparent z-10" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-primary-orange/20 text-primary-orange border border-primary-orange/30 text-xs font-semibold">
                          Featured
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-light-neutral/90 text-xs text-dark-neutral">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Simulated Image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-cyan-accent/20" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary-orange/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm">
                          <ArrowRight className="w-6 h-6 text-light-neutral" />
                        </div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-neutral-gray">
                        <span className="px-2 py-1 bg-dark-neutral/5 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-dark-neutral mb-4 line-clamp-2 group-hover:text-primary-orange transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-neutral-gray mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-cyan-accent/10 border border-cyan-accent/30 rounded text-xs text-cyan-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="circuit" color="success" height="lg" />

      {/* All Posts */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-8 text-center">
              All
              <span className="text-success-green"> Articles</span>
            </h2>

            {/* Filters and Search */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-medium ${
                      selectedCategory === category.id
                        ? 'border-success-green bg-success-green/10 text-success-green'
                        : 'border-blueprint-line text-dark-neutral hover:border-success-green/50'
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
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-blueprint-line bg-light-neutral/50 text-dark-neutral placeholder-neutral-gray focus:border-success-green focus:ring-2 focus:ring-success-green/20 transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="premium-card rounded-2xl overflow-hidden bg-light-neutral border border-blueprint-line hover:border-success-green transition-all">
                      {/* Article Image */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-neutral/10 to-dark-neutral/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/40 to-transparent z-10" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-20">
                          <span className="px-2 py-1 rounded bg-light-neutral/90 text-xs font-semibold text-dark-neutral">
                            {post.category.split(' ')[0]}
                          </span>
                        </div>

                        {/* Simulated Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-success-green/15 to-cyan-accent/15" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-dark-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <div className="p-3 rounded-full bg-light-neutral/20 backdrop-blur-sm">
                            <BookOpen className="w-5 h-5 text-light-neutral" />
                          </div>
                        </div>
                      </div>

                      {/* Article Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between text-xs text-neutral-gray mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-dark-neutral mb-3 line-clamp-2 group-hover:text-success-green transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-sm text-neutral-gray mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-gray">By {post.author}</span>
                          <div className="flex gap-1">
                            {post.tags.slice(0, 2).map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-dark-neutral/5 rounded text-xs text-dark-neutral"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-dark-neutral mb-2">No Articles Found</h3>
              <p className="text-neutral-gray">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider type="dots" color="primary" height="md" />

      {/* Newsletter CTA */}
      <section className="relative py-24 px-4 bg-dark-neutral">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-light-neutral mb-6">
              Stay Updated with
              <span className="text-primary-orange"> Engineering Insights</span>
            </h2>
            <p className="text-xl text-light-neutral/70 mb-12 leading-relaxed">
              Get the latest engineering articles, industry trends, and technical insights 
              delivered directly to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-cyan-accent/30 bg-light-neutral/10 text-light-neutral placeholder-light-neutral/50 focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all"
              />
              <button className="cta-glow px-6 py-3 rounded-lg text-light-neutral font-semibold flex items-center justify-center gap-2 group">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-xs text-light-neutral/50 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
