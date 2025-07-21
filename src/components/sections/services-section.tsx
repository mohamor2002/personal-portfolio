import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Service {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
}

const services: Service[] = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development with modern technologies and scalable architecture.",
    features: ["React/Next.js Frontend", "Node.js/Django Backend", "Database Design", "API Development"],
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Mobile-First Design",
    description: "Responsive and mobile-optimized applications that work seamlessly across all devices.",
    features: ["Responsive Design", "Mobile Optimization", "Cross-browser Support", "Performance Focus"],
    icon: <Smartphone className="h-8 w-8" />,
    color: "bg-green-500"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: ["Cloud Architecture", "CI/CD Pipelines", "Docker Containers", "Performance Monitoring"],
    icon: <Cloud className="h-8 w-8" />,
    color: "bg-purple-500"
  },
  {
    title: "Real-time Systems",
    description: "High-performance real-time applications with WebSocket integration and live data processing.",
    features: ["WebSocket Integration", "Live Data Updates", "Real-time Analytics", "Performance Optimization"],
    icon: <Zap className="h-8 w-8" />,
    color: "bg-orange-500"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Services</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-4">
                I help startups and agencies build scalable, production-grade web applications with great UX.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Badge variant="default" className="px-4 py-2 text-sm font-semibold">
                  Available for part-time / freelance work
                </Badge>
                <p className="text-muted-foreground">
                  Let&apos;s build something impactful together.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 ${service.color} text-white rounded-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I&apos;m currently available for new projects and would love to help bring your ideas to life. 
                Whether you need a complete web application or want to improve an existing system, let&apos;s discuss how we can work together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href="#contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
              
              {/* Availability Info */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>20 hours/week capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Remote-friendly</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
