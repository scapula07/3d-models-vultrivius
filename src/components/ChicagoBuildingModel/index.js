import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ChicagoBuildingModel(props) {
  const { nodes, materials } = useGLTF("/chicago_buildings/chicagobuilding.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-58.53, 30.05, -0.85]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[37.09, 18.43, -0.33]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chicagobuilding.gltf");
