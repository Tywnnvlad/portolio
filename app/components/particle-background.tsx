"use client";

import { useEffect, useState } from "react";
interface Particle {
	width: number;
	height: number;
	top: string;
	left: string;
	animation: string;
	opacity: number;
}

export default function ParticleBackground() {
	const [particles, setParticles] = useState<Particle[]>([]);

	useEffect(() => {
		// Generate 50 particles with random properties
		const newParticles = Array.from({ length: 200 }, () => ({
			width: 2 + Math.random() * 5,
			height: 2 + Math.random() * 5,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			animation: `particleMove ${2 + Math.random() * 5}s infinite linear`,
			opacity: Math.random(),
		}));

		setParticles(newParticles);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden">
			<div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_0%,#ffffff_40%,#1a1a1a_100%)]"></div>

			{particles.map((particle, index) => (
				<div
					key={index}
					style={{
						width: `${particle.width}px`,
						height: `${particle.height}px`,
						top: particle.top,
						left: particle.left,
						animation: particle.animation,
						opacity: particle.opacity,
					}}
					className="absolute bg-white rounded-full"
				/>
			))}

			<style jsx>{`
				@keyframes particleMove {
					0% {
						transform: translate(0, 0);
					}
					50% {
						transform: translate(
							${Math.random() * 20 - 10}px,
							${Math.random() * 20 - 10}px
						);
					}
					100% {
						transform: translate(0, 0);
					}
				}
			`}</style>
		</div>
	);
}
