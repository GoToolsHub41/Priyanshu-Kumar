import React from 'react';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';

const Effects: React.FC = () => {
  return (
    <EffectComposer disableNormalPass>
      {/* Lower luminanceThreshold to pick up the blue particles (blue often has lower perceived luminance) */}
      <Bloom luminanceThreshold={0.15} mipmapBlur intensity={1.5} radius={0.5} />
      <Noise opacity={0.05} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

export default Effects;