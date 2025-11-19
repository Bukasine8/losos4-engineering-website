"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Info, Wrench, Briefcase, BookOpen, Mail, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import Logo from "./Logo"

interface NavItem {
  name: string
  url: string
  icon: React.ReactNode
}

export default function HeaderFixed() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isMobile, setIsMobile] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Home', url: '/', icon: <Home size={18} strokeWidth={2.5} /> },
    { name: 'About', url: '/about', icon: <Info size={18} strokeWidth={2.5} /> },
    { name: 'Services', url: '/services', icon: <Wrench size={18} strokeWidth={2.5} /> },
    { name: 'Projects', url: '/projects', icon: <Briefcase size={18} strokeWidth={2.5} /> },
    { name: 'Blog', url: '/blog', icon: <BookOpen size={18} strokeWidth={2.5} /> },
    { name: 'Contact', url: '/contact', icon: <Mail size={18} strokeWidth={2.5} /> }
  ]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Update active tab based on current pathname so header highlights correctly across pages
  const pathname = usePathname()
  useEffect(() => {
    if (!pathname) return
    const match = navItems.find((n) => n.url === pathname || (n.url !== '/' && pathname.startsWith(n.url)))
    setActiveTab(match ? match.name : 'Home')
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <div className={cn('fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8')}>
        <div className={cn('flex items-center justify-center backdrop-blur-lg py-1 px-4 rounded-3xl shadow-lg',
          isHome ? 'header-home-tint border' : 'bg-background/5 border border-border')}
        >
          {/* Nav items - Centered */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.name

              // Render Services with a dropdown
              if (item.name === 'Services') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onClick={() => setServicesOpen((s) => !s)}
                      className={cn(
                        'relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors',
                        'text-foreground/80 hover:text-primary',
                        isActive && 'bg-muted text-primary'
                      )}
                    >
                      <span className="hidden md:inline">{item.name}</span>
                      <span className="md:hidden">{item.icon}</span>
                    </button>

                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={`absolute right-0 mt-2 w-56 bg-background-light dark:bg-background-dark border border-white/10 dark:border-black/10 rounded-lg shadow-lg transition-opacity ${servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                      <div className="flex flex-col p-3">
                        <Link href="/services/electrical-design" className="px-3 py-2 rounded hover:bg-primary/5">Electrical Engineering</Link>
                        <Link href="/services/mechanical-design" className="px-3 py-2 rounded hover:bg-primary/5">Mechanical Engineering</Link>
                        <Link href="/services/civil-engineering" className="px-3 py-2 rounded hover:bg-primary/5">Civil Engineering</Link>
                        <Link href="/services/project-management" className="px-3 py-2 rounded hover:bg-primary/5">Project Management</Link>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    'relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors',
                    'text-foreground/80 hover:text-primary',
                    isActive && 'bg-muted text-primary'
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">{item.icon}</span>

                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      style={{ backgroundColor: 'var(--glow-primary-lighter)' }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full" style={{ backgroundColor: 'var(--glow-primary)' }}>
                        <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2" style={{ backgroundColor: 'var(--glow-primary-light)' }} />
                        <div className="absolute w-8 h-6 rounded-full blur-md -top-1" style={{ backgroundColor: 'var(--glow-primary-light)' }} />
                        <div className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2" style={{ backgroundColor: 'var(--glow-primary-light)' }} />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile: hamburger menu */}
          <div className="md:hidden flex-1" />
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors',
                    activeTab === item.name
                      ? 'bg-muted text-primary'
                      : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}
