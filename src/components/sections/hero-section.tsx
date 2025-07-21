"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      <div className="container px-4 mx-auto text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/personal image.jpg"
                alt="Mohamed Amor"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Mohamed Amor
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Full-Stack Developer & Software Engineering Student
          </h2>
          
          {/* Brief Intro */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable full-stack solutions for real-world problems.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8" asChild>
              <Link href="/Amor Mohamed CV 07-2025.pdf" download="Mohamed_Amor_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://github.com/mohamor2002" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://www.linkedin.com/in/mohamed-amor-124483234/" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="mailto:lm_amor@esi.dz" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
