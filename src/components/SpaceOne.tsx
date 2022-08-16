import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense} from "react";
import Space from "./Space";

export default function SpaceOne() {
  const { player } = useXR();

  return (

    <VRCanvas>
      <DefaultXRControllers />

      {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
      <OrbitControls enableZoom={false} enablePan={false} />

      <ambientLight/>
      <pointLight intensity={3} position={[0, 0, 0]}/>
      <PerspectiveCamera position={[6,6,6]} makeDefault/>

      <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
        <Space />
      </Suspense>
    </VRCanvas>
  )
}
