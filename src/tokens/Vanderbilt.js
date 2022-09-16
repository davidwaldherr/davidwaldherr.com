import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function Gmail() {
    const { nodes, materials } = useSpline('https://prod.spline.design/XRVTldnmQ61eDtR3/scene.splinecode')

const [active, setActive] = useState(false)
// create a common spring that will be used later to interpolate other values
const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 1, stiffness: 80, damping: 10 },
});

const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1.31, 2]);

    return (
    <>
        {active && <animated.group
          name="topToken"
          scale={scale}
          rotation-y={rotation}
          position={[-50, 1050, -100]}>
          <group scale={1.4}>
          <mesh
            name="Vanderbilt Logo"
            geometry={nodes['Vanderbilt Logo'].geometry}
            material={materials.Gold}
            position={[7.44, 3.04, 4.94]}
            scale={1.06}
          >
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Gold}
              visible={false}
              position={[117.67, 73.39, 5.15]}
              rotation={[-0.12, 0.09, 0.02]}
            />
            <mesh
              name="Shape2"
              geometry={nodes.Shape2.geometry}
              material={materials.Gold}
              visible={false}
              position={[-125.86, 81.99, -19.31]}
              rotation={[-0.01, 0.01, 0.01]}
              scale={[1, 1, 0.38]}
            />
          </mesh>
          
          </group>

          </animated.group>}

        <animated.group 
          name="Vanderbilt"
          scale={scale}
          rotation-y={rotation}
          position-x={-200}
          position-y={-100}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          >

          <group name="Token1" scale={0.77}>
            <mesh
              name="Ellipse 37"
              geometry={nodes['Ellipse 37'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse9"
              geometry={nodes.Ellipse9.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <mesh
            name="Vanderbilt Logo1"
            geometry={nodes['Vanderbilt Logo1'].geometry}
            material={materials.Gold}
            position={[8.5, 5.64, 25.77]}
          >
            <mesh
              name="Cube2"
              geometry={nodes.Cube2.geometry}
              material={materials.Gold}
              visible={false}
              position={[117.67, 73.39, 5.15]}
              rotation={[-0.12, 0.09, 0.02]}
            />
            <mesh
              name="Shape7"
              geometry={nodes.Shape7.geometry}
              material={materials.Gold}
              visible={false}
              position={[-125.86, 81.99, -19.31]}
              rotation={[-0.01, 0.01, 0.01]}
              scale={[1, 1, 0.38]}
            />
          </mesh>
        </animated.group>
        
        {active && <animated.group>
        <group name="Vanderbilt Text" position={[-150, 300, 54.5]} scale={1.31}>
            <mesh
              name="v"
              geometry={nodes.v.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a4.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
              scale={1.35}
            />
            <mesh
              name="n"
              geometry={nodes.n1.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="d"
              geometry={nodes.d.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e4.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="r"
              geometry={nodes.r1.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
            <mesh
              name="b"
              geometry={nodes.b1.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i4.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i5.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
            <mesh
              name="l"
              geometry={nodes.l3.geometry}
              material={materials['My Text Material']}
              position={[320, 24.58, 0]}
              scale={1.35}
            />
            <mesh
              name="t"
              geometry={nodes.t2.geometry}
              material={materials['My Text Material']}
              position={[400, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





