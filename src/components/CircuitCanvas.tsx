'use client';

import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Box, Stars } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

interface CircuitCanvasProps {
  className?: string;
}

const COLORS = [
  0x00d4ff, // cyan
  0xd97757, // copper
  0xf5a623, // amber
  0x94a3b8, // slate
];

function Node({ x, y, z, color, size = 0.18 }: { x: number; y: number; z: number; color: number; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    meshRef.current.position.y = y + Math.sin(time * 2 + x * 2) * 0.05;
    meshRef.current.scale.setScalar(1 + Math.sin(time * 3 + z) * 0.08 + (hovered ? 0.3 : 0));
    mat.emissive.setHex(color);
    mat.emissiveIntensity = hovered ? 0.8 : 0.3;
  });

  return (
    <mesh
      ref={meshRef}
      position={[x, y, z]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

function ComponentBox({ x, y, z, color, rx, ry, sx, sy, sz }: { x: number; y: number; z: number; color: number; rx?: number; ry?: number; sx?: number; sy?: number; sz?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]} rotation={[rx || 0, ry || 0, 0]}>
      <boxGeometry args={[sx || 0.5, sy || 0.2, sz || 0.1]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.4} />
    </mesh>
  );
}

function Trace({ x1, y1, z1, x2, y2, z2, color }: { x1: number; y1: number; z1: number; x2: number; y2: number; z2: number; color: number }) {
  const points = [new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)];

  return (
    <mesh>
      <tubeGeometry
        args={[
          new THREE.CatmullRomCurve3(points),
          12,
          0.03,
          4,
          false,
        ]}
      />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} transparent opacity={0.7} />
    </mesh>
  );
}

export default function CircuitCanvas({ className }: CircuitCanvasProps) {
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; z: number; color: number }>>([]);

  useEffect(() => {
    const generated: Array<{ x: number; y: number; z: number; color: number }> = [];
    for (let i = 0; i < 16; i++) {
      generated.push({
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 10,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    setNodes(generated);
  }, []);

  return (
    <Canvas
      className={className}
      shadows
      camera={{ position: [0, 4, 10], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color={0x00d4ff} />
      <pointLight position={[-5, -2, 5]} intensity={0.8} color={0xd97757} />

      <Stars radius={100} depth={50} count={200} factor={4} saturation={0} speed={1} />

      {/* PCB grid floor */}
      <gridHelper
        args={[20, 20, 0x1e2a47, 0x121a2b]}
        position={[0, -1.6, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Traces between random pairs of nodes */}
      {nodes.map((n, i) => {
        const target = nodes[(i + 3) % nodes.length];
        return (
          <Trace
            key={`trace-${i}`}
            x1={n.x} y1={n.y + 0.2} z1={n.z}
            x2={target.x} y2={target.y + 0.2} z2={target.z}
            color={n.color}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <Node key={`node-${i}`} {...n} />
      ))}

      {/* Component-like boxes scattered */}
      <ComponentBox x={-4} y={-1} z={-2} color={0xd97757} sx={0.6} sy={0.25} sz={0.15} />
      <ComponentBox x={4} y={-1} z={2} color={0x00d4ff} sx={0.4} sy={0.2} sz={0.12} />
      <ComponentBox x={-2} y={-1} z={4} color={0xf5a623} sx={0.5} sy={0.18} sz={0.14} />
      <ComponentBox x={2} y={-1} z={-4} color={0x94a3b8} sx={0.45} sy={0.22} sz={0.13} />

      {/* Central glowing component */}
      <Box
        position={[0, 0, 0]}
        args={[1.4, 0.35, 0.5]}
        rotation={[-0.3, 0.2, 0]}
        scale={[1, 1, 1]}
        onPointerOver={() => {}}
      >
        <meshStandardMaterial
          color={0x00d4ff}
          emissive={0x00d4ff}
          emissiveIntensity={0.6}
          metalness={0.7}
          roughness={0.3}
        />
      </Box>
    </Canvas>
  );
}
