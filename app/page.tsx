"use client";
import { useEffect } from "react";
import { PCHome } from "@/components";

export default function App() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<PCHome />
		</>
	);
}
