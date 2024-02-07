"use client";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";

interface ContactItemProps {
	icon: string;
	children: ReactNode;
	href: string;
}

export function ContactItem(props: ContactItemProps) {
	return (
		<a
			className="flex items-center gap-2"
			target="_blank"
			href={props.href}
		>
			<Icon className="text-white" icon={props.icon} />
			{props.children}
		</a>
	);
}
