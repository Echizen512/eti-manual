"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Monitor, Wrench, ShieldCheck } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold gradient-text leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Manual Interactivo
          </motion.h1>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img src="/eti.jpg" alt="ETI Logo" className="h-24 w-24"/>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Mantenimiento Preventivo de los Equipos Informáticos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Laboratorio de Informática - ETI La Victoria, Estado Aragua
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Guía completa y profesional para el cuidado óptimo de equipos de cómputo
            </p>

            {/* Texto institucional con imagen pequeña */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/70 mt-2">
              <span>
                Elaborado por Estudiantes del PNF Informática de la Universidad Politécnica Territorial del Estado Aragua "Federico Brito Figueroa"
              </span>
              <img src="/upta.png" alt="Logo UPTA" className="h-6 w-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-red-400 hover:bg-red-500 text-primary-foreground px-8 py-4 text-lg tech-glow"
              onClick={() => scrollToSection("componentes")}
            >
              <Monitor className="mr-2 h-5 w-5" />
              Explorar Manual
            </Button>
            <Button
              size="lg"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 text-lg tech-glow"
              onClick={() => scrollToSection("limpieza")}
            >
              <Wrench className="mr-2 h-5 w-5" />
              Guía de Limpieza
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
