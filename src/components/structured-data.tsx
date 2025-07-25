"use client"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mohamedamor.dev/#person",
        "name": "Mohamed Amor",
        "givenName": "Mohamed",
        "familyName": "Amor",
        "jobTitle": "Full-Stack Developer",
        "description": "Software Engineering student and Full-Stack Developer specializing in scalable web applications with React, Next.js, and modern technologies",
        "url": "https://mohamedamor.dev",
        "image": "https://mohamedamor.dev/personal image.jpg",
        "sameAs": [
          "https://github.com/mohamor2002",
          "https://www.linkedin.com/in/mohamed-amor-124483234/"
        ],
        "alumniOf": {
          "@type": "Organization",
          "name": "École Supérieure d'Informatique (ESI)"
        },
        "knows": [
          {
            "@type": "SoftwareApplication",
            "name": "React"
          },
          {
            "@type": "SoftwareApplication", 
            "name": "Next.js"
          },
          {
            "@type": "SoftwareApplication",
            "name": "TypeScript"
          },
          {
            "@type": "SoftwareApplication",
            "name": "Node.js"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mohamedamor.dev/#website",
        "url": "https://mohamedamor.dev",
        "name": "Mohamed Amor - Portfolio",
        "description": "Portfolio website of Mohamed Amor, Full-Stack Developer and Software Engineering student",
        "publisher": {
          "@id": "https://mohamedamor.dev/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://mohamedamor.dev/#webpage",
        "url": "https://mohamedamor.dev",
        "name": "Mohamed Amor - Full-Stack Developer & Software Engineering Student",
        "isPartOf": {
          "@id": "https://mohamedamor.dev/#website"
        },
        "about": {
          "@id": "https://mohamedamor.dev/#person"
        },
        "description": "Software Engineering student and Full-Stack Developer specializing in scalable web applications with React, Next.js, and modern technologies. Explore my portfolio of innovative projects and technical expertise.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mohamedamor.dev"
            }
          ]
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
