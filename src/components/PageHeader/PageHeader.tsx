import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Mesh } from "three";
import Kart from "~/assets/models/Kart";

function KartMesh() {
  const kartRef = useRef<Mesh>(null!);

  useFrame(() => {
    kartRef.current.rotation.y -= 0.01;
  });

  return (
    <mesh ref={kartRef} position-y={-0.5}>
      <Kart />
    </mesh>
  );
}

function PageHeader() {
  return (
    <div className="relative">
      <div>
        <h1 className="font-bold text-6xl text-red">Kart Racer VR</h1>
        <p className="font-normal text-xs mb-2">
          Toronto Metropolitan University, Department of Computer Science
        </p>
        <p className="font-medium text-lg">
          CPS643 Virtual Reality &nbsp;•&nbsp; Dylan Le, Igor Goncalves Penedoss
        </p>
      </div>
      <div className="md:absolute top-0 right-0 md:w-1/2 w-full">
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <KartMesh />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default PageHeader;
