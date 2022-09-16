import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function Phone() {
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
          position={[-40, 1050, -100]}
          >
          <group scale={1.6}>
          <mesh
            name="Phone"
            geometry={nodes.Phone.geometry}
            material={materials.Gold}
            position={[-49.5, 85.56, 0]}
            rotation={[0, 0, 0.56]}
            scale={0.98}
          />
          </group>
        </animated.group>}

        <animated.group 
          name="About me"
          scale={scale}
          rotation-y={rotation}
          position-x={-800}
          position-y={-100}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          
          >

          <group name="Token 2" scale={0.77}>
            <mesh
              name="Ellipse 35"
              geometry={nodes['Ellipse 35'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse7"
              geometry={nodes.Ellipse7.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials.Gold}
            position={[-49.36, 107.46, 17.18]}
            rotation={[0, 0, 0.56]}
            scale={1.19}
          />
        </animated.group>

        {active && <animated.group>
        <group name="Phone text" position={[-170, 300, 54.5]} scale={1.31}>
            <mesh
              name="c"
              geometry={nodes.c.geometry}
              material={materials['My Text Material']}
              position={[-160, 66.58, 0]}
              scale={.75}
            />
            <mesh
              name="a"
              geometry={nodes.a2.geometry}
              material={materials['My Text Material']}
              position={[-100, 66.58, 0]}
              scale={.75}
            />
            <mesh
              name="l"
              geometry={nodes.l1.geometry}
              material={materials['My Text Material']}
              position={[-40, 66.58, 0]}
              scale={.75}
            />
            <mesh
              name="l"
              geometry={nodes.l2.geometry}
              material={materials['My Text Material']}
              position={[20, 66.58, 0]}
              scale={1.05}
            />
            <mesh
              name="m"
              geometry={nodes.m2.geometry}
              material={materials['My Text Material']}
              position={[140, 66.58, 0]}
              scale={.75}
            />
            <mesh
              name="e"
              geometry={nodes.e1.geometry}
              material={materials['My Text Material']}
              position={[200, 66.58, 0]}
              scale={.75}
            />
            <mesh
              name="("
              geometry={nodes['('].geometry}
              material={materials['My Text Material']}
              position={[-320, -41.42, 0]}
            />
            <mesh
              name="8"
              geometry={nodes['8'].geometry}
              material={materials['My Text Material']}
              position={[-260, -41.42, 0]}
            />
            <mesh
              name="4"
              geometry={nodes['4'].geometry}
              material={materials['My Text Material']}
              position={[-200, -41.42, 0]}
            />
            <mesh
              name="7"
              geometry={nodes['7'].geometry}
              material={materials['My Text Material']}
              position={[-140, -41.42, 0]}
            />
            <mesh
              name=")"
              geometry={nodes[')'].geometry}
              material={materials['My Text Material']}
              position={[-80, -41.42, 0]}
            />
            <mesh
              name="8"
              geometry={nodes['81'].geometry}
              material={materials['My Text Material']}
              position={[-20, -41.42, 0]}
            />
            <mesh
              name="5"
              geometry={nodes['5'].geometry}
              material={materials['My Text Material']}
              position={[40, -41.42, 0]}
            />
            <mesh
              name="8"
              geometry={nodes['82'].geometry}
              material={materials['My Text Material']}
              position={[100, -41.42, 0]}
            />
            <mesh
              name="-"
              geometry={nodes['-'].geometry}
              material={materials['My Text Material']}
              position={[160, -41.42, 0]}
            />
            <mesh
              name="4"
              geometry={nodes['41'].geometry}
              material={materials['My Text Material']}
              position={[220, -41.42, 0]}
            />
            <mesh
              name="2"
              geometry={nodes['2'].geometry}
              material={materials['My Text Material']}
              position={[280, -41.42, 0]}
            />
            <mesh
              name="3"
              geometry={nodes['3'].geometry}
              material={materials['My Text Material']}
              position={[340, -41.42, 0]}
            />
            <mesh
              name="6"
              geometry={nodes['6'].geometry}
              material={materials['My Text Material']}
              position={[400, -41.42, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





