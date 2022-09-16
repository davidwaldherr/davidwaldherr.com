import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function LinkedIn() {
    const { nodes, materials } = useSpline('https://prod.spline.design/XRVTldnmQ61eDtR3/scene.splinecode')

const [active, setActive] = useState(false)
// create a common spring that will be used later to interpolate other values
const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 1, stiffness: 80, damping: 10 },
});

const handleClick = () => {
  window.open("https://www.linkedin.com/in/davidwaldherr/");
};

const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1.31, 2]);

    return (
    <>
      {active && <animated.group
          name="linkedinToken"
          scale={scale}
          rotation-y={rotation}
          position={[-40, 1100, -100]}
          >
        <group scale={1.6}>
        <mesh
            name="LinkedIn"
            geometry={nodes.LinkedIn.geometry}
            material={materials.Gold}
            castShadow
            receiveShadow
            position={[-4.39, -7.83, 17.7]}
            scale={0.56}
          >
            <mesh
              name="Shape3"
              geometry={nodes.Shape3.geometry}
              material={materials['Untitled Material']}
              visible={false}
              position={[-41.16, 49.66, -16.63]}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes['Rectangle 2'].geometry}
              material={materials['Untitled Material']}
              visible={false}
              position={[-95.72, -41.15, -10]}
            />
            <mesh
              name="Ellipse3"
              geometry={nodes.Ellipse3.geometry}
              material={materials['Untitled Material']}
              visible={false}
              position={[-96.12, 101.35, -13.9]}
              scale={1.44}
            />
            <mesh
              name="Rectangle"
              geometry={nodes.Rectangle.geometry}
              material={materials['Untitled Material']}
              visible={false}
              position={[0, 0, -10]}
            />
          </mesh>
        </group>
      </animated.group>}

        <animated.group 
          name="LinkedIn"
          scale={scale}
          rotation-y={rotation}
          position-x={1300}
          position-y={-600}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          onClick={handleClick}
          >

          <group name="Token 8" scale={0.77}>
            <mesh
              name="Ellipse 313"
              geometry={nodes['Ellipse 313'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse15"
              geometry={nodes.Ellipse15.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <mesh
            name="Boolean 2"
            geometry={nodes['Boolean 2'].geometry}
            material={materials.Gold}
            castShadow
            receiveShadow
            position={[0.54, 2.8, 35.23]}
            scale={0.63}
          >
            <mesh
              name="Shape9"
              geometry={nodes.Shape9.geometry}
              material={materials['Shape9 Material']}
              visible={false}
              position={[-41.16, 49.66, -16.63]}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes['Rectangle 21'].geometry}
              material={materials['Rectangle 21 Material']}
              visible={false}
              position={[-95.72, -41.15, -10]}
            />
            <mesh
              name="Ellipse16"
              geometry={nodes.Ellipse16.geometry}
              material={materials['Ellipse16 Material']}
              visible={false}
              position={[-96.12, 101.35, -13.9]}
              scale={1.44}
            />
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials.Gold}
              visible={false}
              position={[0, 0, -10]}
            />
          </mesh>
        </animated.group>
    
        {active && <animated.group>
        <group name="linktree Text1" position={[-50, 300, 54.5]} scale={1.31}>
            <mesh
              name="l"
              geometry={nodes.l7.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i14.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i15.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="n4"
              geometry={nodes.n4.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="k1"
              geometry={nodes.k1.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="e11"
              geometry={nodes.e11.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="d4"
              geometry={nodes.d4.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i16.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i17.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="n"
              geometry={nodes.n5.geometry}
              material={materials['My Text Material']}
              position={[240, 24.58, 0]}
            />
          </group>
        </animated.group>}

    </>
  )
}





