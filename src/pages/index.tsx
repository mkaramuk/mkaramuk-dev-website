import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NavbarLinkProps {
	children: ReactNode;
	href?: string;
	delay?: number;
}

function NavbarLink(props: NavbarLinkProps) {
	return (
		<motion.div
			transition={{
				duration: 1,
				delay: props.delay,
			}}
			initial={{
				opacity: 0,
				y: -230,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			className={twMerge(
				"text-white font-bold rounded-full transition-all duration-300 p-4",
				"hover:cursor-pointer hover:bg-gray-100 hover:text-black"
			)}
		>
			<a href={props.href}>{props.children}</a>
		</motion.div>
	);
}

function Tool(props: { icon: string }) {
	return (
		<div
			className={twMerge(
				"w-[calc(100%-20px)] h-[100px] rounded-full flex items-center justify-center p-2 bg-white"
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
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		function scroll(e: Event) {
			setIsScrolled(window.scrollY > 0);
		}

		window.addEventListener("scroll", scroll);
		return () => window.removeEventListener("scroll", scroll);
	}, []);

	return (
		<main className="w-full h-screen">
			<nav
				className={twMerge(
					"fixed flex items-center justify-center w-full z-10"
				)}
			>
				<div
					className={twMerge(
						"transition-all duration-200 flex p-3 w-full justify-between",
						`${
							isScrolled
								? "bg-gray-800 sm:rounded-lg shadow-2xl"
								: "bg-none shadow-none rounded-none"
						}`,
						"sm:justify-center sm:gap-[100px] sm:w-fit sm:mt-4"
					)}
				>
					<NavbarLink delay={1} href="/projects">
						Projects
					</NavbarLink>
					<NavbarLink delay={1.5} href="/about">
						About
					</NavbarLink>
					<NavbarLink delay={2} href="/blog">
						Blog
					</NavbarLink>
				</div>
			</nav>
			<section className="w-full h-full flex flex-col px-4 bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] snap-start snap-normal">
				<div className="w-full flex justify-center pt-[100px]">
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
							"w-[150px] border-2",
							"sm:w-[200px]",
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
					animate={{
						opacity: 1,
					}}
					className="w-full flex flex-col items-center justify-center mt-5 opacity-0"
				>
					<div
						className={twMerge(
							"text-white text-[21px] font-bold font-mono",
							"sm:text-[30px]"
						)}
					>
						Hi, I'm Muhammed
					</div>
				</motion.div>
				<div className="w-full flex justify-center">
					<div
						className={twMerge(
							"flex items-center justify-center text-white font-bold font-mono",
							"text-[8px]",
							"sm:text-[15px]"
						)}
					>
						<div className="typewriter">
							A passionate devops and full stack developer
						</div>
					</div>
				</div>

				<div className="w-full h-full flex items-center justify-center">
					<div className="justify-center flex flex-wrap w-full gap-2">
						<div
							className={twMerge(
								"text-center text-white font-mono text-[13px]",
								"sm:text-[15px]",
								"md:text-[18px] md:mt-[10px]"
							)}
						>
							The technologies that I have experienced
						</div>
						<div className="w-[99vw]">
							<Slider
								dots={false}
								infinite
								slidesToScroll={1}
								slidesToShow={5}
								autoplay
								speed={5000}
								autoplaySpeed={0}
								cssEase="linear"
								arrows={false}
								responsive={[
									{
										breakpoint: 640,
										settings: {
											slidesToShow: 1,
										},
									},
									{
										breakpoint: 768,
										settings: {
											slidesToShow: 3,
										},
									},
								]}
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
									"logos:typescript-icon",
									"flat-color-icons:linux",
								].map((x, i) => (
									<Tool key={i} icon={x} />
								))}
							</Slider>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full h-full px-4 bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)]  snap-start snap-normal"></section>
		</main>
	);
}
