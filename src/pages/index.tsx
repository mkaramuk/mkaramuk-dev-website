import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import "swiper/css";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Tool(props: { icon: string }) {
	return (
		<div
			className={twMerge(
				"w-[calc(100%-20px)] h-[100px] rounded-full flex items-center justify-center bg-white"
			)}
		>
			<Icon
				className={twMerge(
					"text-[80px]",
					"sm:text-[60px]",
					"md:text-[7 0px]"
				)}
				icon={props.icon}
			/>
		</div>
	);
}

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
					Learn more
				</button>
			</a>
		</div>
	);
}

export default function Home() {
	return (
		<main className="w-screen flex flex-col">
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Welcome to personel website of Muhammed Karamuk, a Full Stack Developer! Take a look to his articles about software development or explore open-source projects!"
				/>
				<title>Muhammed Karamuk - Jr. Full Stack Developer</title>
			</Head>
			<Navbar />
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
						Hi, I'm Muhammed
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
							A passionate jr. full stack developer
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
						<div
							className={twMerge(
								"text-center text-white font-mono text-[13px]",
								"sm:text-[15px]",
								"md:text-[18px]"
							)}
						>
							The technologies that I have experienced
						</div>
						<div className="h-[50px]" />
						<Swiper
							modules={[Autoplay]}
							slidesPerView={1}
							breakpoints={{
								"768": {
									slidesPerView: 3,
								},
								"1200": {
									slidesPerView: 7,
								},
							}}
							autoplay={{
								delay: 1000,
								disableOnInteraction: false,
								pauseOnMouseEnter: false,
							}}
							loopedSlides={5}
							loopPreventsSliding
							speed={500}
						>
							{[
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
								"flat-color-icons:linux",
							].map((x, i) => (
								<SwiperSlide key={i}>
									<div className="flex justify-center w-full">
										<Tool icon={x} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
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
						<div className={twMerge("text-[40px] font-bold")}>
							Who am I?
						</div>
						<div>
							I am an enthusiastic full stack developer deeply
							committed to the open-source community and emerging
							technologies. My journey in coding began in 2014 as
							a hobby, evolving into a passion that led me to
							explore software development. Since 2022, I have
							dedicated myself to honing my skills and pursuing a
							career path as a professional software developer.
						</div>
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
						<img src="/mkaramuk.jpg" />
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
					Works
				</h2>
				<div
					className={twMerge(
						"grid gap-4 grid-rows-3 grid-cols-1",
						"md:grid-rows-3 md:grid-cols-2",
						"lg:grid-cols-3"
					)}
				>
					<Work
						href="https://github.com/mkaramuk/cuzi"
						name="Cuzi"
						summary="Reverse proxy implementation in Rust"
						about="Cuzi is an educational Rust-based reverse proxy application, akin to nginx. Ideal for learning Rust and modern web server technologies."
					/>
					<Work
						href="https://github.com/tracikkaynakplatform/kos"
						name="KOS"
						summary="Multiple Kubernetes cluster management application"
						about="KOS project is a set of client/server utilities aimed at easing (multiple) Kubernetes cluster generation and management. It utilizes the ClusterAPI project for this purpose and supports all of its provider backends  (Docker and AWS for now). It provides a UI via Electron.js and React.js"
					/>
					<Work
						href="https://github.com/mkaramuk/surukoto"
						name="Surukoto"
						summary="JIRA alternative project tracking application"
						about="Surukoto is an open-source project management application built
						on top of the Nest.js backend framework and PostgreSQL as
						database. It utilizes React.js and TailwindCSS for the frontend
						stack. The application provides features similar to Jira and Trello,
						allowing users to manage tasks and projects."
					/>
					<Work
						href="https://github.com/mkaramuk/konstruct"
						name="Konstruct"
						summary="Kubernetes cluster provisioner on GCP"
						about="Konstruct is a collection of Ansible, Terraform, and Bash Scripts
						designed to provision a Kubernetes cluster on Google Cloud
						Platform using Compute Engine."
					/>
				</div>
			</section>
			{/* <a
				href="https://www.flaticon.com/free-icons/terminal"
				title="terminal icons"
			>
				Terminal icons created by Royyan Wijaya - Flaticon
			</a> */}
		</main>
	);
}
