"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface NavbarLinkProps {
	children: ReactNode;
	href?: string;
	delay?: number;
	animate?: boolean;
}

export function NavbarLink(props: NavbarLinkProps) {
	return props.animate ? (
		<motion.a
			href={props.href}
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
				"text-white text-[13px] font-bold rounded-full transition-all duration-300 p-4",
				"hover:cursor-pointer hover:bg-gray-100 hover:text-black",
				"md:text-[18px]"
			)}
		>
			{props.children}
		</motion.a>
	) : (
		<a
			href={props.href}
			className={twMerge(
				"text-white text-[13px] font-bold rounded-full transition-all duration-300 p-4",
				"hover:cursor-pointer hover:bg-gray-100 hover:text-black",
				"md:text-[18px]"
			)}
		>
			{props.children}
		</a>
	);
}
