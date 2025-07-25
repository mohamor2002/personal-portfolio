"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const certificates = [
  {
    title: "JavaScript Algorithms & Data Structures",
    provider: "freeCodeCamp",
    abb: "FCC",
    date: "July 2025",
    type: "Certification",
    logo: null,
    url: "https://www.freecodecamp.org/certification/mohamor2002/javascript-algorithms-and-data-structures",
    color: "blue"
  },
  {
    title: "Introduction to GitHub Concepts",
    provider: "DataCamp",
    abb: "DC",
    date: "2022",
    type: "Course Completion",
    logo: null,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a9ffc97212f45f791493071462acc3115b576c60",
    color: "green"
  },
    {
        title: "Supervised Learning with scikit-learn",
        provider: "DataCamp",
        abb: "DC",
        date: "2023",
        type: "Course Completion",
        logo: null,
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0d0817a698d271a4d67b1e210e9dcb5160f49db7",
        color: "green"
    }
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certificates</h2>
          
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        cert.color === 'blue' 
                          ? 'bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' 
                          : 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800'
                      }`}>
                        {cert.logo ? (
                          <img src={cert.logo} alt={cert.provider} className="w-8 h-8" />
                        ) : (
                          <span className={`font-bold text-sm ${
                            cert.color === 'green' ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'
                          }`}>
                            {cert.abb || cert.provider.split(' ').map(word => word[0]).join('').toUpperCase()}
                          </span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{cert.provider}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          <span>•</span>
                          <span>{cert.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        Verified
                      </Badge>
                      <Button asChild variant="outline" size="sm">
                        <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Link>
                      </Button>
                    </div>
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