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

const handleClick = () => {
  window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=david.a.waldherr@vanderbilt.edu");
};

const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1.31, 2]);

    return (
    <>
      {active && <animated.group
          name="gmailToken"
          scale={scale}
          rotation-y={rotation}
          position={[-40, 1100, -100]}
          >
        <group scale={1.2}>
        <group name="Letter" position={[-5.37, -8.49, 0]} scale={0.77}>
            <mesh
              name="Shape 4"
              geometry={nodes['Shape 4'].geometry}
              material={materials.Gold}
              position={[-53.73, -4.37, -17.45]}
              scale={1.85}
            />
            <mesh
              name="Shape 3"
              geometry={nodes['Shape 3'].geometry}
              material={materials.Gold}
              position={[157.94, 97.76, -18.42]}
              scale={1.85}
            />
            <mesh
              name="Shape 2"
              geometry={nodes['Shape 2'].geometry}
              material={materials.Gold}
              position={[-159.28, 102.25, -16.69]}
              scale={1.85}
            />
            <mesh
              name="Shape1"
              geometry={nodes.Shape1.geometry}
              material={materials.Gold}
              position={[-154.93, 115.32, -17.82]}
              scale={1.85}
            />
          </group>
          </group>
        </animated.group>}
          

        <animated.group 
          name="About me"
          scale={scale}
          rotation-y={rotation}
          position-x={-1100}
          position-y={-600}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          onClick={handleClick}
          >

          <group name="Token 4" scale={0.76}>
            <mesh
              name="Ellipse 34"
              geometry={nodes['Ellipse 34'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse6"
              geometry={nodes.Ellipse6.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <group name="Letter1" position={[0.45, 7.1, 28.25]} scale={0.76}>
            <mesh
              name="Shape 41"
              geometry={nodes['Shape 41'].geometry}
              material={materials.Gold}
              position={[-53.73, -4.37, -17.45]}
              scale={1.85}
            />
            <mesh
              name="Shape 31"
              geometry={nodes['Shape 31'].geometry}
              material={materials.Gold}
              position={[157.94, 97.76, -18.42]}
              scale={1.85}
            />
            <mesh
              name="Shape 24"
              geometry={nodes['Shape 24'].geometry}
              material={materials.Gold}
              position={[-159.28, 102.25, -16.69]}
              scale={1.85}
            />
            <mesh
              name="Shape6"
              geometry={nodes.Shape6.geometry}
              material={materials.Gold}
              position={[-154.93, 115.32, -17.82]}
              scale={1.85}
            />
          </group>
        </animated.group>


        {active && <animated.group>
        <group name="Gmail Text" position={[100, 300, 54.5]} scale={1.31}>
            <mesh
              name="g"
              geometry={nodes.g.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="m"
              geometry={nodes.m1.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a1.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i1.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="l"
              geometry={nodes.l.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





