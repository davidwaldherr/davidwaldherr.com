import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
import Spline from '@splinetool/react-spline';
import Scene from './Scene';


export default function App() {

  function onMouseDown(e) {
    setActiveSceneIndex(null);
  }
//scenes array
  const scenes = [
    <Spline 
      onClick={onMouseDown}
      scene="https://prod.spline.design/PknKaMRC5mAtaamQ/scene.splinecode"       
    />,
    <Spline 
      onClick={onMouseDown}
      scene="https://prod.spline.design/7mZjKMlE-keU7bey/scene.splinecode" />,
    <Spline 
      onClick={onMouseDown}
      scene="https://prod.spline.design/6YIYwIOQ-7vS3BXo/scene.splinecode" />,
    <Spline 
      onClick={onMouseDown}
      scene="https://prod.spline.design/Xd9gXdUZtcJVuv8K/scene.splinecode" />,
    <Spline 
      onClick={onMouseDown}
      scene="https://prod.spline.design/gk9pHw80ZKjYWFEw/scene.splinecode" />,
  ]

  const [activeSceneIndex, setActiveSceneIndex] = useState(null);

  const clearIndex = () => setActiveSceneIndex(null);

  return (
    <Suspense fallback={null}>
      {
        activeSceneIndex !== null && (
          scenes[activeSceneIndex]
        )
      }
      <Canvas flat linear>
        <Scene 
          onButtonClick={setActiveSceneIndex}
          clearIndex={clearIndex}
        />
      </Canvas>
      </Suspense> 
  );
}
