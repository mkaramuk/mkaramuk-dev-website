import moment from "moment";
import { ReactNode } from "react";

export interface PostProps {
	title: string;
	publishDate: Date | string;
	category?: string;
	image?: string;
	children?: ReactNode;
}

export function Post(props: PostProps) {
	function renderCategory() {
		let category = props.category;

		if (!!category) {
			category = "Genel";
		}
		// TODO: Change category name to a link that navigates to other posts under that category.
		return <span className="font-bold">{category}</span>;
	}

	function renderDateAndCategory() {
		let date = "";

		if (typeof props.publishDate === "string") {
			date = props.publishDate;
		} else {
			date = moment(props.publishDate).format("DD.MM.YYYY");
		}
		return (
			<div>
				<span className="font-bold">{date}</span> tarihinde{" "}
				{renderCategory()} kategorisi altında yayınlandı
			</div>
		);
	}

	function renderImage() {
		if (!!props.image) {
			return (
				<img
					className="w-[100%] object-cover h-[350px] rounded-lg self-center"
					src={props.image}
				/>
			);
		}
	}

	return (
		<main className="w-full min-h-[100vh] items-center bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] text-white pt-[150px] pb-[100px] flex flex-col">
			<div className="flex flex-col w-[50%] gap-3">
				{renderImage()}
				<h1>{props.title}</h1>
				<div className="text-gray-500">{renderDateAndCategory()}</div>
				<article>{props.children}</article>
			</div>
		</main>
	);
}
