import { Page } from "@/types/Page";

const Projects: Page = () => {
	return (
		<main className="w-full h-screen bg-[linear-gradient(-90deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex items-center justify-center">
			<div className="text-white font-bold text-[30px]">Yakında...</div>
		</main>
	);
};

Projects.title = "Muhammed Karamuk - Projeler";
Projects.description =
	"Açık kaynak çalışmalarıma göz atın. Konfigürasyon yönetim aracı Dango, proje yönetim aracı Rika ve daha fazlası.";

export default Projects;
