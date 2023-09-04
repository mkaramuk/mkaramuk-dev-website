import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Head from "next/head";
import Navbar from "@/layout/navbar";
import "swiper/css";

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

export default function Home() {
	return (
		<main className="w-screen h-screen bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)]">
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Welcome to home page of Muhammed Karamuk, a DevOps & Full Stack Developer! Take a look to his articles about software development or explore open-source projects!"
				/>
				<title>
					Muhammed Karamuk - DevOps & Full Stack Developer - Personal
					Website
				</title>
			</Head>
			<Navbar />
			<section className="w-full h-full flex flex-col  items-center justify-center">
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
					<div
						className={twMerge(
							"text-white text-[18px] font-bold font-mono",
							"sm:text-[30px]"
						)}
					>
						Hi, I'm Muhammed Karamuk
					</div>
				</motion.div>
				<div className="w-full flex justify-center">
					<div
						className={twMerge(
							"flex items-center justify-center text-white font-bold font-mono",
							"text-[10px]",
							"sm:text-[15px]"
						)}
					>
						<div className="typewriter">
							A passionate devops and full stack developer
						</div>
					</div>
				</div>
				<div className="h-[30px]" />
				<div className="w-full flex items-center justify-center">
					<div className="justify-center flex flex-wrap w-full">
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
					</div>
				</div>
			</section>
			{/* <section className="w-full h-fit bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] flex flex-col items-center">
				<div
					className={twMerge(
						"flex w-full justify-between items-center"
					)}
				>
					<motion.div
						ref={aboutRef}
						transition={{
							delay: 0.3,
							duration: 2,
						}}
						initial={{
							opacity: 0,
						}}
						animate={aboutAnimation}
						className={twMerge(
							"text-white text-[15px] font-mono",
							"sm:w-full sm:text-[22px]",
							"md:w-[500px]",
							"lg:w-[700px]"
						)}
					>
						I am an enthusiastic full stack developer deeply
						committed to the open-source community and emerging
						technologies. My journey in coding began in 2014 as a
						hobby, evolving into a passion that led me to explore
						software development and DevOps practices. Since 2022, I
						have dedicated myself to honing my skills and pursuing a
						career path as a professional software developer.
					</motion.div>
					<motion.img
						className={twMerge("w-6/12", "sm:w-3/12", "md:w-6/12")}
						src="/devops.png"
					/>
				</div>
			</section> */}
		</main>
	);
}
