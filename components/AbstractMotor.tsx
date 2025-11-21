import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

// Component for a single electric arc (The Bijli)
const ElectricArc: React.FC<{ radius: number; color?: string; intensity?: number }> = ({ radius, color = "#C9FF2F", intensity = 1 }) => {
  const lineRef = useRef<THREE.Line>(null);
  const [visible, setVisible] = useState(false);
  const nextFlash = useRef(Math.random() * 0.5); // Faster initial flash

  // Create geometry for the jagged lightning line
  const geometry = useMemo(() => {
    const points = [];
    const segments = 16; // More segments for jagged look
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI; 
      // Randomize radius significantly for "wild" lightning look
      const r = radius + (Math.random() - 0.5) * 0.5;
      points.push(new THREE.Vector3(
        Math.cos(angle) * r, 
        Math.sin(angle) * r + (Math.random() - 0.5) * 1.0, // Big Y Jitter
        (Math.random() - 0.5) * 1.5 // Big Z Jitter
      ));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  useFrame((state, delta) => {
    if (!lineRef.current) return;
    
    nextFlash.current -= delta;
    if (nextFlash.current <= 0) {
        setVisible(true);
        // Rapid flashing (Bijli Kadak)
        nextFlash.current = Math.random() * 0.2 + 0.05; // Very frequent
        // Quick hide
        setTimeout(() => setVisible(false), 40 + Math.random() * 50);
    }
    
    if (visible) {
        // Random rotation for every flash to make it look like it's striking different spots
        lineRef.current.rotation.z = Math.random() * Math.PI * 2;
        lineRef.current.rotation.x = (Math.random() - 0.5) * 1; 
        lineRef.current.rotation.y = (Math.random() - 0.5) * 1;
    }
  });

  return (
    <line ref={lineRef} geometry={geometry} visible={visible}>
      <lineBasicMaterial color={color} linewidth={3} opacity={1} transparent toneMapped={false} />
    </line>
  );
};

const AbstractMotor: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const rotorRef = useRef<THREE.Group>(null);
  const statorRef = useRef<THREE.Group>(null);
  const casingRef1 = useRef<THREE.Mesh>(null);
  const casingRef3 = useRef<THREE.Mesh>(null);
  
  const [hovered, setHovered] = useState(false);
  const explosionVal = useRef(0);

  // Enhanced Particle System
  const particleCount = 350; // Increased for better visual
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    return new Array(particleCount).fill(0).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: 2.2 + Math.random() * 2.5,
      orbitSpeed: 0.5 + Math.random() * 1.0, // Speed around Z axis
      driftSpeed: 0.5 + Math.random() * 0.8, // Upward Y speed
      flowSpeed: (Math.random() - 0.5) * 2.0, // Z-axis flow
      yPos: (Math.random() - 0.5) * 6,
      zPos: (Math.random() - 0.5) * 8,
      size: Math.random()
    }));
  }, []);
  
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    
    explosionVal.current = THREE.MathUtils.lerp(explosionVal.current, hovered ? 1 : 0, delta * 3);
    const ev = explosionVal.current;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15; 
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.08;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }

    if (rotorRef.current) {
        rotorRef.current.rotation.z -= delta * (2.5 + ev * 12);
        rotorRef.current.position.z = THREE.MathUtils.lerp(0, 2.5, ev);
    }

    if (statorRef.current) {
        statorRef.current.position.z = THREE.MathUtils.lerp(0, -2.0, ev);
        const scale = 1 + ev * 0.05;
        statorRef.current.scale.set(scale, scale, scale);
    }

    if (casingRef1.current) casingRef1.current.position.z = THREE.MathUtils.lerp(-0.8, -1.5, ev);
    if (casingRef3.current) casingRef3.current.position.z = THREE.MathUtils.lerp(0.8, 1.0, ev);

    if (meshRef.current) {
        particles.forEach((p, i) => {
            // 1. Update positions based on time
            p.angle += delta * p.orbitSpeed;
            p.yPos += delta * p.driftSpeed; // Rising action
            p.zPos += delta * p.flowSpeed;  // Flow along motor

            // Reset if out of bounds
            if (p.yPos > 4) p.yPos = -4;
            if (p.zPos > 5) p.zPos = -5;
            if (p.zPos < -5) p.zPos = 5;

            // 2. Calculate 3D Position
            const expansion = 1 + ev * 0.8;
            const r = p.radius * expansion;
            
            // Mix of cylindrical orbit and volumetric cloud
            const x = Math.cos(p.angle) * r;
            const z = p.zPos; 
            // Add some sine wave noise to Y to make it look like energy waves
            const y = p.yPos + Math.sin(p.angle * 3 + t) * 0.2;

            dummy.position.set(x, y, z);
            
            // 3. Scale / Pulsate
            // Blue particles that glow
            const scaleBase = 0.04 + p.size * 0.04;
            const scalePulse = 1 + Math.sin(t * 3 + i) * 0.3;
            dummy.scale.setScalar(scaleBase * scalePulse * (1 + ev));
            
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const copperMaterial = <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />;
  const steelMaterial = <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />;
  const darkMaterial = <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />;

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <mesh visible={false}>
        <boxGeometry args={[6, 6, 8]} />
      </mesh>

      {/* Intense Bijli (Lightning) Arcs */}
      <ElectricArc radius={2.8} color="#ffffff" /> 
      <ElectricArc radius={3.0} color="#3AA0FF" />
      <ElectricArc radius={2.5} color="#C9FF2F" />
      <ElectricArc radius={3.2} color="#3AA0FF" />
      {hovered && (
        <>
          <ElectricArc radius={4.0} color="#ffffff" />
          <ElectricArc radius={3.5} color="#C9FF2F" />
        </>
      )}

      {/* Stator Group */}
      <group ref={statorRef}>
         <Torus ref={casingRef1} args={[2, 0.15, 16, 60]} position={[0,0,-0.8]}>{steelMaterial}</Torus>
         <Torus args={[2, 0.15, 16, 60]} position={[0,0,0]}>{steelMaterial}</Torus>
         <Torus ref={casingRef3} args={[2, 0.15, 16, 60]} position={[0,0,0.8]}>{steelMaterial}</Torus>
         {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <group key={i} rotation={[0, 0, deg * Math.PI / 180]}>
                <Box args={[0.6, 0.3, 2]} position={[0, 1.8, 0]}>{copperMaterial}</Box>
                <Box args={[0.1, 0.4, 0.1]} position={[0, 1.7, 1]}><meshStandardMaterial color="#333" /></Box>
                <Box args={[0.1, 0.4, 0.1]} position={[0, 1.7, -1]}><meshStandardMaterial color="#333" /></Box>
            </group>
         ))}
      </group>

      {/* Rotor Group */}
      <group ref={rotorRef}>
         <Cylinder args={[0.12, 0.12, 9, 12]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.1} />
         </Cylinder>
         <Cylinder args={[1.1, 1.1, 2.5, 32]} rotation={[Math.PI/2, 0, 0]}>{darkMaterial}</Cylinder>
         {[0, 60, 120].map((deg, i) => (
             <Box key={i} args={[2.1, 0.3, 2]} rotation={[0, 0, deg * Math.PI / 180]}>{copperMaterial}</Box>
         ))}
         <Cylinder args={[0.6, 0.6, 0.8, 24]} position={[0,0,1.8]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial color="#b45309" metalness={0.8} roughness={0.3} />
         </Cylinder>
         <pointLight color="#3AA0FF" intensity={hovered ? 8 : 2} distance={6} decay={2} />
         <Cylinder args={[0.2, 0.2, 8, 8]} rotation={[Math.PI/2, 0, 0]}>
             <meshBasicMaterial color="#3AA0FF" transparent opacity={0.8} toneMapped={false} />
         </Cylinder>
      </group>

      {/* Floating Energy Particles - Blue/Cyan Energy Flow */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
         <sphereGeometry args={[0.05, 8, 8]} />
         {/* Using a bright Cyan/Blue mix for energy look */}
         <meshBasicMaterial color="#3AA0FF" toneMapped={false} transparent opacity={0.8} />
      </instancedMesh>
    </group>
  );
};

export default AbstractMotor;