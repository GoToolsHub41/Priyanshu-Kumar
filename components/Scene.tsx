import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AbstractMotor from './AbstractMotor';
import FloatingTech from './FloatingTech';
import Effects from './Effects';
import * as THREE from 'three';

// Component to simulate random lightning strikes in the environment (Bijli Effect)
const StormLight = () => {
    const lightRef = useRef<THREE.PointLight>(null);
    
    useFrame(() => {
        if (lightRef.current) {
            // Random chance to flash
            if (Math.random() > 0.96) {
                lightRef.current.intensity = 10 + Math.random() * 20; // Huge flash
                // Randomize position slightly to feel like it's coming from different clouds
                lightRef.current.position.set(
                    (Math.random() - 0.5) * 20,
                    10 + Math.random() * 5,
                    (Math.random() - 0.5) * 10
                );
            } else {
                // Fade out quickly
                lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, 0, 0.2);
            }
        }
    });

    return <pointLight ref={lightRef} color="#ffffff" distance={50} decay={2} />;
};

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: false }} camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#020617']} />
        
        {/* Base ambient light */}
        <ambientLight intensity={0.4} color="#1e293b" />
        
        {/* Static colored lights */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#C9FF2F" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3AA0FF" />
        
        {/* Dynamic Storm Light (Bijli) */}
        <StormLight />

        <Suspense fallback={null}>
          <group position={[2, 0, 0]} rotation={[0.2, -0.4, 0]}>
             {/* Enable pointer events only on the object */}
             <group className="pointer-events-auto"> 
                <AbstractMotor />
             </group>
          </group>

          {/* Background Floating Elements */}
          <FloatingTech />
          
          <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
          <Effects />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      {/* Enhanced Dark Vignette Overlay for Cinematic Feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,#020617_130%)] pointer-events-none" />
    </div>
  );
};

export default Scene;