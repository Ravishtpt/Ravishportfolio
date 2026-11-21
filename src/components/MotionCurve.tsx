'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

interface MotionCurveProps {
  color?: number;
  width?: number;
  height?: number;
}

export function MotionCurve({ color = 0x00d4ff, width = 100, height = 4 }: MotionCurveProps) {
  const points = Array.from({ length: 20 }, (_, i) => {
    const t = i / 19;
    return new THREE.Vector3((-0.5 + t) * width, Math.sin(t * Math.PI) * height, 0);
  });

  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom');
  const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));

  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: 32, display: 'block' }}
    >
      <ambientLight intensity={1} />
      <line>
        <primitive object={geometry} />
        <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={2} />
      </line>
    </Canvas>
  );
}
