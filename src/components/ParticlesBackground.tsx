"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Use slim version for bundle size

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    // console.log(container);
  };

  if (!init) return null;

  return (
    <Particles
      id="particles-js"
      particlesLoaded={particlesLoaded}
      options={{
        particles: {
          number: { value: 120, density: { enable: true, width: 800 } },
          color: { value: ["#f4b860", "#ff0080", "#7928ca"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.1, max: 0.6 } },
          size: { value: { min: 1, max: 4 } },
          links: { enable: true, distance: 150, color: "#fff", opacity: 0.1, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: "out" }
        },
        interactivity: {
          detectsOn: "canvas",
          events: { 
            onHover: { enable: true, mode: "repulse" }, 
            onClick: { enable: true, mode: "push" }, 
            resize: { enable: true } 
          },
          modes: { 
            repulse: { distance: 100 }, 
            push: { quantity: 4 } 
          }
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
}
