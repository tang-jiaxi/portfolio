"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PouringLiquidAnimation() {
  const liquidPathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (liquidPathRef.current) {
      startPouringAnimation(liquidPathRef.current)
    }
  }, [])

  // Function to start the pouring animation
  function startPouringAnimation(liquid: SVGPathElement) {
    gsap.to(liquid, {
      y: 50,                 // Move 50px down to simulate pouring
      duration: 2,           // Duration of each pour cycle
      ease: "power1.inOut",  // Smooth easing for more natural motion
      repeat: -1,            // Repeat infinitely
      yoyo: true             // Go back and forth for a continuous effect
    })
  }

  return (
    <div className="pouring-container z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 900">
        {/* Pouring Liquid Path */}
        <path
          ref={liquidPathRef}
          d="M100,50 C 110,60, 130,100, 130,150 L130,300"
          fill="#fbf4f5"
          strokeWidth="2"
          stroke="#DD5868"         
        />
      </svg>
    </div>
  )
}
