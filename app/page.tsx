"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ComponentsSection } from "@/components/components-section"
import { CleaningSection } from "@/components/cleaning-section"
import { ThermalPasteSection } from "@/components/thermal-paste-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <ComponentsSection />
      <CleaningSection />
      <ThermalPasteSection />
      <RecommendationsSection />
      <GallerySection />

      <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            {/* Título con colores diferenciados */}
            <h3 className="text-2xl font-bold flex justify-center gap-1">
              <span className="text-muted-foreground">Mantenimiento Preventivo PC</span>
            </h3>

            {/* Descripción institucional */}
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elaborado por estudiantes del PNF Informática de la Universidad Politécnica Territorial del Estado Aragua
              "Federico Brito Figueroa".
            </p>

            {/* Línea inferior */}
            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 ETI La Victoria</span>
              <span>•</span>
              <span>Proyecto Educativo Institucional</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
