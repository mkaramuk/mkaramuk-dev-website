import { navbarLinks } from "@/constants/navbar";
import { projects } from "@/constants/projects";
import { twMerge } from "tailwind-merge";
import { ContactItem } from "./ContactItem";
import contact from "@/constants/contact";

export function Footer() {
	return (
		<footer className="w-full bg-[linear-gradient(180deg,rgba(46,46,46,1)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_100%)] flex flex-col justify-center">
			<div
				className={twMerge(
					"w-full flex flex-col gap-5 px-[20px]",
					"sm:px-0 sm:flex-row sm:gap-[50px] sm:pt-[40px]"
				)}
			>
				<img
					className={twMerge(
						"h-[130px] w-[130px] self-center",
						"sm:self-start",
						"md:h-[200px] md:w-[200px]"
					)}
					src="/terminal.png"
				/>
				<div
					className={twMerge(
						"w-full grid grid-cols-1 grid-rows-1 grid-",
						"md:grid-cols-2",
						"lg:grid-cols-3"
					)}
				>
					<div className="flex flex-col gap-3">
						<h2 className="text-white font-sans font-bold text-[23px]">
							Sayfalar
						</h2>
						<div className="flex flex-col gap-3">
							{navbarLinks.map((x, i) => (
								<a
									className="text-white font-mono"
									key={i}
									href={x.href}
								>
									{x.label}
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white font-sans font-bold text-[23px]">
							Projeler
						</h2>
						<div className="flex flex-col gap-3">
							{projects.slice(0, 5).map((x, i) => (
								<a
									className="text-white font-mono"
									key={i}
									href={x.href}
								>
									{x.name}
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3 text-white font-sans">
						<h2 className="font-bold text-[23px]">İletişim</h2>
						<div className="flex flex-col gap-3 font-mono">
							<ContactItem
								icon="mdi:email-outline"
								href={`mailto:${contact.email}`}
							>
								{contact.email}
							</ContactItem>
							<ContactItem
								icon="mdi:github"
								href={`https://github.com/${contact.github}`}
							>
								@{contact.github}
							</ContactItem>

							<ContactItem
								icon="mdi:linkedin"
								href={`https://linkedin.com/in/${contact.linkedin}`}
							>
								Muhammed Karamuk
							</ContactItem>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[30px]" />
			<div className="w-full text-center text-white">
				Bu web sayfası{" "}
				<a className="underline" href="https://nextjs.org/">
					Next.js
				</a>{" "}
				ve 💙 ile
				<a href="https://archlinux.org/">
					<img
						className="inline-block h-[30px]"
						src="arch-linux.png"
					/>
				</a>{" "}
				üzerinde yapılmıştır ©️ 2023{" - "}
				<a
					href="https://www.flaticon.com/free-icons/terminal"
					title="terminal icons"
				>
					Terminal icons created by Royyan Wijaya - Flaticon
				</a>
			</div>
		</footer>
	);
}
