import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiDocker,
  SiLinux,
  SiGooglecloud,
  SiDigitalocean,
  SiUnity,
} from "react-icons/si"
import { Code2, Coffee } from "lucide-react"

interface Skill {
  name: string
  icon?: React.ReactNode
  variant?: "default" | "secondary" | "outline"
}

const skillCategories: Record<string, Skill[]> = {
  "Languages": [
    { name: "Python", icon: <SiPython className="h-4 w-4" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
    { name: "Java", icon: <Coffee className="h-4 w-4" /> },
    { name: "C++", icon: <SiCplusplus className="h-4 w-4" /> },
    { name: "C#", icon: <Code2 className="h-4 w-4" /> },
    { name: "C", icon: <SiC className="h-4 w-4" /> },
  ],
  "Frontend": [
    { name: "React", icon: <SiReact className="h-4 w-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
    { name: "Responsive Design", variant: "outline" },
  ],
  "Backend": [
    { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4" /> },
    { name: "Express.js", icon: <SiExpress className="h-4 w-4" /> },
    { name: "Django", icon: <SiDjango className="h-4 w-4" /> },
    { name: "RESTful APIs", variant: "outline" },
    { name: "Microservices", variant: "outline" },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="h-4 w-4" /> },
    { name: "MySQL", icon: <SiMysql className="h-4 w-4" /> },
    { name: "Firebase", icon: <SiFirebase className="h-4 w-4" /> },
    { name: "Supabase", icon: <SiSupabase className="h-4 w-4" /> },
  ],
  "Cloud/DevOps": [
    { name: "Git", icon: <SiGit className="h-4 w-4" /> },
    { name: "Docker", icon: <SiDocker className="h-4 w-4" /> },
    { name: "Linux", icon: <SiLinux className="h-4 w-4" /> },
    { name: "CI/CD", variant: "outline" },
    { name: "GCP", icon: <SiGooglecloud className="h-4 w-4" /> },
    { name: "DigitalOcean", icon: <SiDigitalocean className="h-4 w-4" /> },
  ],
  "Other": [
    { name: "Unity", icon: <SiUnity className="h-4 w-4" /> },
    { name: "OpenAI Gym", variant: "outline" },
    { name: "Elasticsearch", variant: "outline" },
  ]
}

export function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <Card key={category} className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant={skill.variant || "secondary"}
                        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm min-w-0"
                      >
                        <span className="shrink-0">{skill.icon}</span>
                        <span className="truncate">{skill.name}</span>
                      </Badge>
                    ))}
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
