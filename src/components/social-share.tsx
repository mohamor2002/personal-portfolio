"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react"
import { toast } from "react-hot-toast"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

export function SocialShare({ 
  url = "https://portfolio-seven-tau-9m012btqo0.vercel.app/", 
  title = "Mohamed Amor - Full-Stack Developer Portfolio",
  description = "Check out Mohamed Amor's portfolio - Software Engineering student and Full-Stack Developer",
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = encodeURIComponent(url)
  const shareTitle = encodeURIComponent(title)
  const shareDescription = encodeURIComponent(description)

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
      color: "hover:bg-blue-500"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: "hover:bg-blue-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: "hover:bg-blue-700"
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success("Link copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy link")
    }
  }

  const handleSocialShare = (socialUrl: string) => {
    window.open(socialUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground flex items-center gap-1">
        <Share2 className="h-4 w-4" />
        Share:
      </span>
      
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="outline"
          size="sm"
          onClick={() => handleSocialShare(social.url)}
          className={`${social.color} hover:text-white transition-colors cursor-pointer`}
          title={`Share on ${social.name}`}
        >
          <social.icon className="h-4 w-4" />
        </Button>
      ))}
      
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
        title="Copy link"
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
