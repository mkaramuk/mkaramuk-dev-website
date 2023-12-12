import { Post } from "@/components/blog/Post";
import fm from "front-matter";
import { readFileSync } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cwd } from "process";

interface PostMetadata {
	title: string;
	image: string;
	publishDate: string;
	category?: string;
	description?: string;
}

export default async function Page() {
	const markdown = readFileSync("src/posts/merhaba.mdx").toString("utf-8");
	const content = fm<PostMetadata>(markdown);

	return (
		<Post
			category={content.attributes.category}
			publishDate={new Date(Date.now())}
			title={content.attributes.title}
			image={content.attributes.image}
		>
			<MDXRemote source={content.body} />
		</Post>
	);
}
