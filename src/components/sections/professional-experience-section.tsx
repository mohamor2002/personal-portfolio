import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location?: string
  type: string
  responsibilities: string[]
  highlights?: string[]
}

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "Khutwa @ All Intelligence Solutions",
    period: "2024–2025",
    type: "Professional",
    responsibilities: [
      "Built full-stack SaaS platform with RESTful API",
      "Developed responsive React/Next.js frontend",
      "Team lead for 4 developers/designers"
    ],
    highlights: ["Team Lead", "Production SaaS", "API Design"]
  },
  {
    title: "Project Leader",
    company: "ESI Cup Fantasy @ Sport & Entertainment Club",
    period: "2024–2025",
    type: "Professional",
    responsibilities: [
      "Microservice-based real-time fantasy football platform",
      "500+ active users",
      "WebSockets & Redis for live scoring"
    ],
    highlights: ["500+ Users", "Real-time", "Microservices"]
  },
  {
    title: "Technical Lead & System Architect",
    company: "Around Algeria Platform",
    period: "2024",
    type: "Academic Project",
    responsibilities: [
      "Designed complete system architecture",
      "Participated in RFP (Request for Proposal) process",
      "Created comprehensive technical documentation"
    ],
    highlights: ["System Design", "Architecture", "Documentation"]
  },
  {
    title: "Lead Developer",
    company: "Khatwa Crèche Engine",
    period: "2023",
    type: "Project",
    responsibilities: [
      "Google Maps API integration",
      "Built full-stack SaaS booking system",
      "User management & authentication"
    ],
    highlights: ["Maps API", "CRUD System", "Authentication"]
  }
]

export function ProfessionalExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-16 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                        
                        {exp.highlights && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t">
                            {exp.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
