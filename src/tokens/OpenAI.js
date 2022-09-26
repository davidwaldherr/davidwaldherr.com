import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function OpenAI({ onClick}) {
    const { nodes, materials } = useSpline('https://prod.spline.design/XRVTldnmQ61eDtR3/scene.splinecode')

const [active, setActive] = useState(false)
// create a common spring that will be used later to interpolate other values
const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 1, stiffness: 80, damping: 10 },
});


const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1, 2]);

    return (
    <group onClick={onClick}>
        {active && <animated.group
          name="topToken"
          scale={scale}
          rotation-y={rotation}
          position={[-55, 1100, -100]}
          >
          <group scale={1.3}>
          <mesh
            name="Torus Knot"
            geometry={nodes['Torus Knot'].geometry}
            material={materials.Gold}
            position={[2.47, -6.5, 0]}
            scale={[0.94, 0.94, 0.54]}
          />
          </group>
        </animated.group>}

        <animated.group 
          name="About me"
          scale={scale}
          rotation-y={rotation}
          position-x={-500}
          position-y={-600}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          >
          <group name="Token 51">
            <mesh
              name="Ellipse 36"
              geometry={nodes['Ellipse 36'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse8"
              geometry={nodes.Ellipse8.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <mesh
            name="Torus Knot1"
            geometry={nodes['Torus Knot1'].geometry}
            material={materials.Gold}
            position={[4.24, 0.95, 11.65]}
            scale={[1.29, 1.29, 0.74]}
          />
        </animated.group>


        {active && <animated.group>
        <group name="OpenAI Text" position={[-400, 300, 54.5]} scale={1.31}>
            <mesh
              name="o"
              geometry={nodes.o1.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="p"
              geometry={nodes.p.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e2.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="n"
              geometry={nodes.n.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="a"
              geometry={nodes.a3.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i2.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="i"
              geometry={nodes.i3.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="p"
              geometry={nodes.p1.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
            <mesh
              name="r"
              geometry={nodes.r.geometry}
              material={materials['My Text Material']}
              position={[320, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="o"
              geometry={nodes.o2.geometry}
              material={materials['My Text Material']}
              position={[400, 24.58, 0]}
            />
            <mesh
              name="j"
              geometry={nodes.j.geometry}
              material={materials['My Text Material']}
              position={[480, 24.58, 0]}
            />
            <mesh
              name="j"
              geometry={nodes.j1.geometry}
              material={materials['My Text Material']}
              position={[480, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e3.geometry}
              material={materials['My Text Material']}
              position={[560, 24.58, 0]}
            />
            <mesh
              name="c"
              geometry={nodes.c1.geometry}
              material={materials['My Text Material']}
              position={[640, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="t"
              geometry={nodes.t1.geometry}
              material={materials['My Text Material']}
              position={[720, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="s"
              geometry={nodes.s.geometry}
              material={materials['My Text Material']}
              position={[800, 24.58, 0]}
              scale={2.2}
            />
          </group>
        </animated.group>
        }

    </group>
  )
}





