"use client";
import { Icon } from "@iconify/react";
import styles from "./style.module.css";
import { twMerge } from "tailwind-merge";

export interface SliderProps {
	icons: string[];
}

export function Slider(props: SliderProps) {
	function renderItems() {
		return (
			<div className={styles["logos-slide"]}>
				{props.icons.map((x, i) => (
					<div
						key={i}
						className="inline-flex items-center justify-center p-3 bg-white rounded-full w-[250px] h-[130px] mx-5"
					>
						<Icon
							className={twMerge(
								"text-[80px]",
								"sm:text-[60px]",
								"md:text-[70px]",
								"lg:text-[80px]"
							)}
							icon={x}
						/>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className={styles.logos}>
			{renderItems()}
			{renderItems()}
		</div>
	);
}
