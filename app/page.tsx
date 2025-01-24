"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import AILogo from "@/components/logo";
import ArrowIcon from "@/components/icons/arrow";

import styles from "./home.module.css";
import Socials from "@/components/socials";

const links = [
	{ href: "/about", text: "About" },
	{ href: "/webdev", text: "Web Dev" },
	{
		href: "https://docs.google.com/document/d/1R1DaFmChMq50IXdIXINOK4SNrklaIVKgVi7hUTG6-ls/edit?usp=sharing",
		text: "Resume",
		external: true,
	},
	{ href: "/other", text: "Others" },
];

function getIndexFromParam(param: string | null): number {
	switch (param) {
		case "webdev":
			return 1;
		case "other":
			return 3;
		case "about":
		default:
			return 0;
	}
}

export default function Home() {
	const router = useRouter();
	const params = useSearchParams();

	const [current, setCurrent] = useState(
		getIndexFromParam(params.get("from")),
	);
	const [multiplier, setMult] = useState(0);
	const [transitionStarted, setTransitionStarted] = useState(
		typeof params.get("from") === "string",
	);

	useEffect(() => {
		setTransitionStarted(false);
	}, []);

	const linkRefs = useRef<(HTMLAnchorElement | null)[]>(
		new Array(links.length),
	);

	const focusTarget = (target: number) => {
		let rounded;
		if (target === -1) {
			rounded = links.length - 1;
		} else {
			rounded = target % links.length;
		}
		linkRefs.current[rounded]?.focus();
	};

	const handleTarget = (target: number) => {
		if (target === 0 && current === links.length - 1) {
			setMult((prev) => prev + 1);
		} else if (target === links.length - 1 && current === 0) {
			setMult((prev) => prev - 1);
		}

		setCurrent(target);
	};

	return (
		<main
			className={`${styles.main} relative h-full w-full overflow-clip p-10 md:flex md:flex-col md:justify-between md:p-16`}
		>
			<div className="">
				<h1 className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span>
					<br />
					<span className="mt-6 inline-block">Ibitoye</span>
				</h1>
			</div>

			<nav
				className={styles.nav}
				style={{
					"--nav-rot": `${
						(360 / links.length) * current + multiplier * 360
					}deg`,
				}}
			>
				<div className={styles.nav_images}>
					<div className={styles.nav_center_wrapper}>
						{/* Nav Center */}
						<div className={`${styles.nav_center} text-type/40`}>
							<AILogo />
						</div>
					</div>
				</div>
				<div className={styles.nav_container}>
					{links.map(({ href, text, external }, i) => (
						<div
							key={href}
							className={`${styles.nav_link_container} m-auto text-5xl md:text-6xl`}
							style={{
								"--item-rot": `${360 - (360 / links.length) * i}deg`,
							}}
						>
							{external ? (
								<a
									href={href}
									ref={(el) => {
										linkRefs.current[i] = el;
									}}
									className="hover:text-primary focus:text-primary-light outline-hidden"
									onFocus={() => handleTarget(i)}
									target="_blank"
									rel="noreferrer"
								>
									{text}
								</a>
							) : (
								<Link
									href={href}
									ref={(el) => {
										linkRefs.current[i] = el;
									}}
									className="hover:text-primary focus:text-primary-light outline-hidden"
									onFocus={() => {
										handleTarget(i);
										router.prefetch(href);
									}}
									prefetch={false}
									onClick={(e) => {
										e.preventDefault();

										if (
											window.matchMedia(
												"(prefers-reduced-motion)",
											).matches
										) {
											router.push(href);
										} else {
											setTransitionStarted(true);
											// Do Anim Stuff
											setTimeout(() => {
												router.push(href);
											}, 600);
										}
									}}
								>
									{text}
								</Link>
							)}
						</div>
					))}
				</div>
			</nav>

			<button
				className={styles.nav_button_top}
				onClick={() => focusTarget(current + 1)}
			>
				<ArrowIcon className="rotate-180 md:-rotate-90" />
			</button>
			<button
				className={styles.nav_button_bottom}
				onClick={() => focusTarget(current - 1)}
			>
				<ArrowIcon className="md:rotate-90" />
			</button>

			<div className="mt-6 flex md:mt-0">
				<Socials
					classNameOverride
					className="border-type flex gap-2 rounded-sm border-2 px-2 py-2"
				/>
			</div>

			<div
				className={`absolute bottom-0 left-0 ${transitionStarted ? "h-full" : "h-0"} bg-base-light w-full overflow-hidden motion-safe:transition-all motion-safe:duration-500`}
			>
				<div
					className={`${styles.nav_link_copy_container} absolute bottom-[50dvh] left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center justify-center`}
				>
					<h2 className="w-min text-5xl md:text-6xl">
						{links[current].text}
					</h2>
				</div>
			</div>
		</main>
	);
}
