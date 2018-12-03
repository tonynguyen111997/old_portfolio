import React from 'react';

import ParticlesEffect from 'react-particles-js';

const Particles = () => {
  return (
    <ParticlesEffect params={{
      particles:{
        number: { 
          value: 160, 
          density: { enable: true, value_area: 800 } 
        },
        color: { value: "#284b63" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked:{
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
      }
    }} 
    style={{
      position: "fixed",
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      zIndex: "-1"
    }}
    />
  );
}

export default Particles;