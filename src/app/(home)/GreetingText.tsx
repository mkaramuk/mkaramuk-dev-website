"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function GreetingText() {
	return (
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
	);
}
