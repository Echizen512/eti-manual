"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, HardDrive, MemoryStick, Fan, Zap, Keyboard, Mouse } from "lucide-react"

const components = [
  {
    icon: Cpu,
    title: "Procesador (CPU)",
    description: "El cerebro de la computadora que ejecuta todas las instrucciones",
    details:
      "Realiza cálculos y operaciones lógicas. Genera calor durante su funcionamiento, por lo que requiere refrigeración adecuada.",
    maintenance: "Limpieza de pasta térmica cada 12-18 meses",
    color: "text-blue-500",
    imageUrl: "/cpu.jpg",
  },
  {
    icon: MemoryStick,
    title: "Memoria RAM",
    description: "Almacenamiento temporal de datos para acceso rápido",
    details:
      "Permite el acceso rápido a datos que el procesador necesita. Más RAM significa mejor rendimiento multitarea.",
    maintenance: "Limpieza de contactos cada 6 meses",
    color: "text-green-600",
    imageUrl: "/RAM.jpg",
  },
  {
    icon: HardDrive,
    title: "Disco Duro / SSD",
    description: "Almacenamiento permanente de datos y programas",
    details: "Los HDD usan discos magnéticos, los SSD usan memoria flash. Los SSD son más rápidos y resistentes.",
    maintenance: "Desfragmentación mensual (HDD), verificación de salud",
    color: "text-cyan-600",
    imageUrl: "HDD.jpg",
  },
  {
    icon: Fan,
    title: "Sistema de Refrigeración",
    description: "Mantiene temperaturas óptimas de funcionamiento",
    details: "Incluye ventiladores, disipadores y pasta térmica. Previene el sobrecalentamiento de componentes.",
    maintenance: "Limpieza mensual, cambio de pasta térmica anual",
    color: "text-red-400",
    imageUrl: "ventilador.webp",
  },
  {
    icon: Zap,
    title: "Fuente de Poder",
    description: "Convierte corriente alterna en corriente continua",
    details: "Suministra energía estable a todos los componentes. Una fuente deficiente puede dañar el equipo.",
    maintenance: "Limpieza trimestral, verificación de voltajes",
    color: "text-yellow-500",
    imageUrl: "fuente.jpg",
  },
  {
    icon: Keyboard,
    title: "Placa Madre",
    description: "Conecta y comunica todos los componentes",
    details: "El circuito principal que interconecta CPU, RAM, almacenamiento y periféricos.",
    maintenance: "Limpieza semestral, verificación de conexiones",
    color: "text-purple-600",
    imageUrl: "mother.webp",
  },
  {
    icon: Mouse,
    title: "Periféricos",
    description: "Dispositivos de entrada y salida de datos",
    details: "Incluye teclado, mouse, monitor, impresoras y otros dispositivos externos.",
    maintenance: "Limpieza semanal, calibración según necesidad",
    color: "text-pink-500",
    imageUrl: "perisfericos.png",
  },
]

export function ComponentsSection() {
  return (
    <section id="componentes" className="py-2 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Componentes del PC</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce cada parte de tu computadora y su función específica para un mantenimiento efectivo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="h-full"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 pulse-glow">
                <CardHeader className="text-center pb-4">
                  <img
                    src={component.imageUrl}
                    alt={`Imagen de ${component.title}`}
                    className="mx-auto mb-4 rounded-md shadow-md object-fill h-32 w-full"
                  />
                  <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/50 w-fit">
                    <component.icon className={`h-8 w-8 ${component.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-balance">{component.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground text-pretty">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/80 leading-relaxed text-pretty">{component.details}</p>
                  <Badge variant="secondary" className="w-full justify-center text-xs">
                    {component.maintenance}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
