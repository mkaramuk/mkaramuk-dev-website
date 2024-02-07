import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: 'Muhammed Karamuk - "Where there is a shell, there is a"',
	description:
		"Ben kimim? Açık kaynak topluluğuna bağlı, örenmeyi ve öğretmeyi seven bir yazılım geliştiricisiyim. Makalelerime göz atabilir veya açık kaynak çalışmalarımı inceleyebilirsiniz.",
};

interface RootLayoutProps {
	children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html>
			<head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-2EY8024F4B"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2EY8024F4B');`,
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
