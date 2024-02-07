import { Metadata } from "next";
import moment from "moment";

export const metadata: Metadata = {
	title: "Muhammed Karamuk - Blog",
	description:
		"Yazılım geliştirme, devops, algoritma, veri yapıları, programlama ve bilgisayar bilimi ile ilgili makaleleri inceleyin.",
};

interface PostItemProps {
	title: string;
	publishDate: Date;
	shortDescription: string;
	image?: string;
	order?: "left" | "right";
}

function PostItem(props: PostItemProps) {
	function renderImage() {
		if (!!!props.image) {
			return;
		}
		return (
			<img
				key="image"
				className="w-[100px] object-cover shadow-xl rounded-lg"
				src={props.image}
			/>
		);
	}

	function renderContent() {
		return (
			<div key="content" className="flex flex-col text-black">
				<h2>{props.title}</h2>
				<div className="text-gray-400 text-[13px]">
					{moment(props.publishDate).format("DD.MM.YYYY")}
				</div>
				<p className="font-sans text-[13px]">
					{props.shortDescription.substring(0, 150) + "..."}
					<span className="text-blue-500">okumaya devam et</span>
				</p>
			</div>
		);
	}

	const elements = [renderImage(), renderContent()];

	if (props.order === "left") {
		elements.reverse();
	}
	return (
		<div className="transition-all duration-200 rounded-lg bg-gray-300 p-3 gap-5 flex min-h-[130px] w-[50%] hover:cursor-pointer hover:translate-y-[-2px] hover:bg-gray-100">
			{elements}
		</div>
	);
}

export default async function Blog() {
	return (
		<main className="w-full min-h-[100vh] bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(46,46,46,1)_100%)] pt-[100px] pb-[100px]">
			<div className="text-white flex flex-col items-center gap-3 w-full">
				{[1, 2, 3].map((x, i) => (
					<PostItem
						key={i}
						title={`Makale ${i}`}
						publishDate={new Date(Date.now())}
						image={
							i % 3 == 0
								? "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
								: undefined
						}
						shortDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					/>
				))}
			</div>
		</main>
	);
}
