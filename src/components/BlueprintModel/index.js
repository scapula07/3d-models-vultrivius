
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Blueprint/blueprint.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.56, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.18, 0, 0]} scale={[0.71, 1, 0.8]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.GroundFloor}
            />
          </group>
          <group position={[0.58, 0.2, -0.11]} rotation={[1.58, 0, -1.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Front}
            />
          </group>
          <group position={[-0.24, 0.15, -0.11]} rotation={[1.57, 0, 1.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Rear}
            />
          </group>
          <group position={[0.1, 0.49, -0.02]} scale={[0.87, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Roof}
            />
          </group>
          <group position={[0.08, -0.13, 0]} scale={[0.91, 1, 1.03]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Basement}
            />
          </group>
          <group position={[0.08, 0.2, -0.38]} rotation={[1.56, 0, 3.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Left}
            />
          </group>
          <group position={[0.2, 0.2, 0.16]} rotation={[1.57, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.RightSide}
            />
          </group>
          <group position={[0.68, 0.2, -0.11]} rotation={[1.57, 0, -1.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.FrontLower}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/blueprint.gltf");



