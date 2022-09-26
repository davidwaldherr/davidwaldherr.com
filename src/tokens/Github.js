import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function Github() {
    const { nodes, materials } = useSpline('https://prod.spline.design/XRVTldnmQ61eDtR3/scene.splinecode')

const [active, setActive] = useState(false)
// create a common spring that will be used later to interpolate other values
const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 1, stiffness: 80, damping: 10 },
});

const handleClick = () => {
  window.open("https://github.com/davidwaldherr");
};

const position = spring.to([0, 1], [0, 300])
const rotation = spring.to([0, 1], [0, 2*Math.PI]);
const scale = spring.to([0, 1], [1.31, 2]);

    return (
    <>
        {active && <animated.group
          name="topToken"
          scale={scale}
          rotation-y={rotation}
          position={[-40, 1080, -100]}
          >
        <group 
          name="Github Logo2" 
          position={[0, 0, 6.49]} 
          scale={1}>
            <group name="Token 52" position={[0, 0, -8.47]}>
              <mesh
                name="Ellipse 312"
                geometry={nodes['Ellipse 312'].geometry}
                material={materials.Black}
                position={[0, 0, -19.79]}
                scale={1.2}
              />
            </group>
            <mesh
              name="Github Logo3"
              geometry={nodes['Github Logo3'].geometry}
              material={materials.Gold}
              position={[-0.82, -5.31, 2.34]}
              scale={0.88}
            >
              <mesh
                name="Shape 27"
                geometry={nodes['Shape 27'].geometry}
                material={materials.Gold}
                visible={false}
                position={[-47.74, -141.82, 14.85]}
                scale={0.91}
              />
              <mesh
                name="Ellipse14"
                geometry={nodes.Ellipse14.geometry}
                material={materials.Gold}
                visible={false}
                position={[0, 0, -29.4]}
                scale={1.96}
              />
            </mesh>
          </group>
          </animated.group>}

        <animated.group 
          name="Github"
          scale={scale}
          rotation-y={rotation}
          position-x={1000}
          position-y={-100}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          onClick={handleClick}
          >

          <mesh
            name="Ring1"
            geometry={nodes.Ring1.geometry}
            material={materials.Gold}
            position={[0, 0, -24.85]}
            scale={1.06}
          />
          <group name="Github Logo2" position={[0, 0, 6.49]} scale={0.77}>
            <group name="Token 52" position={[0, 0, -8.47]}>
              <mesh
                name="Ellipse 312"
                geometry={nodes['Ellipse 312'].geometry}
                material={materials.Black}
                position={[0, 0, -19.79]}
                scale={1.31}
              />
            </group>
            <mesh
              name="Github Logo3"
              geometry={nodes['Github Logo3'].geometry}
              material={materials.Gold}
              position={[-0.82, -5.31, 2.34]}
              scale={0.88}
            >
              <mesh
                name="Shape 27"
                geometry={nodes['Shape 27'].geometry}
                material={materials.Gold}
                visible={false}
                position={[-47.74, -141.82, 14.85]}
                scale={0.91}
              />
              <mesh
                name="Ellipse14"
                geometry={nodes.Ellipse14.geometry}
                material={materials.Gold}
                visible={false}
                position={[0, 0, -29.4]}
                scale={1.96}
              />
            </mesh>
          </group>
        </animated.group>
    
  {active && <animated.group>
        <group name="github Text" position={[50, 300, 54.5]} scale={1.31}>
            <mesh
              name="g"
              geometry={nodes.g1.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i12.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i13.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t7.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
            />
            <mesh
              name="h"
              geometry={nodes.h.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="u"
              geometry={nodes.u1.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="b"
              geometry={nodes.b3.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </>
  )
}





