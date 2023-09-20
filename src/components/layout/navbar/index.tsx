import { NavbarLink } from "@/components/layout/navbar/NavbarLink";
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
				<NavbarLink delay={0.3} href="/">
					Home
				</NavbarLink>
				<NavbarLink delay={0.6} href="/projects">
					Projects
				</NavbarLink>
				<NavbarLink delay={0.9} href="/about">
					About
				</NavbarLink>
				<NavbarLink delay={1.2} href="/blog">
					Blog
				</NavbarLink>
			</div>
		</nav>
	);
}
