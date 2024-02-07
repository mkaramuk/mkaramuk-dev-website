"use client";
import { motion } from "framer-motion";
import { Slider } from "@/components/homepage/Slider";
import { twMerge } from "tailwind-merge";

export function TechSlider() {
	return (
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
	);
}
