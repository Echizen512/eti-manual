"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Clock, Wrench } from "lucide-react"
import { useState } from "react"

const cleaningSteps = [
  {
    step: 1,
    title: "Preparación del Área de Trabajo",
    description: "Configura un espacio seguro y organizado",
    details: [
      "Desconecta completamente el equipo de la corriente eléctrica",
      "Prepara una superficie antiestática limpia y amplia",
      "Reúne herramientas: destornilladores, brocha suave, aire comprimido",
      "Usa pulsera antiestática para proteger componentes",
    ],
    warning: "Nunca trabajes con el equipo conectado a la corriente",
    time: "5-10 minutos",
  },
  {
    step: 2,
    title: "Apertura del Gabinete",
    description: "Accede al interior del CPU de forma segura",
    details: [
      "Retira los tornillos del panel lateral (generalmente el izquierdo)",
      "Desliza o retira completamente el panel lateral",
      "Toma fotografías del interior para recordar conexiones",
      "Identifica componentes principales antes de proceder",
    ],
    warning: "Maneja los paneles con cuidado para evitar cortes",
    time: "5 minutos",
  },
  {
    step: 3,
    title: "Limpieza de Ventiladores",
    description: "Elimina polvo acumulado en sistemas de refrigeración",
    details: [
      "Sostén las aspas del ventilador para evitar que giren",
      "Aplica aire comprimido en ráfagas cortas desde diferentes ángulos",
      "Usa brocha suave para polvo adherido en las aspas",
      "Limpia rejillas de entrada y salida de aire del gabinete",
    ],
    warning: "No permitas que los ventiladores giren libremente con aire comprimido",
    time: "15-20 minutos",
  },
  {
    step: 4,
    title: "Limpieza de Componentes",
    description: "Remueve polvo de tarjetas y conectores",
    details: [
      "Limpia slots de memoria RAM con aire comprimido",
      "Remueve polvo de tarjetas de expansión sin desconectarlas",
      "Limpia conectores SATA y de alimentación",
      "Aspira polvo suelto del fondo del gabinete",
    ],
    warning: "Evita tocar circuitos y contactos dorados directamente",
    time: "10-15 minutos",
  },
  {
    step: 5,
    title: "Cambio de Pasta Térmica",
    description: "Renueva la interfaz térmica del procesador",
    details: [
      "Retira el disipador del CPU con cuidado",
      "Limpia pasta térmica antigua con alcohol isopropílico",
      "Aplica nueva pasta térmica (grano de arroz en el centro)",
      "Reinstala el disipador aplicando presión uniforme",
    ],
    warning: "La pasta térmica es crucial para evitar sobrecalentamiento",
    time: "20-30 minutos",
  },
  {
    step: 6,
    title: "Verificación y Cierre",
    description: "Confirma que todo esté en orden antes del ensamble",
    details: [
      "Verifica que todas las conexiones estén firmes",
      "Confirma que no hay tornillos sueltos en el interior",
      "Reinstala el panel lateral y asegúralo con tornillos",
      "Conecta cables de alimentación y periféricos",
    ],
    warning: "Una conexión suelta puede causar fallas del sistema",
    time: "10 minutos",
  },
]

export function CleaningSection() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section id="limpieza" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Guía de Limpieza Paso a Paso</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proceso detallado para realizar mantenimiento preventivo completo del CPU
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de pasos */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Pasos del Proceso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {cleaningSteps.map((step, index) => (
                  <Button
                    key={step.step}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full justify-start text-left h-auto p-3 ${
                      currentStep === index
                        ? "bg-blue-800 text-white hover:bg-blue-900"
                        : "hover:bg-muted"
                    }`}
                    variant="ghost"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          currentStep === index
                            ? "bg-white text-blue-800"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="text-sm font-medium text-pretty">{step.title}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Detalle del paso actual */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 pulse-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">
                      Paso {cleaningSteps[currentStep].step}: {cleaningSteps[currentStep].title}
                    </CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {cleaningSteps[currentStep].time}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg">{cleaningSteps[currentStep].description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {cleaningSteps[currentStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-chart-4 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground/90 leading-relaxed text-pretty">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-destructive/10 border border-destructive/20 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">Advertencia Importante</h4>
                        <p className="text-sm text-foreground/80 text-pretty">{cleaningSteps[currentStep].warning}</p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                    >
                      Anterior
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(Math.min(cleaningSteps.length - 1, currentStep + 1))}
                      disabled={currentStep === cleaningSteps.length - 1}
                      className="bg-blue-800 hover:bg-primary/90"
                    >
                      Siguiente
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
