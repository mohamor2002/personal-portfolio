import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, BookOpen, Calendar } from "lucide-react"

interface Activity {
  title: string
  organization: string
  role: string
  description: string
  impact: string
  period?: string
  icon: "users" | "target" | "book"
  highlights: string[]
  isAlumni?: boolean
}

const activities: Activity[] = [
  {
    title: "Sport & Entertainment Club",
    organization: "ESI (Higher National School of Computer Science)",
    role: "Vice President",
    description: "Led organizational activities and event management for student engagement and campus life enhancement.",
    impact: "Organized 12+ events with 500+ total attendees",
    period: "2023-2025",
    icon: "target",
    highlights: ["12+ Events", "500+ Attendees", "Leadership", "Event Management"],
    isAlumni: true
  },
  {
    title: "GDG Algiers",
    organization: "Google Developer Groups",
    role: "Contributor",
    description: "Actively contributed to the developer community through workshops, knowledge sharing, and technical presentations.",
    impact: "Contributed in 5+ workshops on web development topics",
    period: "2023-present",
    icon: "book",
    highlights: ["5+ Workshops", "Web Development", "Community", "Knowledge Sharing"]
  }
]

export function LeadershipActivitiesSection() {
  const getIcon = (iconType: "users" | "target" | "book") => {
    const iconClass = "h-6 w-6 text-primary"
    switch (iconType) {
      case "target":
        return <Target className={iconClass} />
      case "book":
        return <BookOpen className={iconClass} />
      default:
        return <Users className={iconClass} />
    }
  }

  return (
    <section id="leadership" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership & Activities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      {getIcon(activity.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                      <p className="text-primary font-semibold text-sm mb-1">{activity.organization}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className="text-xs">
                          {activity.role}
                        </Badge>
                        {activity.isAlumni && (
                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                            Alumni
                          </Badge>
                        )}
                        {activity.period && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {activity.period}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {/* Impact Highlight */}
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-lg border-l-4 border-l-primary">
                      <p className="font-medium text-sm text-primary mb-1">Impact</p>
                      <p className="text-sm">{activity.impact}</p>
                    </div>
                    
                    {/* Highlights */}
                    <div>
                      <p className="text-sm font-medium mb-2">Key Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {activity.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Leadership Summary */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 border-none">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Leadership Philosophy</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I believe effective leadership starts with listening and learning from others. Through community involvement and collaborative projects, 
                  I&apos;ve discovered that the best outcomes emerge when diverse voices contribute to shared goals. 
                  My role is to facilitate connections, support team members&apos; growth, and help create inclusive spaces where everyone can contribute meaningfully.
                </p>
                <div className="flex justify-center gap-8 mt-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Collaborative Events</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
