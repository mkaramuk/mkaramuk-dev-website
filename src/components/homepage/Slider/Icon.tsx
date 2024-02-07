"use client";
import { Icon as Iconify } from "@iconify/react";
import { twMerge } from "tailwind-merge";

export function SliderIcon(props: { icon: string }) {
	return (
		<Iconify
			className={twMerge(
				"text-[80px]",
				"sm:text-[60px]",
				"md:text-[70px]",
				"lg:text-[80px]"
			)}
			icon={props.icon}
		/>
	);
}
