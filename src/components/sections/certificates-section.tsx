"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import Link from "next/link"

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certificates</h2>
          <div className="grid gap-8 justify-center">
            <Card className="border-none shadow-2xl ring-2 ring-blue-400/30 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
              <CardHeader className="pb-0 flex flex-col items-center">
                <img src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freeCodeCamp Logo" className="h-16 w-16 rounded-full border-2 border-blue-400 bg-white mb-2" />
                <span className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">freeCodeCamp</span>
                <span className="text-xs text-muted-foreground mb-2">Credential ID: mohamor2002</span>
              </CardHeader>
              <CardContent className="pt-0 pb-8 flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">JavaScript Algorithms and Data Structures</h3>
                <span className="text-sm text-muted-foreground mb-4">Issued July 2025 · Online, Self-paced</span>
                <ul className="text-left text-sm md:text-base text-muted-foreground mb-6 max-w-lg mx-auto list-disc pl-5">
                  <li>400+ hours of hands-on coding and algorithm practice</li>
                  <li>Mastered ES6+, functional programming, recursion, and data structures</li>
                  <li>Built and debugged real-world JavaScript projects</li>
                  <li>Covered topics: Arrays, Objects, Functions, OOP, Algorithms, Regex, JSON, and more</li>
                  <li>Final exam and project submission required for certification</li>
                </ul>
                <Link
                  href="https://www.freecodecamp.org/certification/mohamor2002/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-base mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  View Certificate
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
