
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SkyScrapperModel(props) {
  const { nodes, materials } = useGLTF("/skyscrappermodel/skyscrapper.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_1.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_2.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_3.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_4.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_5.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_6.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_7.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_8.geometry}
            material={materials.material0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/skyscrapper.gltf");
