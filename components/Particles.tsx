import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBg({ children, options }) {
	const particlesInit = useCallback(async (engine: Engine) => {
		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	return (
		<div className="relative">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={options}
				canvasClassName="ParticlesCanvasWrapper"
				className="absolute inset-0 -z-[1]"
			/>
			{children}
		</div>
	);
}
