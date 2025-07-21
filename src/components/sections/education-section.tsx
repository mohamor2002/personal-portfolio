import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl">
                    Higher National School of Computer Science (ESI Algiers)
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">
                    Master&apos;s & Engineering Degrees in Software Engineering
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expected July 2027</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Academic Milestone</h4>
                  <p className="text-muted-foreground">
                    Bachelor&apos;s Equivalent (completed 2025)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Courses</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Algorithms & Data Structures</li>
                    <li>• Operating Systems</li>
                    <li>• Web Development</li>
                    <li>• Distributed Systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3 text-primary">Academic Projects</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium">SciPaper Search Engine</p>
                    <p className="text-sm text-muted-foreground">NLP & Search Technology</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium">Desktop Task Planner</p>
                    <p className="text-sm text-muted-foreground">GUI Application</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium">Network & OS Labs</p>
                    <p className="text-sm text-muted-foreground">Systems Programming</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
