"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, Calendar, Clock, User, Tag, Share2, 
  BookOpen, ThumbsUp, MessageCircle, Bookmark,
  ArrowRight, ChevronRight
} from 'lucide-react'
import BlueprintBackground from '@/components/backgrounds/BlueprintBackground'
import SectionDivider from '@/components/ui/SectionDivider'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // Sample blog post data - in a real app, this would be fetched based on the slug
  const post = {
    id: 1,
    title: 'Innovations in MEP Design for Sustainable Buildings',
    subtitle: 'Discover how modern mechanical, electrical, and plumbing designs are paving the way for greener, more efficient structures',
    category: 'Mechanical Engineering',
    author: 'Dr. Sarah Chen',
    authorTitle: 'Senior MEP Engineer',
    date: '2024-11-15',
    readTime: '8 min read',
    image: '/api/placeholder/1200/600',
    tags: ['MEP Design', 'Sustainability', 'Green Building', 'HVAC', 'Energy Efficiency'],
    content: `
      <p>The construction industry is experiencing a revolutionary shift towards sustainability, and mechanical, electrical, and plumbing (MEP) systems are at the forefront of this transformation. As buildings become more complex and energy efficiency requirements more stringent, MEP engineers are developing innovative solutions that not only meet current standards but anticipate future needs.</p>

      <h2>The Evolution of MEP Design</h2>
      <p>Traditional MEP design focused primarily on functionality and code compliance. Today's approach integrates advanced technologies, environmental considerations, and long-term operational efficiency. This evolution is driven by several key factors:</p>

      <ul>
        <li><strong>Climate Change Awareness:</strong> Growing recognition of buildings' environmental impact</li>
        <li><strong>Energy Cost Concerns:</strong> Rising utility costs driving efficiency demands</li>
        <li><strong>Regulatory Changes:</strong> Stricter building codes and sustainability requirements</li>
        <li><strong>Technology Advancement:</strong> Smart systems and IoT integration possibilities</li>
      </ul>

      <h2>Key Innovation Areas</h2>

      <h3>1. Advanced HVAC Systems</h3>
      <p>Modern HVAC systems are becoming increasingly sophisticated, incorporating variable refrigerant flow (VRF) technology, geothermal heat pumps, and advanced air filtration systems. These innovations provide:</p>
      <ul>
        <li>30-50% energy savings compared to traditional systems</li>
        <li>Improved indoor air quality through advanced filtration</li>
        <li>Precise temperature and humidity control</li>
        <li>Reduced maintenance requirements</li>
      </ul>

      <h3>2. Smart Electrical Systems</h3>
      <p>The integration of smart electrical systems enables real-time monitoring and optimization of energy consumption. Key features include:</p>
      <ul>
        <li>Automated lighting controls with occupancy sensing</li>
        <li>Power quality monitoring and correction</li>
        <li>Integration with renewable energy sources</li>
        <li>Predictive maintenance capabilities</li>
      </ul>

      <h3>3. Water Management Innovation</h3>
      <p>Sustainable plumbing design now encompasses comprehensive water management strategies:</p>
      <ul>
        <li>Greywater recycling systems</li>
        <li>Rainwater harvesting and storage</li>
        <li>Low-flow fixtures and smart irrigation</li>
        <li>Real-time leak detection and prevention</li>
      </ul>

      <h2>Implementation Challenges and Solutions</h2>
      <p>While these innovations offer significant benefits, implementation presents unique challenges that MEP engineers must navigate:</p>

      <h3>Initial Cost Considerations</h3>
      <p>Advanced MEP systems often require higher upfront investment. However, lifecycle cost analysis consistently demonstrates positive ROI through:</p>
      <ul>
        <li>Reduced operational costs</li>
        <li>Lower maintenance requirements</li>
        <li>Increased building value</li>
        <li>Potential tax incentives and rebates</li>
      </ul>

      <h3>Integration Complexity</h3>
      <p>Modern buildings require seamless integration between multiple systems. Success depends on:</p>
      <ul>
        <li>Early collaboration between all engineering disciplines</li>
        <li>Comprehensive system modeling and simulation</li>
        <li>Standardized communication protocols</li>
        <li>Thorough commissioning and testing procedures</li>
      </ul>

      <h2>Future Trends and Opportunities</h2>
      <p>The MEP industry continues to evolve rapidly, with several emerging trends shaping the future:</p>

      <h3>Artificial Intelligence Integration</h3>
      <p>AI-powered systems are beginning to optimize building performance in real-time, learning from occupancy patterns and environmental conditions to maximize efficiency while maintaining comfort.</p>

      <h3>Modular and Prefabricated Systems</h3>
      <p>Off-site construction of MEP components is gaining traction, offering improved quality control, reduced installation time, and lower overall project costs.</p>

      <h3>Carbon Neutral Buildings</h3>
      <p>The push toward net-zero energy buildings is driving innovation in renewable energy integration, energy storage systems, and ultra-efficient building envelopes.</p>

      <h2>Conclusion</h2>
      <p>The future of MEP design lies in the intelligent integration of sustainable technologies with traditional engineering principles. As we continue to face environmental challenges and evolving building requirements, MEP engineers play a crucial role in creating structures that are not only functional and efficient but also environmentally responsible.</p>

      <p>Success in this evolving landscape requires continuous learning, collaboration across disciplines, and a commitment to innovation. The buildings we design today will serve communities for decades to come, making our responsibility to incorporate sustainable MEP solutions more important than ever.</p>
    `
  }

  const relatedPosts = [
    {
      id: 2,
      title: 'The Future of Smart Grids and Electrical Infrastructure',
      category: 'Electrical Engineering',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Managing Complex Construction Projects with Agile Methodologies',
      category: 'Project Management', 
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Key Principles in Modern Civil Engineering Projects',
      category: 'Civil Engineering',
      readTime: '7 min read'
    }
  ]

  return (
    <main className="relative bg-light-neutral min-h-screen">
      <BlueprintBackground />
      
      {/* Article Header */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-gray hover:text-primary-orange transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-orange/20 text-primary-orange border border-primary-orange/30 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-neutral-gray">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-neutral-gray mb-8 leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-cyan-accent flex items-center justify-center">
                  <User className="w-6 h-6 text-light-neutral" />
                </div>
                <div>
                  <div className="font-semibold text-dark-neutral">{post.author}</div>
                  <div className="text-sm text-neutral-gray">{post.authorTitle}</div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg border border-blueprint-line hover:border-primary-orange hover:bg-primary-orange/10 transition-all">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-blueprint-line hover:border-cyan-accent hover:bg-cyan-accent/10 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-blueprint-line hover:border-success-green hover:bg-success-green/10 transition-all">
                  <ThumbsUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-orange/20 to-cyan-accent/20 border border-blueprint-line"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/20 to-transparent" />
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-dark-neutral/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider type="dots" color="cyan" height="sm" />

      {/* Article Content */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="article-content text-dark-neutral leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-blueprint-line"
          >
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-5 h-5 text-neutral-gray" />
              <span className="font-semibold text-dark-neutral">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-cyan-accent/10 border border-cyan-accent/30 rounded-lg text-sm text-cyan-accent hover:bg-cyan-accent/20 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider type="wave" color="success" height="md" />

      {/* Related Posts */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-light-neutral to-dark-neutral/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-neutral mb-6">
              Related
              <span className="text-success-green"> Articles</span>
            </h2>
            <p className="text-lg text-neutral-gray">
              Continue exploring engineering insights and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="premium-card rounded-2xl overflow-hidden bg-light-neutral border border-blueprint-line hover:border-success-green transition-all">
                    {/* Placeholder Image */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-success-green/15 to-cyan-accent/15">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-neutral/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded bg-light-neutral/90 text-xs font-semibold text-dark-neutral">
                          {relatedPost.category.split(' ')[0]}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-dark-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 text-light-neutral" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark-neutral mb-3 line-clamp-2 group-hover:text-success-green transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-neutral-gray">
                        <span>{relatedPost.category}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/blog">
              <button className="cta-glow px-8 py-4 rounded-lg text-light-neutral font-semibold flex items-center gap-2 mx-auto">
                <span>View All Articles</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CSS for article content styling */}
      <style jsx>{`
        .article-content h2 {
          font-size: 2rem;
          font-weight: bold;
          color: var(--dark-neutral);
          margin: 2rem 0 1rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--cyan-accent);
        }
        
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark-neutral);
          margin: 1.5rem 0 0.75rem 0;
        }
        
        .article-content p {
          margin: 1rem 0;
          line-height: 1.7;
        }
        
        .article-content ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .article-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
        }
        
        .article-content strong {
          color: var(--primary-orange);
          font-weight: 600;
        }
      `}</style>
    </main>
  )
}
