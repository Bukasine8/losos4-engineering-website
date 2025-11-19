"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Info, Wrench, Briefcase, Users, BookOpen, Mail } from 'lucide-react'
import { cn } from "@/lib/utils"
import Logo from "./Logo"

interface NavItem {
  name: string
  url: string
  icon: React.ReactNode
}

export default function Header() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isMobile, setIsMobile] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Home', url: '/', icon: <Home size={18} strokeWidth={2.5} /> },
    { name: 'About', url: '/about', icon: <Info size={18} strokeWidth={2.5} /> },
    { name: 'Services', url: '/services', icon: <Wrench size={18} strokeWidth={2.5} /> },
    { name: 'Projects', url: '/projects', icon: <Briefcase size={18} strokeWidth={2.5} /> },
    { name: 'Careers', url: '/careers', icon: <Users size={18} strokeWidth={2.5} /> },
    { name: 'Blog', url: '/blog', icon: <BookOpen size={18} strokeWidth={2.5} /> },
    { name: 'Contact', url: '/contact', icon: <Mail size={18} strokeWidth={2.5} /> }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50">
        <Logo />
      </div>

      <div className={cn('fixed top-16 left-1/2 -translate-x-1/2 z-50')}>
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-3xl shadow-lg glassmorphism-dark hover:shadow-2xl transition-all duration-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  'relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105',
                  'text-foreground/80 hover:text-primary',
                  isActive && 'bg-muted text-primary animate-scale-pulse'
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
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                      style={{ backgroundColor: 'var(--glow-primary)' }}
                    >
                      <div
                        className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                        style={{ backgroundColor: 'var(--glow-primary-light)' }}
                      />
                      <div
                        className="absolute w-8 h-6 rounded-full blur-md -top-1"
                        style={{ backgroundColor: 'var(--glow-primary-light)' }}
                      />
                      <div
                        className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                        style={{ backgroundColor: 'var(--glow-primary-light)' }}
                      />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

