import Sidebar from "./sidebar/Sidebar";
import { ReactNode } from "react";
import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={silkscreen.className}>
			<body>
				<div className="flex flex-col md:flex-row">
					<Sidebar />
					<main className="flex-1 p-4">{children}</main>
				</div>
			</body>
		</html>
	);
}
