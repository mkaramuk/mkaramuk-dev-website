import { projects } from "@/constants/projects";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";
import { Slider } from "@/components/homepage/Slider";

export const metadata: Metadata = {
	title: 'Muhammed Karamuk - "Kabuğun olduğu yerde bir yol vardır"',
	description:
		"Muhammed Karamuk'un kişisel web sayfasına hoş geldiniz! Ben kimim? Makalelerime göz atabilir veya projeler sayfasından açık kaynak çalışmalarımı inceleyebilirsiniz!",
};

interface WorkProps {
	name: string;
	summary: string;
	about: string;
	href: string;
}

function Work(props: WorkProps) {
	return (
		<div
			className={twMerge(
				"bg-white shadow-xl rounded-lg p-3 flex flex-col transition-all duration-200 border-2 border-transparent",
				"hover:scale-105 hover:rotate-1 hover:border-2 hover:border-cyan-300"
			)}
		>
			<h3 className="font-bold font-mono text-[20px]">{props.name}</h3>
			<div className="text-gray-500 mb-3">{props.summary}</div>
			<div className="mb-4">{props.about}</div>
			<div className="flex-1" />
			<a href={props.href} target="_blank">
				<button
					className={twMerge(
						"transition-all duration-500 self-start p-2 bg-cyan-600 text-white rounded-lg shadow-xl",
						"hover:cursor-pointer hover:bg-cyan-700"
					)}
				>
					Daha fazla..
				</button>
			</a>
		</div>
	);
}

export default function Home() {
	return (
		<main className="w-screen flex flex-col">
			<section className="w-full h-screen bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex flex-col  items-center justify-center">
				<div className="w-full flex justify-center">
					<img
						className={twMerge(
							"w-[250px] border border-cyan-400 rounded-full shadow-lg",
							"lg:w-[300px] lg:border-2",
							styles["main-image"]
						)}
						src="/photo.jpeg"
					/>
				</div>
				<div className="h-[20px]" />
				<div
					className={twMerge(
						"w-full flex flex-col items-center justify-center",
						styles["greeting-text"]
					)}
				>
					<h1
						className={twMerge(
							"text-white text-[18px] font-bold font-mono",
							"sm:text-[30px]"
						)}
					>
						Merhaba, ben Muhammed
					</h1>
				</div>
				<div className="w-full flex justify-center">
					<div
						className={twMerge(
							"flex items-center justify-center text-white font-bold font-mono",
							"text-[10px]",
							"sm:text-[15px]"
						)}
					>
						<h2 className="typewriter">Full Stack Developer</h2>
					</div>
				</div>
				<div className="h-[30px]" />
				<div className="w-full flex items-center justify-center">
					<div
						className={twMerge(
							"justify-center flex flex-wrap w-full",
							styles["tech-slider"]
						)}
					>
						<h2
							className={twMerge(
								"text-center text-white font-mono text-[13px]",
								"sm:text-[15px]",
								"md:text-[18px]"
							)}
						>
							Tecrübe sahibi olduğum teknolojiler
						</h2>
						<div className="h-[50px]" />
						<Slider
							icons={[
								"logos:docker-icon",
								"logos:kubernetes",
								"vscode-icons:file-type-cpp3",
								"logos:nodejs",
								"logos:terraform-icon",
								"logos:rust",
								"logos:python",
								"logos:ansible",
								"logos:react",
								"logos:typescript-icon",
								"logos:nextjs",
								"flat-color-icons:linux",
							]}
						/>
					</div>
				</div>
			</section>
			<section
				id="hakkimda"
				className={twMerge(
					"w-full bg-[linear-gradient(180deg,rgba(46,46,46,1)_0%,rgba(0,0,0,1)_50%,rgba(46,46,46,1)_100%)] flex flex-col items-center px-[30px] py-[100px]",
					"md:px-[100px]"
				)}
			>
				<div
					className={twMerge(
						"max-w-[1000px] flex w-full items-center flex-col-reverse",
						"md:flex-row md:justify-between",
						"lg:justify-center"
					)}
				>
					<div
						className={twMerge(
							"flex flex-col gap-[50px] text-white font-mono w-full text-[14px]",
							"md:w-[300px] md:text-[14px]",
							"lg:w-[700px] lg:text-[18px]"
						)}
					>
						<h2 className={twMerge("text-[40px] font-bold")}>
							Ben Kimim?
						</h2>
						<p>
							Açık kaynak topluluğuna bağlı, öğrenmeyi ve
							öğretmeyi seven bir yazılım geliştiricisiyim.
							Kodlama serüvenim, 2014 yılında sadece bir hobi
							olarak başladı, ancak zaman içinde bu hobim bir
							tutkuya dönüştü. Bu tutku, beni sürekli olarak yeni
							şeyler öğrenmeye ve keşfetmeye yönlendirdi. 2022
							yılı itibariyle, becerilerimi daha fazla
							geliştirmeye ve profesyonel bir yazılım
							geliştiricisi olarak kariyer edinme yolculuğuma
							başladım.
						</p>
					</div>
					<div
						className={twMerge(
							"h-[50px] w-[10px]",
							"lg:w-[100px]",
							"xl:w-[300px]"
						)}
					/>

					<div
						className={twMerge(
							"shadow-xl w-[200px] h-[200px] rounded-2xl overflow-hidden flex items-center justify-center",
							"md:w-[250px] md:h-[250px]",
							"lg:w-[300px] lg:h-[300px]",
							"xl:w-[400px] xl:h-[400px]"
						)}
					>
						<img alt="Açık kaynak" src="/opensource.png" />
					</div>
				</div>
			</section>
			<section
				id="calismalarim"
				className={twMerge(
					"w-full bg-[linear-gradient(180deg,rgba(46,46,46,1)_0%,rgba(0,0,0,1)_50%,rgba(46,46,46,1)_100%)] px-[30px] py-[100px] flex justify-center",
					"md:px-[100px]"
				)}
			>
				<div
					className={twMerge(
						"max-w-[1000px] w-full flex flex-col items-center"
					)}
				>
					<h2
						className={twMerge(
							"w-full text-center text-white text-[40px] font-bold mb-10",
							"sm:text-right"
						)}
					>
						Çalışmalarım
					</h2>
					<div
						className={twMerge(
							"grid gap-4 grid-rows-3 grid-cols-1",
							"md:grid-rows-3 md:grid-cols-2",
							"lg:grid-cols-3"
						)}
					>
						{projects.map((x, i) => (
							<Work
								key={i}
								name={x.name}
								about={x.about}
								href={x.href}
								summary={x.summary}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
