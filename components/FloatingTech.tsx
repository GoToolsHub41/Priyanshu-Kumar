import React, { useMemo } from 'react';
import { Float, Icosahedron, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingTech: React.FC = () => {
  const count = 15;
  
  const positions = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      type: Math.floor(Math.random() * 3)
    }));
  }, []);

  return (
    <group>
      {positions.map((props, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
          <group position={props.position} rotation={props.rotation} scale={props.scale}>
            {props.type === 0 && (
              <Icosahedron args={[1, 0]}>
                <meshStandardMaterial color="#3AA0FF" wireframe transparent opacity={0.15} />
              </Icosahedron>
            )}
            {props.type === 1 && (
              <Box args={[1, 1, 1]}>
                 <meshStandardMaterial color="#C9FF2F" wireframe transparent opacity={0.1} />
              </Box>
            )}
            {props.type === 2 && (
              <Torus args={[0.8, 0.2, 8, 20]}>
                 <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} transparent opacity={0.3} />
              </Torus>
            )}
          </group>
        </Float>
      ))}
    </group>
  );
};

export default FloatingTech;