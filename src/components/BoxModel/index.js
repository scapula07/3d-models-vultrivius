import React from 'react'

export default function BoxModel() {
  return (
    <mesh rotation={[90,0,20]}>
    <boxGeometry attach="geometry" args={[2,2,2]}/>
    <meshStandardMaterial attach="material" color="blue"/>
  </mesh>
  )
}
