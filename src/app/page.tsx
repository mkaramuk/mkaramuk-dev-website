"use client";

import { Slider } from "@/components/homepage/Slider";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface WorkProps {
	name: string;
	summary: string;
	about: string;
	href: string;
}

function Work(props: WorkProps) {
	return (
		<div className="bg-white shadow-xl rounded-lg p-3 flex flex-col">
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
					<motion.img
						initial={{
							opacity: 0,
							y: -100,
						}}
						transition={{
							duration: 2,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						className={twMerge(
							"rounded-full shadow-lg border-white",
							"w-[250px] border-2",
							"lg:w-[300px] lg:border-4"
						)}
						src="/photo.jpeg"
					/>
				</div>
				<motion.div
					transition={{
						delay: 1,
						duration: 4,
					}}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					className="w-full flex flex-col items-center justify-center"
				>
					<h1
						className={twMerge(
							"text-white text-[18px] font-bold font-mono",
							"sm:text-[30px]"
						)}
					>
						Merhaba, ben Muhammed
					</h1>
				</motion.div>
				<div className="w-full flex justify-center">
					<div
						className={twMerge(
							"flex items-center justify-center text-white font-bold font-mono",
							"text-[10px]",
							"sm:text-[15px]"
						)}
					>
						<h2 className="typewriter">
							Tutkulu bir full stack developer
						</h2>
					</div>
				</div>
				<div className="h-[30px]" />
				<div className="w-full flex items-center justify-center">
					<motion.div
						transition={{
							delay: 2,
							duration: 4,
						}}
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						className="justify-center flex flex-wrap w-full"
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
						></Slider>
					</motion.div>
				</div>
			</section>
			<section
				className={twMerge(
					"w-full bg-[linear-gradient(180deg,rgba(46,46,46,1)_0%,rgba(0,0,0,1)_50%,rgba(46,46,46,1)_100%)] flex flex-col items-center px-[30px] py-[100px]",
					"md:px-[100px]"
				)}
			>
				<div
					className={twMerge(
						"flex w-full items-center flex-col-reverse",
						"md:flex-row md:justify-between",
						"lg:justify-center"
					)}
				>
					<div
						className={twMerge(
							"flex flex-col gap-[50px] text-white font-mono w-full text-[14px]",
							"md:w-[300px] md:text-[14px]",
							"lg:w-[500px] lg:text-[18px]",
							"xl:w-[700px] xl:text-[23px]"
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
							"shadow-xl w-[200px] h-[200px] rounded-2xl border-2 border-white overflow-hidden flex items-center justify-center",
							"md:w-[250px] md:h-[250px]",
							"lg:w-[300px] lg:h-[300px]",
							"xl:w-[400px] xl:h-[400px]"
						)}
					>
						<img alt="Muhammed Karamuk" src="/mkaramuk.jpg" />
					</div>
				</div>
			</section>
			<section
				className={twMerge(
					"w-full bg-[linear-gradient(180deg,rgba(46,46,46,1)_0%,rgba(0,0,0,1)_50%,rgba(46,46,46,1)_100%)] flex flex-col items-center px-[30px] py-[100px]",
					"md:px-[100px]"
				)}
			>
				<h2
					className={twMerge(
						"w-full text-right text-white text-[40px] font-bold mb-10"
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
			</section>
		</main>
	);
}
