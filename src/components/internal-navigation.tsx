"use client"

import Link from "next/link"
import { ChevronRight, User, GraduationCap, Code, Briefcase, FolderOpen, Trophy, Users, Wrench, Mail } from "lucide-react"

const navigationItems = [
  { id: "hero", label: "About Me", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "technical-skills", label: "Skills", icon: Code },
  { id: "professional-experience", label: "Experience", icon: Briefcase },
  { id: "key-projects", label: "Projects", icon: FolderOpen },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "leadership-activities", label: "Leadership", icon: Users },
  { id: "services", label: "Services", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
]

export function InternalNavigation() {
  return (
    <nav className="bg-muted/50 rounded-lg p-6">
      <h3 className="font-semibold mb-4 text-foreground">Portfolio Navigation</h3>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link 
              href={`#${item.id}`}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group py-2 px-3 rounded-md hover:bg-muted"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              <ChevronRight className="h-3 w-3 ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-6 border-t border-muted-foreground/20">
        <p className="text-xs text-muted-foreground mb-3">Quick Actions:</p>
        <div className="flex flex-col gap-2">
          <Link 
            href="/Amor Mohamed CV 07-2025.pdf" 
            download="Mohamed_Amor_CV.pdf"
            className="text-sm text-primary hover:underline"
          >
            → Download My CV
          </Link>
          <Link 
            href="mailto:lm_amor@esi.dz"
            className="text-sm text-primary hover:underline"
          >
            → Send Me an Email
          </Link>
          <Link 
            href="https://github.com/mohamor2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            → View My GitHub
          </Link>
        </div>
      </div>
    </nav>
  )
}
