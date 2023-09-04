import Head from "next/head";

export default function Blog() {
	return (
		<main className="w-full h-screen bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex items-center justify-center">
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Explore Muhammed Karamuk's articles about software development, devops and other computer science stuff."
				/>
				<title>Muhammed Karamuk - Blog</title>
			</Head>
			<div className="text-white font-bold text-[30px]">
				Coming soon...
			</div>
		</main>
	);
}
