import { Page } from "@/types/Page";

const Blog: Page = () => {
	return (
		<main className="w-full h-screen bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex items-center justify-center">
			<div className="text-white font-bold text-[30px]">Yakında...</div>
		</main>
	);
};

Blog.title = "Muhammed Karamuk - Blog";
Blog.description =
	"Yazılım geliştirme, devops, algoritma, veri yapıları, programlama ve bilgisayar bilimi ile ilgili makaleleri inceleyin.";

export default Blog;
