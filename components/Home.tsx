"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "@/constants";
import Card from "./Card";

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	return (
		<main
			ref={container}
			className="relative my-[50vh]">
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.05;
				return (
					<Card
						key={`p_${i}`}
						i={i}
						{...project}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
		</main>
	);
}
