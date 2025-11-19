"use client"

import { motion } from 'framer-motion'

interface SectionDividerProps {
  type?: 'wave' | 'zigzag' | 'circuit' | 'gradient' | 'dots'
  color?: 'primary' | 'cyan' | 'success' | 'neutral'
  height?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function SectionDivider({ 
  type = 'wave', 
  color = 'cyan', 
  height = 'md',
  className = '' 
}: SectionDividerProps) {
  
  const colorMap = {
    primary: '#E9470C',
    cyan: '#08BDBD', 
    success: '#29BF12',
    neutral: '#000103'
  }

  const heightMap = {
    sm: '60px',
    md: '100px', 
    lg: '150px'
  }

  const selectedColor = colorMap[color]
  const selectedHeight = heightMap[height]

  const renderDivider = () => {
    switch (type) {
      case 'wave':
        return (
          <svg 
            className="w-full" 
            height={selectedHeight}
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 Q150,20 300,60 T600,60 Q750,100 900,60 T1200,60 V120 H0 Z"
              fill={`${selectedColor}15`}
              stroke={selectedColor}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,80 Q200,40 400,80 T800,80 Q1000,120 1200,80"
              fill="none"
              stroke={selectedColor}
              strokeWidth="1"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        )

      case 'zigzag':
        return (
          <svg 
            className="w-full" 
            height={selectedHeight}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 L100,20 L200,60 L300,20 L400,60 L500,20 L600,60 L700,20 L800,60 L900,20 L1000,60 L1100,20 L1200,60 V120 H0 Z"
              fill={`${selectedColor}10`}
              stroke={selectedColor}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        )

      case 'circuit':
        return (
          <div className="relative w-full" style={{ height: selectedHeight }}>
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              {/* Circuit board pattern */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                {/* Horizontal lines */}
                <line x1="0" y1="60" x2="1200" y2="60" stroke={selectedColor} strokeWidth="2" opacity="0.4" />
                <line x1="0" y1="40" x2="1200" y2="40" stroke={selectedColor} strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="80" x2="1200" y2="80" stroke={selectedColor} strokeWidth="1" opacity="0.3" />
                
                {/* Circuit nodes */}
                {[150, 300, 450, 600, 750, 900, 1050].map((x, i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy="60"
                    r="4"
                    fill={selectedColor}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  />
                ))}
                
                {/* Vertical connectors */}
                {[200, 400, 600, 800, 1000].map((x, i) => (
                  <motion.line
                    key={i}
                    x1={x}
                    y1="40"
                    x2={x}
                    y2="80"
                    stroke={selectedColor}
                    strokeWidth="1"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </motion.g>
            </svg>
          </div>
        )

      case 'gradient':
        return (
          <div 
            className="w-full relative"
            style={{ height: selectedHeight }}
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${selectedColor} 50%, transparent 100%)`
              }}
            />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(ellipse at center, ${selectedColor} 0%, transparent 70%)`
              }}
            />
          </div>
        )

      case 'dots':
        return (
          <div className="relative w-full flex items-center justify-center" style={{ height: selectedHeight }}>
            <div className="flex items-center gap-4">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  style={{ 
                    width: i === 3 ? '12px' : '8px',
                    height: i === 3 ? '12px' : '8px',
                    backgroundColor: selectedColor,
                    opacity: i === 3 ? 1 : 0.6
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: i === 3 ? 1 : 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                />
              ))}
            </div>
            
            {/* Side lines */}
            <motion.div
              className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent to-current"
              style={{ 
                width: '200px',
                color: selectedColor,
                opacity: 0.3
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent to-current"
              style={{ 
                width: '200px',
                color: selectedColor,
                opacity: 0.3
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {renderDivider()}
    </div>
  )
}
