import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function Linktree() {
    const { nodes, materials } = useSpline('https://prod.spline.design/XRVTldnmQ61eDtR3/scene.splinecode')

const [active, setActive] = useState(false)
// create a common spring that will be used later to interpolate other values
const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 1, stiffness: 80, damping: 10 },
});

const handleClick = () => {
  window.open("https://linktr.ee/davidwaldherr");
};

const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1.31, 2]);

    return (
    <>
      {active && <animated.group
          name="linktreeToken"
          scale={scale}
          rotation-y={rotation}
          position={[-50, 1100, -100]}
          >
        <group scale={1.3}>
        <mesh
            name="Shape 26"
            geometry={nodes['Shape 26'].geometry}
            material={materials.Gold}
            position={[0.84, 50.91, -5.76]}
            scale={[-0.89, 0.89, 0.89]}
          />
          <mesh
            name="Shape8"
            geometry={nodes.Shape8.geometry}
            material={materials.Gold}
            position={[0.84, 50.91, -5.76]}
            scale={0.89}
          />
          </group>
        </animated.group>}


        <animated.group 
          name="Linktree"
          scale={scale}
          rotation-y={rotation}
          position-x={700}
          position-y={-600}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          onClick={handleClick}
          >

          <group name="Token 7" scale={0.77}>
            <mesh
              name="Ellipse 311"
              geometry={nodes['Ellipse 311'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse13"
              geometry={nodes.Ellipse13.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <mesh
            name="Shape 26"
            geometry={nodes['Shape 26'].geometry}
            material={materials.Gold}
            position={[0.84, 50.91, -5.76]}
            scale={[-0.89, 0.89, 0.89]}
          />
          <mesh
            name="Shape8"
            geometry={nodes.Shape8.geometry}
            material={materials.Gold}
            position={[0.84, 50.91, -5.76]}
            scale={0.89}
          />
        </animated.group>
    
        {active && <animated.group>
        <group name="linktree Text" position={[-60, 300, 54.5]} scale={1.31}>
            <mesh
              name="l"
              geometry={nodes.l6.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i10.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i11.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="n"
              geometry={nodes.n3.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="k"
              geometry={nodes.k.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="t"
              geometry={nodes.t6.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="r"
              geometry={nodes.r3.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e9.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e10.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





