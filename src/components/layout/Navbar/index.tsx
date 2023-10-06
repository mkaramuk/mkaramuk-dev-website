"use client";
import { navbarLinks } from "@/constants/navbar";
import { NavbarLink } from "./NavbarLink";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface NavbarProps {
	animate?: boolean;
}

export default function Navbar(props: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		function scroll() {
			setIsScrolled(window.scrollY > 0);
		}

		window.addEventListener("scroll", scroll);
		return () => window.removeEventListener("scroll", scroll);
	}, []);

	return (
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
				{navbarLinks.map((x, i) => (
					<NavbarLink key={i} delay={0.3 * (i + 1)} href={x.href}>
						{x.label}
					</NavbarLink>
				))}
			</div>
		</nav>
	);
}
