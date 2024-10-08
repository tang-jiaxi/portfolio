"use client"

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import 'matter-wrap';

const MatterSvgIcons = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const applyRandomDiagonalForce = (body: Matter.Body) => {
    // Randomize the force magnitude for both leftward (x) and upward (y) directions
    const randomFactorX = Math.random() * 0.0004 - 0.05; // Adds randomness to the leftward force
    const randomFactorY = Math.random() * 0.0003 - 0.05; // Adds randomness to the upward force
    
    const forceMagnitudeX = -0.0008 + randomFactorX; // Leftward force (negative x direction) with random variation
    const forceMagnitudeY = -0.0005 + randomFactorY; // Upward force (negative y direction) with random variation
    
    Matter.Body.applyForce(body, { x: body.position.x, y: body.position.y }, { x: forceMagnitudeX, y: forceMagnitudeY });
  };
  useEffect(() => {
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite,
          Bodies = Matter.Bodies;

    Matter.use('matter-wrap');

    // Create engine
    engineRef.current = Engine.create();
    const world = engineRef.current.world;
    world.gravity.y = 1;
    
    // Create renderer
    const viewportWidth = document.documentElement.clientWidth;
    renderRef.current = Render.create({
      element: sceneRef.current ?? undefined,
      engine: engineRef.current,
      options: {
        width: viewportWidth,
        height: 700,
        background: '#ff',
        wireframes: false,
      },
    });

    // Create animated wave-like ground
    const groundVertices: Matter.Vector[] = [];
    const numVertices = 120;
    const startX = -100;
    const endX = viewportWidth + 100;
    const spacing = (endX - startX) / (numVertices - 1);
    const baseY = 600;
    const waveHeight = 15;
    const waveFrequency = 0.1;

    for (let i = 0; i < numVertices; i++) {
      const x = startX + i * spacing;
      groundVertices.push({ x, y: baseY });
    }

    groundVertices.push({ x: endX, y: 800 });
    groundVertices.push({ x: startX, y: 800 });

    const ground = Bodies.fromVertices(viewportWidth / 2, 700, [groundVertices], {
      isStatic: true,
      render: {
        fillStyle: '#FBF4F5',
        strokeStyle: '#DD5868',
        lineWidth: 3,
      },
    });
    
    // Create VS Code icon
    const vsCodeSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="#007ACC" d="M95 25.1L75.7 10.3 31.6 48.4 15.1 35.5 5 41.7v37.8l10.1 6.2 16.5-12.9 44.1 38.1L95 96.1V25.1zM75.7 76.4L31.6 38.3l44.1-34v72.1z"/>
      </svg>
    `;
    const vsCodeIcon = Bodies.rectangle(400, 100, 60, 60, {
      restitution: 0,
      friction: 1,
      frictionAir: 0.06,      
      render: {
        sprite: {
          texture: `data:image/svg+xml;utf8,${encodeURIComponent(vsCodeSvg)}`,
          xScale: 0.6,
          yScale: 0.6
        }
      }
    });

    // Create Adobe Illustrator icon
    const illustratorSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect fill="#330000" width="100" height="100"/>
        <path fill="#FF9A00" d="M38.7 54.1l-3.6 13.6h-7.2L40.2 29h8.4l12.5 38.7h-7.4L50 54.1H38.7zm10.1-5.4l-3.4-13c-0.8-3-1.6-6.5-2.3-9.5h-0.1c-0.6 3-1.4 6.5-2.1 9.5l-3.3 13H48.8z"/>
        <path fill="#FF9A00" d="M62.3 45.5c0-3.6-0.1-6.6-0.2-9.3h6.2l0.3 5.4h0.1c1.4-3.1 4.8-6.1 9.6-6.1 6.3 0 11.1 5.4 11.1 13.4 0 9.5-5.7 14.2-11.9 14.2 -4.5 0-7.5-2.5-8.8-5.2h-0.1v18h-6.3V45.5zM68.6 53.7c0 0.8 0.1 1.5 0.2 2.1 0.9 3.4 3.6 5.7 6.9 5.7 4.9 0 7.7-4 7.7-9.8 0-5.1-2.7-9.4-7.5-9.4 -3.1 0-6 2.2-6.9 5.6 -0.2 0.6-0.3 1.4-0.3 2.1V53.7z"/>
      </svg>
    `;
    const illustratorIcon = Bodies.rectangle(600, 50, 60, 60, {
      restitution: 0,
      friction: 1,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: `data:image/svg+xml;utf8,${encodeURIComponent(illustratorSvg)}`,
          xScale: 0.6,
          yScale: 0.6
        },
      }
    });
    
    illustratorIcon.plugin = {
      wrap: {
        min: { x: 0, y: -Infinity },
        max: { x: viewportWidth, y: Infinity }
      }
    };
        
    // Add mouse control
    const mouse = Mouse.create(renderRef.current.canvas);
    const mouseConstraint = MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    
    // Add all bodies to the world
    Composite.add(world, [vsCodeIcon, illustratorIcon, mouseConstraint, ground]);
    renderRef.current.mouse = mouse;

    // Animate the wave
    let time = 0;
    Matter.Events.on(engineRef.current, 'beforeUpdate', () => {
      time += 0.05;
      for (let i = 0; i < numVertices; i++) {
        const x = startX + i * spacing;
        const y = baseY + Math.sin(time + i * waveFrequency) * waveHeight;
        groundVertices[i].y = y;
      }
      Matter.Body.setVertices(ground, groundVertices);
    });

    let frameCount = 0;
    Matter.Events.on(engineRef.current, 'beforeUpdate', () => {
      frameCount++;
      if (frameCount % 60 === 0) { // Apply force every 60 frames (~1 second at 60 FPS)
        applyLeftwardForce(illustratorIcon);
      }
    });

    // Run the engine
    runnerRef.current = Runner.create();
    Runner.run(runnerRef.current, engineRef.current);
    Render.run(renderRef.current);
  
    // Cleanup function
    return () => {
      if (renderRef.current) Render.stop(renderRef.current);
      if (runnerRef.current) Runner.stop(runnerRef.current);
      if (engineRef.current) {
        Composite.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default MatterSvgIcons;

function applyLeftwardForce(illustratorIcon: Matter.Body) {
  throw new Error('Function not implemented.');
}
