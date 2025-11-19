// Type Definitions for the Application

export interface Project {
  id: string
  title: string
  description: string
  category: string
  image_url?: string
  created_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  image_url?: string
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  features?: string[]
  image_url?: string
  order: number
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface User {
  id: string
  email: string
  role: 'admin' | 'user'
}
