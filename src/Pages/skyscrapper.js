import React from 'react'
import { PerspectiveCamera, PositionalAudio,OrbitControls} from '@react-three/drei'
import { Suspense,useRef  } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import SkyScrapperModel from '../components/SkyscrapperModel'
export default function Skyscrapper() {
    const ref = useRef()
  return (
    <div className=" flex justify-center items-center h-screen">
    <Canvas className='h-full w-full bg-black'>
     <OrbitControls />
     <ambientLight intensity={0.5} />
     <directionalLight position={[-2,5,2]} intensity={1}/>
     {/* <BoxModel /> */}

     <Suspense fallback={null}>
     <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
         false
    
 
       <SkyScrapperModel />
        false
     </Stage>
    
     </Suspense>

    </Canvas>
 </div>
  )
}
