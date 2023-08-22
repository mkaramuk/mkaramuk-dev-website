import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavbarLinkProps {
	children: ReactNode;
	href?: string;
	delay?: number;
}

function NavbarLink(props: NavbarLinkProps) {
	return (
		<motion.li
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
			className={twMerge("text-white font-bold", "hover:cursor-pointer")}
		>
			<a href={props.href}>{props.children}</a>
		</motion.li>
	);
}

export default function Home() {
	return (
		<main className="w-full h-screen bg-black ">
			<ul
				className={twMerge(
					"fixed p-3 flex w-full",
					"justify-between px-[20px]",
					"sm:justify-center sm:px-0 sm:gap-[100px]"
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
			</ul>
			<div className="w-full h-full px-4">
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
							"text-white text-[25px] font-bold font-mono",
							"sm:text-[30px]"
						)}
					>
						Hi, I'm Muhammed
					</div>
					<div
						className={twMerge(
							"text-white font-mono",
							"text-[13px]",
							"sm:text-[15px]"
						)}
					>
						A passionate devops and full stack developer
					</div>
				</motion.div>
			</div>
		</main>
	);
}
