import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Muhammed Karamuk - Hakkımda",
	description:
		"Muhammed Karamuk hakkında daha fazla bilgi edinin! Tutkulu bir full stack developer. Merhaba! Ben Muhammed. Yaklaşık 10 yıldır yazılım ile...",
};

export default function Hakkimda() {
	return (
		<main className="w-full h-screen bg-[linear-gradient(-90deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex items-center justify-center">
			<div className="text-white font-bold text-[30px]">Yakında...</div>
		</main>
	);
}
