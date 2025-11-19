"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Activity, Zap, Thermometer, Droplets, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function DashboardPreviewSection() {
  const [activeTab, setActiveTab] = useState('overview')
  const [liveData, setLiveData] = useState({
    powerConsumption: 1247,
    temperature: 72,
    waterFlow: 850,
    systemEfficiency: 94
  })

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        powerConsumption: prev.powerConsumption + Math.floor(Math.random() * 20) - 10,
        temperature: Math.max(68, Math.min(76, prev.temperature + (Math.random() - 0.5) * 2)),
        waterFlow: prev.waterFlow + Math.floor(Math.random() * 40) - 20,
        systemEfficiency: Math.max(90, Math.min(98, prev.systemEfficiency + (Math.random() - 0.5) * 2))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: <Monitor className="w-4 h-4" /> },
    { id: 'electrical', label: 'Electrical', icon: <Zap className="w-4 h-4" /> },
    { id: 'mechanical', label: 'Mechanical', icon: <Thermometer className="w-4 h-4" /> },
    { id: 'plumbing', label: 'Plumbing', icon: <Droplets className="w-4 h-4" /> }
  ]

  const alerts = [
    { id: 1, type: 'warning', message: 'HVAC Zone 3 temperature variance detected', time: '2 min ago' },
    { id: 2, type: 'success', message: 'Electrical load balancing optimized', time: '5 min ago' },
    { id: 3, type: 'info', message: 'Scheduled maintenance reminder: Pump #2', time: '1 hour ago' }
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-dark-neutral/5 to-light-neutral">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blueprint-line bg-light-neutral backdrop-blur-sm mb-6">
            <Activity className="w-4 h-4 text-success-green animate-pulse" />
            <span className="text-sm font-mono text-dark-neutral">REAL-TIME MONITORING</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark-neutral mb-6">
            Project Management
            <span className="text-success-green"> Dashboard</span>
          </h2>
          
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Experience our advanced project monitoring system with real-time data visualization,
            predictive analytics, and comprehensive system oversight.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card rounded-3xl p-8 bg-gradient-to-br from-light-neutral to-light-neutral/80 backdrop-blur-sm border-2 border-blueprint-line"
        >
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-blueprint-line">
            <div>
              <h3 className="text-2xl font-bold text-dark-neutral mb-2">Metropolitan Office Complex</h3>
              <p className="text-neutral-gray">Live System Status • Last Updated: <span className="text-success-green">Now</span></p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="w-3 h-3 rounded-full bg-success-green animate-pulse" />
              <span className="text-sm font-medium text-dark-neutral">All Systems Operational</span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary-orange/10 to-primary-orange/5 border border-primary-orange/20"
            >
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-8 h-8 text-primary-orange" />
                <span className="text-xs font-mono text-primary-orange bg-primary-orange/10 px-2 py-1 rounded">kW</span>
              </div>
              <AnimatedCounter
                value={liveData.powerConsumption}
                className="text-2xl font-bold text-dark-neutral block"
                duration={1}
              />
              <p className="text-sm text-neutral-gray mt-1">Power Consumption</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-cyan-accent/10 to-cyan-accent/5 border border-cyan-accent/20"
            >
              <div className="flex items-center justify-between mb-4">
                <Thermometer className="w-8 h-8 text-cyan-accent" />
                <span className="text-xs font-mono text-cyan-accent bg-cyan-accent/10 px-2 py-1 rounded">°F</span>
              </div>
              <AnimatedCounter
                value={Math.round(liveData.temperature)}
                className="text-2xl font-bold text-dark-neutral block"
                duration={1}
              />
              <p className="text-sm text-neutral-gray mt-1">Avg Temperature</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-to-br from-success-green/10 to-success-green/5 border border-success-green/20"
            >
              <div className="flex items-center justify-between mb-4">
                <Droplets className="w-8 h-8 text-success-green" />
                <span className="text-xs font-mono text-success-green bg-success-green/10 px-2 py-1 rounded">GPM</span>
              </div>
              <AnimatedCounter
                value={liveData.waterFlow}
                className="text-2xl font-bold text-dark-neutral block"
                duration={1}
              />
              <p className="text-sm text-neutral-gray mt-1">Water Flow Rate</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-success-green/10 to-success-green/5 border border-success-green/20"
            >
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-success-green" />
                <span className="text-xs font-mono text-success-green bg-success-green/10 px-2 py-1 rounded">%</span>
              </div>
              <AnimatedCounter
                value={Math.round(liveData.systemEfficiency)}
                suffix="%"
                className="text-2xl font-bold text-dark-neutral block"
                duration={1}
              />
              <p className="text-sm text-neutral-gray mt-1">System Efficiency</p>
            </motion.div>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-medium ${
                  activeTab === tab.id
                    ? 'border-cyan-accent bg-cyan-accent/10 text-cyan-accent'
                    : 'border-blueprint-line text-dark-neutral hover:border-cyan-accent/50'
                }`}
              >
                {tab.icon}
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Chart Area */}
            <div className="lg:col-span-2">
              <div className="p-6 rounded-xl bg-dark-neutral/5 border border-blueprint-line">
                <h4 className="text-lg font-semibold text-dark-neutral mb-4">System Performance Trends</h4>
                
                {/* Simulated Chart */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-accent/5 to-primary-orange/5 rounded-lg overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    {/* Grid Lines */}
                    <defs>
                      <pattern id="chartGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blueprint-line" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#chartGrid)" />
                    
                    {/* Animated Chart Lines */}
                    <motion.path
                      d="M 0 150 Q 100 120, 200 130 T 400 110"
                      stroke="url(#chartGradient1)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 0 170 Q 100 140, 200 160 T 400 140"
                      stroke="url(#chartGradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.7 }}
                    />
                    
                    <defs>
                      <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#08BDBD" />
                        <stop offset="100%" stopColor="#E9470C" />
                      </linearGradient>
                      <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#29BF12" />
                        <stop offset="100%" stopColor="#08BDBD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Chart Legend */}
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-accent" />
                      <span className="text-xs text-dark-neutral">Power Usage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success-green" />
                      <span className="text-xs text-dark-neutral">Efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts & Status */}
            <div className="space-y-6">
              {/* System Alerts */}
              <div className="p-6 rounded-xl bg-dark-neutral/5 border border-blueprint-line">
                <h4 className="text-lg font-semibold text-dark-neutral mb-4">System Alerts</h4>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: alert.id * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-light-neutral border border-blueprint-line"
                    >
                      {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-primary-orange mt-0.5" />}
                      {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-success-green mt-0.5" />}
                      {alert.type === 'info' && <Clock className="w-5 h-5 text-cyan-accent mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm text-dark-neutral">{alert.message}</p>
                        <p className="text-xs text-neutral-gray mt-1">{alert.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-xl bg-dark-neutral/5 border border-blueprint-line">
                <h4 className="text-lg font-semibold text-dark-neutral mb-4">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full p-3 text-left rounded-lg border border-blueprint-line hover:border-cyan-accent hover:bg-cyan-accent/5 transition-all">
                    <span className="text-sm font-medium text-dark-neutral">Generate Report</span>
                  </button>
                  <button className="w-full p-3 text-left rounded-lg border border-blueprint-line hover:border-primary-orange hover:bg-primary-orange/5 transition-all">
                    <span className="text-sm font-medium text-dark-neutral">Schedule Maintenance</span>
                  </button>
                  <button className="w-full p-3 text-left rounded-lg border border-blueprint-line hover:border-success-green hover:bg-success-green/5 transition-all">
                    <span className="text-sm font-medium text-dark-neutral">Export Data</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: <Activity className="w-8 h-8" />,
              title: 'Real-Time Monitoring',
              description: 'Live data feeds from all building systems with instant alerts and notifications.'
            },
            {
              icon: <Monitor className="w-8 h-8" />,
              title: 'Predictive Analytics',
              description: 'AI-powered insights to predict maintenance needs and optimize system performance.'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Energy Optimization',
              description: 'Automated energy management to reduce costs and environmental impact.'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-light-neutral border border-blueprint-line">
              <div className="inline-flex p-4 rounded-xl bg-cyan-accent/10 text-cyan-accent mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-dark-neutral mb-3">{feature.title}</h4>
              <p className="text-neutral-gray">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
