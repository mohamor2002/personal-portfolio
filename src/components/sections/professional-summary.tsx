import { Card, CardContent } from "@/components/ui/card"

export function ProfessionalSummary() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Summary</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Fourth-year Software Engineering student with proven experience developing{" "}
                <span className="text-primary font-semibold">production-ready web applications</span> for real clients. 
                Passionate about scalable architecture, real-time systems, and AI integration. 
                Actively seeking <span className="text-primary font-semibold">part-time/freelance opportunities</span>.{" "}
                <span className="text-primary font-semibold">Available 20 hours/week</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
