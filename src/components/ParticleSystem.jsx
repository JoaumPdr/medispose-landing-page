import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem = ({ count = 100, mousePosition = { x: 0, y: 0 } }) => {
  const meshRef = useRef();
  const particlesRef = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Color (gradient from emerald to blue)
      const t = Math.random();
      colors[i * 3] = THREE.MathUtils.lerp(0.063, 0.231, t); // R
      colors[i * 3 + 1] = THREE.MathUtils.lerp(0.725, 0.510, t); // G
      colors[i * 3 + 2] = THREE.MathUtils.lerp(0.506, 0.976, t); // B
      
      // Scale
      scales[i] = Math.random() * 0.5 + 0.5;
    }
    
    return { positions, colors, scales };
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.attributes.position.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Floating animation
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + positions[i3]) * 0.01;
        
        // Mouse interaction
        const mouseInfluence = 0.1;
        positions[i3] += mousePosition.x * mouseInfluence * 0.01;
        positions[i3 + 1] += mousePosition.y * mouseInfluence * 0.01;
        
        // Boundary check and reset
        if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
        if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      }
      
      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          ref={particlesRef}
          attach="attributes-position"
          array={particles.positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          array={particles.scales}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
};

const ParticleCanvas = ({ className = "", mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleSystem count={150} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default ParticleCanvas;

