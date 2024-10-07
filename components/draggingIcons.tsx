"use client"

import React, { useEffect, useRef, useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import WaveSVG from '@/components/WaveSVG'
import styles from '@/components/waves.module.css'
import PouringLiquid from '@/components/PouringLiquid' 

gsap.registerPlugin(Draggable, MotionPathPlugin)

export default function DraggingIcons() {
  const logoRefs = useRef<(HTMLDivElement | null)[]>([])
  const wavePathRef = useRef<SVGPathElement>(null)
  const waveContainerRef = useRef<HTMLDivElement>(null)
  const [logos, setLogos] = useState([{ id: 1, x: 0, y: 0 }])

  useEffect(() => {
    if (!wavePathRef.current || !waveContainerRef.current) return

    const wavePath = wavePathRef.current
    const waveContainer = waveContainerRef.current
    const waveRect = wavePath.getBoundingClientRect()
    const containerRect = waveContainer.getBoundingClientRect()

    logos.forEach((logo, index) => {
      const logoElement = logoRefs.current[index]
      if (!logoElement) return

      // Initial position
      gsap.set(logoElement, { x: waveRect.width, y: 0 })

      // Create draggable instance
      const draggable = Draggable.create(logoElement, {
        type: 'x,y',
        inertia: true,
        bounds: waveContainer,
        onDragStart: function() {
          gsap.to(this.target, { scale: 1.1, duration: 0.2 })
          // Stop the wave animation when dragging starts
          gsap.killTweensOf(this.target)
        },
        onDragEnd: function() {
          gsap.to(this.target, { scale: 1, duration: 0.2 })
          const logoRect = logoElement.getBoundingClientRect(); // Get the current position
          const absoluteXPosition = logoRect.left; 
          const absoluteYPosition = logoRect.top; 
          // Calculate the drop position relative to the wave
          const dropX = this.x / 2 - containerRect.left
          const dropRatio = dropX / waveRect.width
          
          // Animate the logo dropping to the wave
          gsap.to(this.target, {
            y: gsap.utils.mapRange(0, 1, waveRect.top - containerRect.top, waveRect.bottom - containerRect.bottom, dropRatio),
            duration: 0.5,
            ease: 'bounce.out',
            onComplete: () => startLogoMotion(this.target, dropRatio )
          })
        }
      })[0]

      // Start initial wave motion
      startLogoMotion(logoElement, 1)
    })

    function startLogoMotion(element: HTMLElement, startRatio: number) {
      gsap.to(element, {
        motionPath: {
          path: wavePath,
          align: wavePath,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: startRatio,
          end: 0,
        },
        duration: 20 * startRatio, // Adjust duration based on start position
        repeat: -1,
        repeatRefresh: true,
        ease: 'none',
      })
    }
  }, [logos])

  return (
    <div ref={waveContainerRef} className="relative w-full h-[320px] overflow-hidden">
      {logos.map((logo, index) => (
        <div
          key={logo.id}
          ref={(el) => { logoRefs.current[index] = el }}
          className="absolute cursor-grab active:cursor-grabbing"
        >
          <FaReact className="text-6xl text-cyan-400" />
        </div>
      ))}
      <WaveSVG ref={wavePathRef} className={styles.waves} />
      {/* Corrected quotation mark here */}
      <div className="w-full h-60">
        <PouringLiquid />
      </div>
    </div>
  )  
}