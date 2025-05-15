import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Character from "../assets/Character.jsx";

import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div className="h-[90%] w-[30%] mr-52 mt-32">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Soft ambient light to fill in the shadows, without being too bright */}
        <ambientLight intensity={1.2} color={"#ffffff"} />

        {/* Directional light from the front */}
        <directionalLight
          position={[0, 5, 5]}
          intensity={2}
          color={"#ffffff"}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Slight additional light from the left and right for balanced exposure */}
        <directionalLight
          position={[-3, 3, 3]}
          intensity={1.5}
          color={"#ffffff"}
        />
        <directionalLight
          position={[3, 3, 3]}
          intensity={1.5}
          color={"#ffffff"}
        />

        {/* Optional top light for subtle highlights */}
        <pointLight position={[0, 5, 0]} intensity={1.2} color={"#ffffff"} />

        {/* Your character */}
        <Character scale={[2, 2, 2]} position={[0, -0.85, 0]}/>

        {/* Orbit controls locked to horizontal rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
