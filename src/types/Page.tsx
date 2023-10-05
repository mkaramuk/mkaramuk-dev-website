import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type Page<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
	title?: string;
	description?: string;
};
