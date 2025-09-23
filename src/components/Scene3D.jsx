import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Sphere with distortion
const AnimatedSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Floating Pills in 3D space
const FloatingPill = ({ position, rotation, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      meshRef.current.rotation.z = rotation[2] + state.clock.elapsedTime * 0.5;
    }
  });

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -1);
    shape.lineTo(0, 1);
    shape.absarc(0, 1, 0.5, 0, Math.PI, false);
    shape.lineTo(0, -1);
    shape.absarc(0, -1, 0.5, Math.PI, 0, false);
    
    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.1,
      bevelThickness: 0.1
    };
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geometry} position={position} rotation={rotation} scale={scale}>
        <meshStandardMaterial
          color="#10b981"
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

// Main 3D Scene Component
const Scene3D = ({ className = "", mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div className={`${className}`} style={{ height: '100%', width: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        {/* Main central sphere */}
        <AnimatedSphere 
          position={[0, 0, 0]} 
          color="#10b981" 
          scale={1.5}
        />
        
        {/* Orbiting spheres */}
        <AnimatedSphere 
          position={[3, 1, -1]} 
          color="#3b82f6" 
          scale={0.8}
        />
        <AnimatedSphere 
          position={[-2, -1, 1]} 
          color="#8b5cf6" 
          scale={0.6}
        />
        
        {/* Floating pills */}
        {[...Array(8)].map((_, i) => (
          <FloatingPill
            key={i}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
            scale={0.3 + Math.random() * 0.4}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;

