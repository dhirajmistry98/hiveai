"use client";

import SmokeyCursor from "@/components/lightswind/smokey-cursor";

export default function SmokeyWrapper() {
  return (
    <SmokeyCursor
      simulationResolution={256}
      dyeResolution={1024}
      densityDissipation={2}
      splatForce={6000}
      enableShading={true}
    />
  );
}
