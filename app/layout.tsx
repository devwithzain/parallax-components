import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Cards Parallax",
	description: "Cards Parallax",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
