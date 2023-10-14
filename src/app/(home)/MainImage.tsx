"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function MainImage() {
	return (
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
	);
}
