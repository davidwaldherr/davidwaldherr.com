import useSpline from '@splinetool/r3f-spline'
import { useState } from 'react'
import { useSpring, animated } from "@react-spring/three";

// This function imports a gltf mesh with a material attached to it in a mesh to the scene.
export default function DigitalArt( { onClick }) {
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
          position={[-40, 1050, -100]}
          >
          <group 
              name="Palette" 
              scale={2.5} 
              >
            <mesh
              name="Ellipse 4"
              geometry={nodes['Ellipse 4'].geometry}
              material={materials.Gold}
              position={[44.4, 18.29, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse 3"
              geometry={nodes['Ellipse 3'].geometry}
              material={materials.Gold}
              position={[12.9, 36.7, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes['Ellipse 2'].geometry}
              material={materials.Gold}
              position={[-25.66, 33.07, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials.Gold}
              position={[-42.32, 5.17, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Shape 21"
              geometry={nodes['Shape 21'].geometry}
              material={materials.Gold}
              position={[-36.11, 38.66, 3.8]}
            />
          </group>
          </animated.group>}

        <animated.group 
          name="digitalArt"
          scale={scale}
          rotation-y={rotation}
          position-x={400}
          position-y={-100}
          position-z={position}
          onPointerEnter={() => setActive(true)} 
          onPointerLeave={() => setActive(false)}
          >

          <group name="Token 41" scale={0.77}>
            <mesh
              name="Ellipse 39"
              geometry={nodes['Ellipse 39'].geometry}
              material={materials.Black}
              position={[0, 0, -19.79]}
              scale={1.31}
            />
            <mesh
              name="Ellipse11"
              geometry={nodes.Ellipse11.geometry}
              material={materials.Gold}
              position={[0, 0, -32.44]}
              scale={1.39}
            />
          </group>
          <group name="Palette1" position={[0.77, 1.51, -1.58]} scale={2.06}>
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials.Gold}
              position={[49.93, -28.19, 10.64]}
              rotation={[-0.2, -0.15, -1.01]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.Gold}
              position={[46.39, -30.76, 10.6]}
              rotation={[-0.2, -0.15, -1.01]}
            />
            <mesh
              name="Cube3"
              geometry={nodes.Cube3.geometry}
              material={materials.Gold}
              position={[26.16, -43.97, 10.18]}
              rotation={[-0.2, -0.15, -1.01]}
            />
            <mesh
              name="Ellipse 41"
              geometry={nodes['Ellipse 41'].geometry}
              material={materials.Gold}
              position={[44.4, 18.29, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse 310"
              geometry={nodes['Ellipse 310'].geometry}
              material={materials.Gold}
              position={[12.9, 36.7, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse 21"
              geometry={nodes['Ellipse 21'].geometry}
              material={materials.Gold}
              position={[-25.66, 33.07, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Ellipse12"
              geometry={nodes.Ellipse12.geometry}
              material={materials.Gold}
              position={[-42.32, 5.17, 14.89]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
            <mesh
              name="Shape 25"
              geometry={nodes['Shape 25'].geometry}
              material={materials.Gold}
              position={[-36.11, 38.66, 3.8]}
            />
          </group>
        </animated.group>
    

        {active && <animated.group>
        <group name="digital art Text" position={[-220, 300, 54.5]} scale={1.31}>
            <mesh
              name="d"
              geometry={nodes.d3.geometry}
              material={materials['My Text Material']}
              position={[-320, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i6.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i7.geometry}
              material={materials['My Text Material']}
              position={[-240, 24.58, 0]}
            />
            <mesh
              name="g"
              geometry={nodes.g.geometry}
              material={materials['My Text Material']}
              position={[-160, 24.58, 0]}
              scale={2.2}
            />
            <mesh
              name="i8"
              geometry={nodes.i8.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="i"
              geometry={nodes.i9.geometry}
              material={materials['My Text Material']}
              position={[-80, 24.58, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t4.geometry}
              material={materials['My Text Material']}
              position={[0, 24.58, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a5.geometry}
              material={materials['My Text Material']}
              position={[80, 24.58, 0]}
            />
            <mesh
              name="l"
              geometry={nodes.l5.geometry}
              material={materials['My Text Material']}
              position={[160, 24.58, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a6.geometry}
              material={materials['My Text Material']}
              position={[320, 24.58, 0]}
            />
            <mesh
              name="r"
              geometry={nodes.r2.geometry}
              material={materials['My Text Material']}
              position={[400, 24.58, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t5.geometry}
              material={materials['My Text Material']}
              position={[480, 24.58, 0]}
            />
          </group>
        </animated.group>
        }

    </group>
  )
}





