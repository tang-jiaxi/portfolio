"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"

export default function ResizeToastNotification() {
  const { toast } = useToast()
  const matterSVGIconRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasResized, setHasResized] = useState(false)
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (matterSVGIconRef.current) {
      observer.observe(matterSVGIconRef.current);
    }

    return () => {
      if (matterSVGIconRef.current) {
        observer.unobserve(matterSVGIconRef.current);
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      setHasResized(true)

      resizeTimerRef.current = setTimeout(() => {
        if (isVisible) {
          toast({
            title: "Window Resized",
            description: "Please refresh the page to ensure proper display of the SVG icon.",
            action: <ToastAction altText="Refresh">Refresh</ToastAction>,
          })
        }
      }, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current)
      }
    }
  }, [isVisible, toast])

  useEffect(() => {
    if (isVisible && hasResized) {
      toast({
        title: "SVG Icon Visible",
        description: "The SVG icon is now visible after resizing. Please refresh the page to ensure proper display.",
        action: <ToastAction altText="Refresh">Refresh</ToastAction>,
      })
    }
  }, [isVisible, hasResized, toast])

  return (
    <div>
      <div ref={matterSVGIconRef} className="w-64 h-64 bg-gray-200">
        <p>Matter SVG Icon</p>
      </div>
      <Toaster />
    </div>
  )
}