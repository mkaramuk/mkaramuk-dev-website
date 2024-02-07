import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface NavbarLinkProps {
	children: ReactNode;
	href: string;
	delay?: number;
}

export function NavbarLink(props: NavbarLinkProps) {
	return (
		<Link
			href={props.href}
			className={twMerge(
				"text-white text-[13px] font-bold rounded-full transition-all duration-300 p-4",
				"hover:cursor-pointer hover:bg-gray-100 hover:text-black",
				"md:text-[18px]"
			)}
		>
			{props.children}
		</Link>
	);
}
