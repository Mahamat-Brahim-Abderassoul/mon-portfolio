"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

interface CVDownloadButtonProps {
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function CVDownloadButton({ variant = "outline", className = "", children }: CVDownloadButtonProps) {
  const [downloadCount, setDownloadCount] = useState(0)

  const handleDownload = () => {
    // Incrémenter le compteur
    setDownloadCount((prev) => prev + 1)

    // Optionnel : envoyer à Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "download", {
        event_category: "CV",
        event_label: "PDF Download",
        value: 1,
      })
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        asChild
        className={`border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 ${className}`}
        onClick={handleDownload}
      >
        <a href="/CV-Ton-Nom.pdf" download="CV-Ton-Nom.pdf">
          <Download className="w-4 h-4 mr-2" />
          {children || "Télécharger CV"}
        </a>
      </Button>
    </motion.div>
  )
}
