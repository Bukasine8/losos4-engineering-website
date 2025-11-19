"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CenteredLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex justify-center pt-24 pb-8"
    >
      <Link href="/" className="block">
        <Image
          src="/Logo.svg"
          alt="Losos4"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          priority
        />
      </Link>
    </motion.div>
  )
}
