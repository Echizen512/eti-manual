"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Users, Award, MapPin } from "lucide-react"

const projectImages = [
  {
    id: 1,
    title: "Charla Educativa",
    description: "Charla sobre mantenimiento preventivo en aula",
    category: "Mantenimiento",
    imageUrl: "/Foto01.jpg",
  },
  {
    id: 2,
    title: "Charla Educativa",
    description: "Estudiantes participando activamente en la charla",
    category: "Mantenimiento",
    imageUrl: "/Foto02.jpg",
  },
  {
    id: 3,
    title: "Charla Educativa",
    description: "Presentación visual durante la charla educativa",
    category: "Mantenimiento",
    imageUrl: "/Foto04.jpg",
  },
  {
    id: 4,
    title: "Pancarta Informativa",
    description: "Pancarta del proyecto exhibida en la institución",
    category: "Mantenimiento",
    imageUrl: "/Foto03.jpg",
  },
  {
    id: 5,
    title: "Mouse",
    description: "Mantenimiento preventivo de periféricos",
    category: "Mantenimiento",
    imageUrl: "/Foto05.jpg",
  },
  {
    id: 6,
    title: "CPU",
    description: "Mantenimiento preventivo de CPU",
    category: "Mantenimiento",
    imageUrl: "/Foto06.jpg",
  },
]


const teamMembers = [
  {
    name: "Zaidelys Rondón",
    role: "Estudiante de Informática",
    description: "UPTA Aragua - PNF Informática",
    avatar: "/Zai.jpg",
  },
  {
    name: "Marielvis Sosa",
    role: "Estudiante de Informática",
    description: "UPTA Aragua - PNF Informática",
    avatar: "/Mari.jpg",
  },
  {
    name: "Dorianny Vergara",
    role: "Estudiante de Informática",
    description: "UPTA Aragua - PNF Informática",
    avatar: "/Doris.jpg",
  },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-2 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Galería del Proyecto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Documentación visual del proceso de mantenimiento y el equipo responsable del proyecto
          </p>
        </motion.div>

        {/* Galería de imágenes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 pulse-glow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Camera className="h-5 w-5 text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-balance">{image.title}</CardTitle>
                  <CardDescription className="text-pretty">{image.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* Integrantes del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Integrantes del Proyecto</h3>
            <p className="text-lg text-muted-foreground">
              Equipo responsable del desarrollo y documentación del manual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 pulse-glow">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
