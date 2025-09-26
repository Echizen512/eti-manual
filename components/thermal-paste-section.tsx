"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Clock, AlertCircle, CheckCircle2 } from "lucide-react"

const thermalPasteInfo = {
  frequency: {
    title: "Frecuencia de Cambio",
    items: [
      { period: "Uso Normal", frequency: "12-18 meses", description: "Oficina, navegación web, documentos" },
      { period: "Uso Intensivo", frequency: "6-12 meses", description: "Gaming, renderizado, programación" },
      { period: "Ambiente Polvoriento", frequency: "6-9 meses", description: "Talleres, áreas industriales" },
      { period: "Overclocking", frequency: "3-6 meses", description: "Procesadores con overclock activo" },
    ],
  },
  signs: {
    title: "Señales de Cambio Necesario",
    items: [
      "Temperaturas del CPU superiores a 70°C en reposo",
      "Apagados inesperados por sobrecalentamiento",
      "Ventiladores funcionando a máxima velocidad constantemente",
      "Rendimiento reducido por throttling térmico",
      "Pasta térmica visiblemente seca o agrietada",
    ],
  },
  process: {
    title: "Proceso de Cambio",
    steps: [
      {
        step: "Preparación",
        description: "Apaga y desconecta el equipo completamente",
        time: "5 min",
      },
      {
        step: "Desmontaje",
        description: "Retira el disipador con cuidado y limpia superficies",
        time: "10 min",
      },
      {
        step: "Aplicación",
        description: "Aplica nueva pasta térmica en cantidad adecuada",
        time: "5 min",
      },
      {
        step: "Montaje",
        description: "Reinstala el disipador aplicando presión uniforme",
        time: "10 min",
      },
    ],
  },
}

export function ThermalPasteSection() {
  return (
    <section id="pasta-termica" className="py-2 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Cambio de Pasta Térmica</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantén temperaturas óptimas del procesador con el mantenimiento adecuado de la pasta térmica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Frecuencia de cambio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {thermalPasteInfo.frequency.title}
                </CardTitle>
                <CardDescription>Intervalos recomendados según el tipo de uso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {thermalPasteInfo.frequency.items.map((item, index) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.period}</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {item.frequency}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Señales de cambio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-destructive" />
                  {thermalPasteInfo.signs.title}
                </CardTitle>
                <CardDescription>Indicadores de que es momento de cambiar la pasta térmica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {thermalPasteInfo.signs.items.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed text-pretty">{sign}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Proceso de cambio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Proceso de Cambio de Pasta Térmica</CardTitle>
              <CardDescription className="text-center text-lg">Pasos esenciales para un cambio exitoso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {thermalPasteInfo.process.steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                      <p className="text-sm text-muted-foreground mb-3 text-pretty">{step.description}</p>
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-chart-4/10 border border-chart-4/20 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-chart-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-chart-4 mb-2">Consejo Profesional</h4>
                    <p className="text-foreground/90 leading-relaxed text-pretty">
                      Aplica la pasta térmica del tamaño de un grano de arroz en el centro del procesador. La presión
                      del disipador la distribuirá uniformemente. Demasiada pasta puede actuar como aislante y empeorar
                      las temperaturas.
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
