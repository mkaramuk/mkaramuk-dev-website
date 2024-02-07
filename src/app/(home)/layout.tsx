import { Navbar } from "@/components/layout/Navbar";
import { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";

interface RootLayoutProps {
	children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
