"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Monitor, Wrench, Thermometer, BookOpen, Camera } from "lucide-react"

const navItems = [
  { id: "componentes", label: "Componentes", icon: Monitor },
  { id: "limpieza", label: "Limpieza", icon: Wrench },
  { id: "pasta-termica", label: "Pasta Térmica", icon: Thermometer },
  { id: "recomendaciones", label: "Recomendaciones", icon: BookOpen },
  { id: "galeria", label: "Galería", icon: Camera },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/eti.jpg" alt="Logo ETI" className="h-8 w-auto rounded-sm" />
              <span className="text-xl font-bold flex gap-1">
                <span className="text-red-500">Manual</span>
                <span className="text-blue-800">Interactivo</span>
              </span>
            </motion.div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 ${activeSection === item.id ? "bg-blue-800 text-white hover:bg-blue-900" : ""
                    }`}
                  variant={activeSection === item.id ? "default" : "ghost"}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 right-0 bottom-0 w-64 bg-background/95 backdrop-blur-md border-l border-border/50 z-40 md:hidden"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start gap-3 ${activeSection === item.id ? "bg-blue-800 text-white hover:bg-blue-900" : ""
                    }`}
                  variant={activeSection === item.id ? "default" : "ghost"}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
