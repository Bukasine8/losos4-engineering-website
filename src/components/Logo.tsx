"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/Logo.svg"
        alt="Losos4"
        width={36}
        height={36}
        className="w-9 h-9 object-contain"
        priority
      />
      <span className="text-lg font-bold tracking-tight text-foreground">Losos4</span>
    </Link>
  )
}
