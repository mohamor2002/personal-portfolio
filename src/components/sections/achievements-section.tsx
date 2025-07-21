import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Calendar } from "lucide-react"

interface Achievement {
  title: string
  event: string
  year: string
  description: string
  position: string
  icon: "trophy" | "award"
  category: string
}

const achievements: Achievement[] = [
  {
    title: "DevFest Algiers 2024",
    event: "Google Developer Festival",
    year: "2024",
    position: "1st Place",
    description: "Network optimizer using Docker + RL",
    icon: "trophy",
    category: "Hackathon"
  },
  {
    title: "CSE Coding Contest 2025",
    event: "Computer Science Engineering Contest",
    year: "2025",
    position: "Winner",
    description: "Solved 6 algorithmic challenges (Python, C++)",
    icon: "trophy",
    category: "Programming"
  },
  {
    title: "School of AI Datathon 2023",
    event: "Data Science Competition",
    year: "2023",
    position: "Winner",
    description: "Data science pipelines with ML & DL",
    icon: "trophy",
    category: "AI/ML"
  }
]

export function AchievementsSection() {
  const getIcon = (iconType: "trophy" | "award") => {
    return iconType === "trophy" ? (
      <Trophy className="h-8 w-8 text-yellow-500" />
    ) : (
      <Award className="h-8 w-8 text-blue-500" />
    )
  }

  const getPositionColor = (position: string) => {
    if (position.includes("1st") || position === "Winner") {
      return "bg-gradient-to-r from-yellow-500 to-yellow-600"
    }
    return "bg-gradient-to-r from-blue-500 to-blue-600"
  }

  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-yellow-500"
              >
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4">
                  {getIcon(achievement.icon)}
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Position Badge */}
                    <div className="inline-flex">
                      <Badge 
                        className={`${getPositionColor(achievement.position)} text-white font-bold px-3 py-1`}
                      >
                        🏆 {achievement.position}
                      </Badge>
                    </div>
                    
                    {/* Title and Event */}
                    <div>
                      <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-primary font-medium text-sm">{achievement.event}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {achievement.year}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{achievements.length}</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">First Places</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2024-25</div>
                <div className="text-sm text-muted-foreground">Active Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
