// import React, { useRef, useEffect } from "react";
// import Matter from 'matter-js';
// import p5 from 'p5';


// //add essential modules
//   let Engine = Matter.Engine, //manage physics & update world
//       Render = Matter.Render, //draws your objects
//       Runner = Matter.Runner, //optional loop
//       Bodies = Matter.Bodies, //your rigid bodies
//       Composite = Matter.Composite; //collection of all rigid bodies


//   //create engine and renderer
//   let engine = Engine.create()
//   let render = Render.create({
//                 element:document.body,
//                 engine: engine,
//                 options: {
//                 width: window.innerWidth,
//                 height: 600,
//                 wireframes: false
//               }
//   });

//   function setup() {
//     //make rigid bodies
//     let boxA = Bodies.rectangle(200, 200, 80, 80);

//     //static rigid bodies
//     let ground = Bodies.rectangle(window.innerWidth, 8100, 60, {isStatic: true});

//     //add bodies to the world
//     Composite.add(engine.world, [boxA, ground]);

//     //run the engine and render
//     Matter.Runner.run(engine);
//     Render.run(render);
//   }

//   //draw function is a loop
//   function draw() {
//     let circle4 = Bodies.circle(50, 50, 5);
//     Composite.add(engine.world, circle4); //these bodiesa are auto put into the array
//   }

// }