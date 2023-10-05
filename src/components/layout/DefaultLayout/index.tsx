import { ReactNode } from "react";

export interface DefaultLayoutProps {
	title?: string;
	description?: string;
	children?: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
	return <div>{props.children}</div>;
}
