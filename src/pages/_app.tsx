import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "@/types/Page";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type AppPropsWithPage = AppProps & {
	Component?: Page;
};

export default function App({ Component, pageProps }: AppPropsWithPage) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<>
			{Component.title ? (
				<>
					<Head>
						{Component.description ? (
							<meta
								name="description"
								content={Component.description}
							/>
						) : null}
						<title>{Component.title}</title>
					</Head>
				</>
			) : null}
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
