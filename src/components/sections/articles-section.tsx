"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building Scalable React Applications: Best Practices and Patterns",
    excerpt: "Explore proven architectural patterns and development practices for creating maintainable and scalable React applications that can grow with your business needs.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    slug: "#"
  },
  {
    title: "Full-Stack Development with Next.js: A Complete Guide",
    excerpt: "Learn how to leverage Next.js for full-stack development, from server-side rendering to API routes, and deployment strategies for modern web applications.",
    date: "2024-11-28",
    readTime: "12 min read",
    tags: ["Next.js", "Full-Stack", "Web Development"],
    slug: "#"
  },
  {
    title: "TypeScript in Modern React Development: Types That Matter",
    excerpt: "Discover how TypeScript can enhance your React development workflow with better type safety, improved developer experience, and maintainable codebases.",
    date: "2024-11-10",
    readTime: "6 min read",
    tags: ["TypeScript", "React", "Development"],
    slug: "#"
  },
  {
    title: "Database Design Principles for Web Applications",
    excerpt: "Understanding fundamental database design principles and how to implement them effectively in web applications for optimal performance and scalability.",
    date: "2024-10-22",
    readTime: "10 min read",
    tags: ["Database", "Design", "Performance"],
    slug: "#"
  }
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles & Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing my knowledge and experiences in web development, software engineering, and technology trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Article Title */}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    {/* Article Excerpt */}
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Read More Button */}
                    <div className="pt-2">
                      <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-primary hover:text-primary/80" asChild>
                        <Link href={article.slug}>
                          Read Article
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View All Articles Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
