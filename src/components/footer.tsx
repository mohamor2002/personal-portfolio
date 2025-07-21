"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mohamed Amor
              </h3>
              <p className="text-gray-300">
                Full-Stack Developer & Software Engineering Student crafting scalable solutions for real-world problems.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild className="hover:bg-gray-800">
                  <Link href="https://github.com/mohamor2002" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-gray-800">
                  <Link href="https://www.linkedin.com/in/mohamed-amor-124483234/" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-gray-800">
                  <Link href="mailto:lm_amor@esi.dz" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <Link href="mailto:lm_amor@esi.dz" className="hover:text-white transition-colors">
                    lm_amor@esi.dz
                  </Link>
                </p>
                <p>
                  <Link href="tel:+213551528256" className="hover:text-white transition-colors">
                    +213 551 528 256
                  </Link>
                </p>
                <p>Algiers, Algeria</p>
              </div>
              
              {/* Availability Status */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-400">Available for work</span>
                </div>
                <p className="text-sm text-gray-300">20 hours/week • Remote friendly</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Mohamed Amor. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                Built with Next.js & Tailwind CSS
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-gray-800"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
