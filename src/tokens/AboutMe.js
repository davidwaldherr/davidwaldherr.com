import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function AboutMe({ onClick }) {
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
    <group onClick={onClick}>
        {active && <animated.group
          name="topToken"
          scale={scale}
          rotation-y={rotation}
          position={[-55, 1100, -100]}
          >
          <group scale={1.4}>
          <group name="AboutMePerson" position={[0.3, 0.07, -1.44]} scale={0.67}>
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials.Gold}
              position={[-52.48, -10.61, -12.91]}
              scale={0.81}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials.Gold}
              position={[-1.07, 92.77, -12.91]}
              scale={0.81}
            />
          </group>
          </group>
          </animated.group>}

        <animated.group 
          name="About me"
          scale={scale}
          rotation-y={rotation}
          position-x={-1400}
          position-y={-100}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          >

          <group name="AboutMePerson1" position={[-0.99, 15.22, 35]} scale={0.77}>
            <mesh
              name="Shape5"
              geometry={nodes.Shape5.geometry}
              material={materials.Gold}
              position={[-52.48, -10.61, -12.91]}
              scale={0.81}
            />
            <mesh
              name="Ellipse4"
              geometry={nodes.Ellipse4.geometry}
              material={materials.Gold}
              position={[-1.07, 92.77, -12.91]}
              scale={0.81}
            />
          </group>
          <group name="Token" scale={0.77}>
            <mesh
              name="Ellipse 33"
              geometry={nodes['Ellipse 33'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse5"
              geometry={nodes.Ellipse5.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
        </animated.group>

      {active && <animated.group>
        <group name="About me text" position={[-100, 300, 54.5]} scale={1.31}>
            <mesh
              name="a"
              geometry={nodes.a.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="b"
              geometry={nodes.b.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="o"
              geometry={nodes.o.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="u"
              geometry={nodes.u.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="m"
              geometry={nodes.m.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
              scale={2.2}
            />
          </group>
        </animated.group>
      }
    </group>
  )
}





