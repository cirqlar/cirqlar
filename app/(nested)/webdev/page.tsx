"use client";

import { useRef, useState } from "react";

import AILogo from "@/components/logo";

import styles from "./webdev.module.css";

const links = ["Experience", "Skills", "Projects"];

export default function WebDevPage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const contentRefs = useRef<(HTMLDivElement | null)[]>(
		new Array(links.length),
	);

	const compensation = (currentIndex - 1) * -1;

	const handleClick = (index: number) => {
		setCurrentIndex(index);

		contentRefs.current[currentIndex]?.classList.remove(
			styles.from_bottom,
			styles.from_top,
			styles.to_bottom,
			styles.to_top,
		);
		contentRefs.current[index]?.classList.remove(
			styles.from_bottom,
			styles.from_top,
			styles.to_bottom,
			styles.to_top,
		);

		if (currentIndex < index) {
			contentRefs.current[currentIndex]?.classList.add(styles.to_top);
			contentRefs.current[index]?.classList.add(styles.from_bottom);
		} else {
			contentRefs.current[currentIndex]?.classList.add(styles.to_bottom);
			contentRefs.current[index]?.classList.add(styles.from_top);
		}
	};

	return (
		<div className={`${styles.root} flex min-h-0 min-w-0 flex-col`}>
			<div className={styles.square}>
				<AILogo className="text-type/40 h-full w-full object-contain" />
				<div className={styles.web_links_container}>
					{links.map((link, index) => (
						<button
							key={link}
							onClick={() => handleClick(index)}
							disabled={index == currentIndex}
							className={`${styles.web_links} block text-xl font-bold disabled:text-2xl disabled:text-slate-300 lg:text-2xl lg:disabled:text-3xl`}
							style={{ "--rot-mult": `${index - currentIndex}` }}
						>
							{link}
						</button>
					))}
				</div>
				<div
					className={styles.up_left}
					style={{ "--compensation": `${compensation}` }}
				>
					<AILogo className="text-type/40" />
				</div>
				<div
					className={styles.down_left}
					style={{ "--compensation": `${compensation}` }}
				>
					<AILogo className="text-type/40" />
				</div>
				<div
					className={styles.up_right}
					style={{ "--compensation": `${compensation}` }}
				></div>
				<div
					className={styles.down_right}
					style={{ "--compensation": `${compensation}` }}
				></div>
				<div
					className={`${styles.center} border-type absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[length:var(--border-thickness)] lg:h-32 lg:w-32`}
				></div>
			</div>
			<div className={styles.web_dev_container}>
				<h2 className="w-min text-5xl text-black transition-all duration-[var(--web-time)] group-[.open]/client:scale-50 group-[.open]/client:text-inherit md:text-6xl">
					Web Dev
				</h2>
			</div>
			<div className="bg-base-light/50 relative z-20 mt-40 flex-1 overflow-hidden rounded-sm transition-all delay-[var(--web-time)] duration-[var(--web-time)] group-[:not(.open)]/client:opacity-0 md:mr-[calc(var(--length)+16px)] md:mt-0 md:min-w-96">
				<div
					className={`${styles.from_top} ${styles.content} px-4 py-5`}
					ref={(el) => {
						contentRefs.current[0] = el;
					}}
				>
					<ul>
						<li className="mb-4">
							<div className="mb-2 items-baseline md:flex">
								<h3 className="text-lg font-bold">
									Helicarrier Studio
								</h3>
								<span className="text-xs md:ml-2">
									Aug 2021 - Present
								</span>
							</div>
							<p className="mb-2">
								Front end and mobile development of various apps
								inlcuding responsibilities such as:
							</p>
							<ul className="ml-8 list-disc">
								<li>
									Implementing features and designs taking
									into account stakeholder goals and quality
									assurance feedback
								</li>
								<li>Managing release coordination</li>
								<li>
									Handling optimization and improvements of
									apps and services including large scale
									rewrites and refactors without breaking
									compatibility
								</li>
							</ul>
						</li>
						<li className="mb-4">
							<div className="mb-2 items-baseline md:flex">
								<h3 className="text-lg font-bold">
									Crenet Techlabs
								</h3>
								<span className="text-xs md:ml-2">
									Aug 2020 - Aug 2021
								</span>
							</div>
							<p>
								Front end development of web apps for varied
								clients
							</p>
						</li>
					</ul>
				</div>
				<div
					className={`${styles.content} p-4`}
					ref={(el) => {
						contentRefs.current[1] = el;
					}}
				>
					<ul>
						<li className="mb-4">
							<h3 className="mb-2 text-lg font-bold">At Work</h3>
							<p>
								Typescript, Nextjs, React, React Native, Nodejs,
								Vue, Git, Graphql
							</p>
						</li>
						<li className="mb-4">
							<h3 className="mb-2 text-lg font-bold">
								Elsewhere
							</h3>
							<p>Rust, C++, Solidjs</p>
						</li>
					</ul>
				</div>
				<div
					className={`${styles.content} p-4`}
					ref={(el) => {
						contentRefs.current[2] = el;
					}}
				>
					<ul>
						<li className="mb-4">
							<div className="flex items-baseline">
								<h3 className="mb-2 text-lg font-bold">
									This Website
								</h3>
								<a
									href="https://github.com/cirqlar/cirqlar"
									target="_blank"
									rel="noreferrer"
									className="ml-2 text-xs underline underline-offset-4"
								>
									Github
								</a>
							</div>
							<span className="mb-2 block">
								Made with: Typescript, Nextjs, React, Tailwind
							</span>
						</li>
						<li className="mb-4">
							<div className="flex items-baseline">
								<h3 className="mb-2 text-lg font-bold">
									Ishrai
								</h3>
								<a
									href="https://github.com/cirqlar/ishrai"
									target="_blank"
									rel="noreferrer"
									className="ml-2 text-xs underline underline-offset-4"
								>
									Github
								</a>
								<a
									href="https://ishrai.vercel.app/"
									target="_blank"
									rel="noreferrer"
									className="ml-2 text-xs underline underline-offset-4"
								>
									Site
								</a>
							</div>
							<p className="mb-2">
								Freelance project. Marketing website made for an
								NGO.
							</p>
							<span className="text-xs">
								Made with: Nextjs, React, Tailwind, Forestry.io
								(now TinaCMS)
							</span>
						</li>
						<li className="mb-4">
							<div className="flex items-baseline">
								<h3 className="mb-2 text-lg font-bold">Greg</h3>
								<a
									href="https://github.com/cirqlar/greg"
									target="_blank"
									rel="noreferrer"
									className="ml-2 text-xs underline underline-offset-4"
								>
									Github
								</a>
							</div>
							<p className="mb-2">
								An RSS aggregator and notifier made for personal
								use.
							</p>
							<span className="text-xs">
								Made with: Rust, Typescript, React, Vite,
								Tailwind, SQL
							</span>
						</li>
						<li>
							See more on{" "}
							<a
								href="https://github.com/cirqlar"
								target="_blank"
								rel="noreferrer"
								className="underline underline-offset-4"
							>
								Github
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
