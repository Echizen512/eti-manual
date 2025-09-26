"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HardDrive, Smartphone, Shield, Zap, Thermometer, Clock } from "lucide-react"

const hardwareRecommendations = [
  {
    category: "Refrigeración",
    icon: Thermometer,
    color: "text-blue-800",
    items: [
      {
        title: "Limpieza de Ventiladores",
        frequency: "Mensual",
        description: "Remueve polvo acumulado para mantener flujo de aire óptimo",
        priority: "Alta",
      },
      {
        title: "Verificación de Temperaturas",
        frequency: "Semanal",
        description: "Monitorea temperaturas del CPU y GPU durante uso normal",
        priority: "Media",
      },
      {
        title: "Cambio de Pasta Térmica",
        frequency: "12-18 meses",
        description: "Renueva la interfaz térmica entre CPU y disipador",
        priority: "Alta",
      },
    ],
  },
  {
    category: "Almacenamiento",
    icon: HardDrive,
    color: "text-green-600",
    items: [
      {
        title: "Desfragmentación HDD",
        frequency: "Mensual",
        description: "Optimiza la organización de datos en discos duros mecánicos",
        priority: "Media",
      },
      {
        title: "Verificación de Salud SSD",
        frequency: "Trimestral",
        description: "Revisa el estado y vida útil de unidades de estado sólido",
        priority: "Alta",
      },
      {
        title: "Limpieza de Conectores",
        frequency: "Semestral",
        description: "Asegura conexiones SATA y de alimentación limpias",
        priority: "Media",
      },
    ],
  },
  {
    category: "Fuente de Poder",
    icon: Zap,
    color: "text-yellow-500",
    items: [
      {
        title: "Limpieza de Ventilador",
        frequency: "Trimestral",
        description: "Mantén el ventilador de la PSU libre de polvo",
        priority: "Alta",
      },
      {
        title: "Verificación de Cables",
        frequency: "Semestral",
        description: "Revisa integridad y conexiones de cables de alimentación",
        priority: "Media",
      },
      {
        title: "Prueba de Voltajes",
        frequency: "Anual",
        description: "Verifica que los voltajes estén dentro de especificaciones",
        priority: "Alta",
      },
    ],
  },
]

const softwareRecommendations = [
  {
    category: "Sistema Operativo",
    icon: Smartphone,
    color: "text-cyan-600",
    items: [
      {
        title: "Actualizaciones de Windows",
        frequency: "Automático",
        description: "Mantén el sistema actualizado con parches de seguridad",
        priority: "Alta",
      },
      {
        title: "Limpieza de Archivos Temporales",
        frequency: "Semanal",
        description: "Elimina archivos innecesarios para liberar espacio",
        priority: "Media",
      },
      {
        title: "Verificación de Integridad",
        frequency: "Mensual",
        description: "Ejecuta sfc /scannow para reparar archivos del sistema",
        priority: "Media",
      },
    ],
  },
  {
    category: "Seguridad",
    icon: Shield,
    color: "text-green-600",
    items: [
      {
        title: "Antivirus Actualizado",
        frequency: "Automático",
        description: "Mantén definiciones de virus siempre actualizadas",
        priority: "Alta",
      },
      {
        title: "Análisis Completo",
        frequency: "Semanal",
        description: "Ejecuta escaneos completos del sistema regularmente",
        priority: "Alta",
      },
      {
        title: "Firewall Configurado",
        frequency: "Verificación mensual",
        description: "Asegura que el firewall esté activo y configurado",
        priority: "Alta",
      },
    ],
  },
  {
    category: "Mantenimiento",
    icon: Clock,
    color: "text-purple-600",
    items: [
      {
        title: "Respaldo de Datos",
        frequency: "Semanal",
        description: "Crea copias de seguridad de archivos importantes",
        priority: "Alta",
      },
      {
        title: "Limpieza de Registro",
        frequency: "Mensual",
        description: "Usa herramientas confiables para limpiar el registro",
        priority: "Baja",
      },
      {
        title: "Optimización de Inicio",
        frequency: "Trimestral",
        description: "Revisa y optimiza programas que inician con Windows",
        priority: "Media",
      },
    ],
  },
]

export function RecommendationsSection() {
  return (
    <section id="recomendaciones" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Recomendaciones de Mantenimiento</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guías específicas para mantener tu equipo en condiciones óptimas tanto a nivel de hardware como software
          </p>
        </motion.div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="text-lg py-3">
              <HardDrive className="mr-2 h-5 w-5" />
              Hardware
            </TabsTrigger>
            <TabsTrigger value="software" className="text-lg py-3">
              <Smartphone className="mr-2 h-5 w-5" />
              Software
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware">
            <div className="grid lg:grid-cols-3 gap-8">
              {hardwareRecommendations.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                        {category.category}
                      </CardTitle>
                      <CardDescription>Mantenimiento específico para {category.category.toLowerCase()}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 rounded-lg bg-secondary/30 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <Badge
                              variant="default"
                              className={
                                item.priority === "Alta"
                                  ? "bg-red-400 text-white"
                                  : item.priority === "Media"
                                    ? "bg-yellow-500 text-white"
                                    : ""
                              }
                            >
                              {item.priority}
                            </Badge>

                          </div>
                          <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{item.frequency}</span>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software">
            <div className="grid lg:grid-cols-3 gap-8">
              {softwareRecommendations.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                        {category.category}
                      </CardTitle>
                      <CardDescription>Mantenimiento de {category.category.toLowerCase()}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 rounded-lg bg-secondary/30 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <Badge
                              variant={
                                item.priority === "Alta"
                                  ? "destructive"
                                  : item.priority === "Media"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {item.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{item.frequency}</span>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
