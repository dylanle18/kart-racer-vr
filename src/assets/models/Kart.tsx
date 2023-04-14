/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Kart.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Base001: THREE.Mesh
    Cube001: THREE.Mesh
    Cube__1_001: THREE.Mesh
    Cube__2_001: THREE.Mesh
    Cube__3_001: THREE.Mesh
    Cube__4_001: THREE.Mesh
    Cube__5_001: THREE.Mesh
    Cube__6_001: THREE.Mesh
    Cube__7_001: THREE.Mesh
    Cube__8_001: THREE.Mesh
    Cube__9_001: THREE.Mesh
    Left_Wheel001: THREE.Mesh
    Left_Wheel_1001: THREE.Mesh
    Right_Wheel001: THREE.Mesh
    Right_Wheel_1001: THREE.Mesh
    Spoiler001: THREE.Mesh
    Steering_Wheel001: THREE.Mesh
    Wheel001: THREE.Mesh
    Wheel_1001: THREE.Mesh
    Wheel_2001: THREE.Mesh
    Wheel_3001: THREE.Mesh
  }
  materials: {
    KartBlack: THREE.MeshStandardMaterial
    KartRed: THREE.MeshStandardMaterial
    KartGrey: THREE.MeshStandardMaterial
    Wheel: THREE.MeshStandardMaterial
    Rim: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Kart.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[2, 0, 0]} scale={0.025}>
        <mesh geometry={nodes.Base001.geometry} material={materials.KartBlack} position={[0, 0, -10]} scale={[1.16, 2, 0.1]} />
        <mesh geometry={nodes.Cube001.geometry} material={materials.KartRed} position={[0, 59.1, -25.1]} scale={[1.01, 0.44, 0.22]} />
        <mesh geometry={nodes.Cube__1_001.geometry} material={materials.KartRed} position={[0, -68.7, -29.2]} scale={[1.16, 0.44, 0.33]} />
        <mesh geometry={nodes.Cube__2_001.geometry} material={materials.KartRed} position={[0, 74.7, -20.1]} scale={[0.81, 0.44, 0.15]} />
        <mesh geometry={nodes.Cube__3_001.geometry} material={materials.KartRed} position={[0, 57.6, -27.6]} scale={[0.64, 0.27, 0.42]} />
        <mesh geometry={nodes.Cube__4_001.geometry} material={materials.KartRed} position={[32.8, -8.6, -25.2]} scale={[0.27, 1.41, 0.31]} />
        <mesh geometry={nodes.Cube__5_001.geometry} material={materials.KartRed} position={[-32.8, -8.6, -25.2]} scale={[0.27, 1.41, 0.31]} />
        <mesh geometry={nodes.Cube__6_001.geometry} material={materials.KartGrey} position={[0, 43.6, -48.2]} scale={[0.12, 0.08, 0.42]} />
        <mesh geometry={nodes.Cube__7_001.geometry} material={materials.KartRed} position={[40, -68.7, -43.6]} scale={[0.15, 0.06, 0.36]} />
        <mesh geometry={nodes.Cube__8_001.geometry} material={materials.KartRed} position={[-40, -68.7, -43.6]} scale={[0.15, 0.06, 0.36]} />
        <mesh geometry={nodes.Cube__9_001.geometry} material={materials.KartGrey} position={[0, 51.1, -47.1]} scale={[0.12, 0.08, 0.24]} />
        <mesh geometry={nodes.Left_Wheel001.geometry} material={materials.KartBlack} position={[70, -70, -10]} rotation={[0, -1.57, 0]} scale={[0.5, 0.5, 0.12]} />
        <mesh geometry={nodes.Left_Wheel_1001.geometry} material={materials.Wheel} position={[70, 70, -10]} rotation={[0, -1.57, 0]} scale={[0.5, 0.5, 0.12]} />
        <mesh geometry={nodes.Right_Wheel001.geometry} material={materials.KartBlack} position={[-70, -70, -10]} rotation={[0, -1.57, 0]} scale={[0.5, 0.5, 0.12]} />
        <mesh geometry={nodes.Right_Wheel_1001.geometry} material={materials.KartBlack} position={[-70, 70, -10]} rotation={[0, -1.57, 0]} scale={[0.5, 0.5, 0.12]} />
        <mesh geometry={nodes.Spoiler001.geometry} material={materials.KartBlack} position={[0, -72.3, -62.3]} rotation={[0.4, 0, 0]} scale={[1.39, 0.34, 0.04]} />
        <mesh geometry={nodes.Steering_Wheel001.geometry} material={materials.KartBlack} position={[0, 40, -70]} rotation={[-Math.PI / 4, 0, Math.PI / 2]} scale={[0.5, 0.5, 0.03]} />
        <mesh geometry={nodes.Wheel001.geometry} material={materials.Rim} position={[-70, -70, -10]} rotation={[0, -1.57, 0]} scale={[0.28, 0.28, 0.12]} />
        <mesh geometry={nodes.Wheel_1001.geometry} material={materials.Rim} position={[70, -70, -10]} rotation={[0, -1.57, 0]} scale={[0.28, 0.28, 0.12]} />
        <mesh geometry={nodes.Wheel_2001.geometry} material={materials.Rim} position={[-70, 70, -10]} rotation={[0, -1.57, 0]} scale={[0.28, 0.28, 0.12]} />
        <mesh geometry={nodes.Wheel_3001.geometry} material={materials.Rim} position={[70, 70, -10]} rotation={[0, -1.57, 0]} scale={[0.28, 0.28, 0.12]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Kart.glb')
