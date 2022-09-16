import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function ThreeD() {
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
          position={[-90, 1090, -100]}
          >
          <group name="3D" position={[-63.08, 21.9, 195.69]} scale={2.2}>
            <mesh
              name="32"
              geometry={nodes['32'].geometry}
              material={materials.Gold}
              position={[-44.76, -67.31, -125.68]}
            />
            <mesh name="D" geometry={nodes.D.geometry} material={materials.Gold} position={[40.24, -67.31, -125.68]} />
          </group>
        </animated.group>}

        <animated.group 
          name="3d"
          scale={scale}
          rotation-y={rotation}
          position-x={100}
          position-y={-600}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          >

          <group name="3D1" position={[-63.7, 37.68, 223.55]} scale={1.72}>
            <mesh
              name="33"
              geometry={nodes['33'].geometry}
              material={materials.Gold}
              position={[-44.76, -67.31, -125.68]}
            />
            <mesh
              name="D1"
              geometry={nodes.D1.geometry}
              material={materials.Gold}
              position={[40.24, -67.31, -125.68]}
            />
          </group>
          <group name="Token 6" scale={0.77}>
            <mesh
              name="Ellipse 38"
              geometry={nodes['Ellipse 38'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse10"
              geometry={nodes.Ellipse10.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
        </animated.group>
    
        {active && <animated.group>
        <group name="3d Text" position={[-500, 300, 54.5]} scale={1.31}>
            <mesh
              name="3"
              geometry={nodes['31'].geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="d"
              geometry={nodes.d1.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="w"
              geometry={nodes.w.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e5.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="b"
              geometry={nodes.b2.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
            <mesh
              name="d"
              geometry={nodes.d2.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e6.geometry}
              material={materials['My Text Material']}
              position={[320, 24.58, 0]}
            />
            <mesh
              name="v"
              geometry={nodes.v1.geometry}
              material={materials['My Text Material']}
              position={[400, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e7.geometry}
              material={materials['My Text Material']}
              position={[480, 24.58, 0]}
            />
            <mesh
              name="l"
              geometry={nodes.l4.geometry}
              material={materials['My Text Material']}
              position={[560, 24.58, 0]}
            />
            <mesh
              name="o"
              geometry={nodes.o3.geometry}
              material={materials['My Text Material']}
              position={[640, 24.58, 0]}
            />
            <mesh
              name="p"
              geometry={nodes.p2.geometry}
              material={materials['My Text Material']}
              position={[720, 24.58, 0]}
            />
            <mesh
              name="m"
              geometry={nodes.m3.geometry}
              material={materials['My Text Material']}
              position={[800, 24.58, 0]}
              scale={1.35}
            />
            <mesh
              name="e"
              geometry={nodes.e8.geometry}
              material={materials['My Text Material']}
              position={[880, 24.58, 0]}
            />
            <mesh
              name="n"
              geometry={nodes.n2.geometry}
              material={materials['My Text Material']}
              position={[960, 24.58, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t3.geometry}
              material={materials['My Text Material']}
              position={[1040, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





