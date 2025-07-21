import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  detailedDescription: string
  stack: string[]
  role: "Team Lead" | "Full-Stack" | "Solo"
  category: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: "SciPaper",
    description: "NLP + Elasticsearch semantic search engine",
    detailedDescription: "Scientific paper search engine using natural language processing and Elasticsearch for semantic search capabilities.",
    stack: ["Python", "Elasticsearch", "NLP", "Flask", "React"],
    role: "Full-Stack",
    category: "Search Engine",
    liveUrl: "https://scipaper.onrender.com/",
    githubUrl: "https://github.com/mohamor2002/SciPaper",
    featured: true
  },
  {
    name: "FMN",
    description: "Full-Stack Web Application",
    detailedDescription: "Full-stack Movie library application built with React and Firebase, featuring user authentication and movie management.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-Stack",
    category: "Web App",
    liveUrl: "https://fmn.onrender.com/",
    githubUrl: "https://github.com/mohamor2002/fmn",
    featured: true
  },
  {
    name: "Cuby",
    description: "2D Unity game (solo project)",
    detailedDescription: "Engaging 2D platformer game developed in Unity with custom physics, level design, and interactive gameplay mechanics.",
    stack: ["Unity", "C#", "Game Design"],
    role: "Solo",
    category: "Game Dev",
    liveUrl: "https://drive.google.com/file/d/1OG0D8BSDKkXCMEAvClTU0hxDapa8bSl2/view?usp=drive_link",
    githubUrl: "https://github.com/mohamor2002/Cuby",
    featured: true
  },
  {
    name: "Wego",
    description: "SaaS Automation Platform",
    detailedDescription: "Comprehensive automation platform combining RPA capabilities with Odoo integration and Supabase backend for streamlined business processes.",
    stack: ["RPA", "Odoo", "Supabase", "React", "Node.js"],
    role: "Full-Stack",
    category: "SaaS",
  },
  {
    name: "Himma",
    description: "MERN app with integrated AI Chatbot",
    detailedDescription: "Full-stack web application built with MERN stack featuring an intelligent chatbot for enhanced user interaction and support.",
    stack: ["MongoDB", "Express", "React", "Node.js", "OpenAI"],
    role: "Full-Stack",
    category: "Web App",
  },
  {
    name: "Axio",
    description: "RL-based logistics optimizer",
    detailedDescription: "Reinforcement learning-based system for optimizing logistics operations and route planning with real-time adaptation.",
    stack: ["Python", "TensorFlow", "OpenAI Gym", "FastAPI"],
    role: "Solo",
    category: "AI/ML",
  }
]

export function KeyProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Projects</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  project.featured ? 'ring-2 ring-primary/20 shadow-md' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        {project.name}
                        {project.featured && (
                          <Badge variant="default" className="text-xs">Featured</Badge>
                        )}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm mb-2">{project.description}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {project.role}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.stack.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex gap-2 pt-2">
                        {project.liveUrl && (
                          <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              {project.name === "Cuby" ? "Download" : "Live Demo"}
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
