"use client"

import React, { useEffect, useRef } from 'react';
import Matter, { Body } from 'matter-js';
import 'matter-wrap';

const MatterSvgIcons = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

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
    // engineRef.current.gravity.y = 10;

    //Get viewport size
    const getViewportDimensions = () => ({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
    let { width: viewportWidth, height: viewportHeight } = getViewportDimensions();
    
    // Create renderer
    renderRef.current = Render.create({
      element: sceneRef.current ?? undefined,
      engine: engineRef.current,
      options: {
        width: viewportWidth,
        height: viewportHeight,
        background: '#ff',
        wireframes: false,
      },
    });

    // Create animated wave-like ground
    const groundVertices: Matter.Vector[] = [];
    const numVertices = 120;
    const startX = -50;
    const endX = viewportWidth + 50;
    const spacing = (endX - startX) / (numVertices - 1);
    const baseY = viewportHeight * 0.6;
    const waveHeight = 15;
    const waveFrequency = 0.1;

    const createGround = () => {
      for (let i = 0; i < numVertices; i++) {
        const x = startX + i * spacing;
        groundVertices.push({ x, y: baseY });
      }

      groundVertices.push({ x: endX, y: viewportHeight  });
      groundVertices.push({ x: startX, y: viewportHeight  });

      return Bodies.fromVertices(viewportWidth / 2, viewportHeight * 0.9, [groundVertices], {
        isStatic: true,
        render: {
          fillStyle: '#FBF4F5',
          strokeStyle: '#DD5868',
          lineWidth: 3,
        },
      });
    };
    let ground = createGround();
    
    //Create logos
    const logosArray: Matter.Body[] = [];
    const createIcon = (svg: string, y: number) => {
      const randomX = Math.random() * (0 - viewportWidth) + viewportWidth;
      const icon = Bodies.rectangle(randomX, y, 60, 60, {
        restitution: 0,
        friction: 0,
        frictionAir: 0.1,
        density: 0.001,
        render: {
          sprite: {
            texture: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
            xScale: 0.6,
            yScale: 0.6
          }
        },
        plugin: {
          wrap: {
            min: { x: 0, y: -Infinity },
            max: { x: viewportWidth, y: Infinity }
          }
        }
      });
      logosArray.push(icon);   
      return icon;
    };

    const vsCodeSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="#007ACC" d="M95 25.1L75.7 10.3 31.6 48.4 15.1 35.5 5 41.7v37.8l10.1 6.2 16.5-12.9 44.1 38.1L95 96.1V25.1zM75.7 76.4L31.6 38.3l44.1-34v72.1z"/>
      </svg>
    `;
    const vsCodeIcon = createIcon(vsCodeSvg, 550);

    const illustratorSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect fill="#330000" width="100" height="100"/>
        <path fill="#FF9A00" d="M38.7 54.1l-3.6 13.6h-7.2L40.2 29h8.4l12.5 38.7h-7.4L50 54.1H38.7zm10.1-5.4l-3.4-13c-0.8-3-1.6-6.5-2.3-9.5h-0.1c-0.6 3-1.4 6.5-2.1 9.5l-3.3 13H48.8z"/>
        <path fill="#FF9A00" d="M62.3 45.5c0-3.6-0.1-6.6-0.2-9.3h6.2l0.3 5.4h0.1c1.4-3.1 4.8-6.1 9.6-6.1 6.3 0 11.1 5.4 11.1 13.4 0 9.5-5.7 14.2-11.9 14.2 -4.5 0-7.5-2.5-8.8-5.2h-0.1v18h-6.3V45.5zM68.6 53.7c0 0.8 0.1 1.5 0.2 2.1 0.9 3.4 3.6 5.7 6.9 5.7 4.9 0 7.7-4 7.7-9.8 0-5.1-2.7-9.4-7.5-9.4 -3.1 0-6 2.2-6.9 5.6 -0.2 0.6-0.3 1.4-0.3 2.1V53.7z"/>
      </svg>
    `;
    const illustratorIcon = createIcon(illustratorSvg, 500);
        
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

    let scrollTimeout: number | NodeJS.Timeout;
    function handleScroll() {
      renderRef.current!.canvas.style.pointerEvents = "none";
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        renderRef.current!.canvas.style.pointerEvents = "auto";
      }, 100);
    }
    renderRef.current.canvas.addEventListener("wheel", handleScroll);   

    // Add all bodies to the world
    Composite.add(world, [vsCodeIcon, illustratorIcon, mouseConstraint, ground]);
    renderRef.current.mouse = mouse;

    // Animate the wave
    let time = 0;
    Matter.Events.on(engineRef.current, 'beforeUpdate', () => {
      time += 0.05;
      for (let i = 0; i < numVertices; i++) {
        const y = baseY + Math.sin(time + i * waveFrequency) * waveHeight;
        groundVertices[i].y = y;
      }
      Matter.Body.setVertices(ground, groundVertices);
    });


    const applyRandomDiagonalForce = (body: Matter.Body) => {
      // Randomize the force magnitude for both leftward (x) and upward (y) directions
      const randomFactorX = Math.random() * 0.0004 - 0.00005; // Adds randomness to the leftward force
      const randomFactorY = Math.random() * 0.0003 - 0.00005; // Adds randomness to the upward force
      
      const forceMagnitudeX = -0.008 + randomFactorX; // Leftward force (negative x direction) with random variation
      const forceMagnitudeY = -0.0005 + randomFactorY; // Upward force (negative y direction) with random variation
      
      Matter.Body.applyForce(body, { x: body.position.x, y: body.position.y }, { x: forceMagnitudeX, y: forceMagnitudeY });
    };

    logosArray.forEach(body => {
      applyRandomDiagonalForce(body);
      const x = body.position.x;
      const waveY = baseY + Math.sin(time + (x / spacing) * waveFrequency) * waveHeight;
      // const verticalForce = (waveY - body.position.y) * 0.005;
      
      // Body.applyForce(body, body.position, {
      //   x: -0.005,
      //   y: verticalForce
      // });

      // // Limit rotation
      Body.setAngularVelocity(body, body.angularVelocity * 0.9);
      Body.setAngle(body, body.angle * 0.9);

      // // Adjust position to sink more into the wave
      const sinkDepth = 40;
      const adjustedY = Math.min(body.position.y, waveY - sinkDepth);
      Body.setPosition(body, { x: body.position.x, y: adjustedY });
    });

        // // Resize event listener
        // const handleResize = () => {
          
        //   if (renderRef.current && engineRef.current) {
        //     const { width: newWidth, height: newHeight } = getViewportDimensions();

        //     renderRef.current.canvas.width = newWidth;
        //     renderRef.current.canvas.height = newHeight * 0.8;
            
        //     // Update ground
        //     Composite.remove(world, ground);
        //     ground = createGround();
        //     Composite.add(world, ground);
            
        //     // Update viewport dimensions
        //     viewportWidth = newWidth;
        //     viewportHeight = newHeight;
            
        //     // Update wrap bounds for logos
        //     logosArray.forEach(logo => {
        //       if (logo.plugin && logo.plugin.wrap) {
        //         logo.plugin.wrap.max.x = newWidth;
        //       }
        //     });
        //   }
        // };
    
        // window.addEventListener('resize', handleResize);
      // Resize event listener to dynamically update canvas
      const handleResize = () => {
        const { width: newWidth, height: newHeight } = getViewportDimensions();
        // Update render dimensions
        renderRef.current!.canvas.width = newWidth;
        renderRef.current!.canvas.height = newHeight;
    
        // Update ground and other dynamic elements
        Composite.remove(world, ground);
        viewportWidth = newWidth;
        viewportHeight = newHeight;
        ground = createGround();
        Composite.add(world, ground);
      };
    
      // Now attach the handleResize function to the resize event
      window.addEventListener('resize', handleResize);

      // Run the engine
      runnerRef.current = Runner.create();
      Runner.run(runnerRef.current, engineRef.current);
      Render.run(renderRef.current);
    
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
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