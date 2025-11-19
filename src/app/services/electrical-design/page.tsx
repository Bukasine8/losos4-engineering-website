import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Zap, Lightbulb, Cpu, Battery, ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <main className="flex flex-col flex-1">
      <div className="relative w-full flex justify-center py-20 sm:py-32">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col gap-6 text-center items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Electrical Engineering</h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl">Power systems, lighting, automation and controls — designed for reliability and efficiency.</p>
          </div>
        </div>
      </div>

      <Separator className="max-w-7xl mx-auto" />

      <section className="w-full flex justify-center py-16 sm:py-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all hover:shadow-xl hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Power Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Design of medium & low voltage distribution and power quality studies.
                </p>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Advanced Lighting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Efficient lighting design for buildings and outdoor environments.
                </p>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Automation & Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Systems integration for building automation, controls and monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Battery className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Energy audits, efficiency measures and renewable integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-16 sm:py-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2">
            <CardHeader className="text-center space-y-6 p-8 sm:p-12">
              <div>
                <CardTitle className="text-3xl sm:text-4xl mb-4">
                  Ready to discuss your electrical needs?
                </CardTitle>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  Contact our specialists for a tailored proposal.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}
