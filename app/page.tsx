"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AILogo from "@/components/logo";
import ArrowIcon from "@/components/icons/arrow";
import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";

import styles from "./home.module.css";

const links = [
	{ href: "/about", text: "About" },
	{ href: "/webdev", text: "Web Dev" },
	{ href: "/gamedev", text: "Game Dev" },
	{
		href: "https://docs.google.com/document/d/1R1DaFmChMq50IXdIXINOK4SNrklaIVKgVi7hUTG6-ls/edit?usp=sharing",
		text: "Resume",
		external: true,
	},
	{ href: "/other", text: "Others" },
];

export default function Home() {
	const router = useRouter();

	const [current, setCurrent] = useState(0);
	const [multiplier, setMult] = useState(0);
	const [transitionStarted, setTransitionStarted] = useState(false);

	const linkRefs = useRef<(HTMLAnchorElement | null)[]>(
		new Array(links.length)
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
			className={`${styles.main} w-full h-full overflow-clip relative p-10 md:p-16 md:flex md:flex-col md:justify-between`}
		>
			<div className="">
				<h1 className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span>
					<br />
					<span className="inline-block mt-6">Ibitoye</span>
				</h1>
			</div>

			<nav
				className={styles.nav}
				style={{
					"--nav-rot": `${(360 / links.length) * current + multiplier * 360
						}deg`,
				}}
			>
				<div className={styles.nav_images}>
					<div className={styles.nav_center_wrapper}>
						{/* Nav Center */}
						<div
							className={`${styles.nav_center} text-opacity-40 text-type`}
						>
							<AILogo />
						</div>
					</div>
				</div>
				<div className={styles.nav_container}>
					{links.map(({ href, text, external }, i) => (
						<div
							key={href}
							className={`${styles.nav_link_container} m-auto text-5xl md:text-6xl`}
							style={{ "--item-rot": `${360 - (360 / links.length) * i}deg` }}
						>
							{external ? (
								<a
									href={href}
									ref={(el) => {
										linkRefs.current[i] = el;
									}}
									className="hover:text-primary focus:text-primary-light outline-none"
									onFocus={() => handleTarget(i)}
								>
									{text}
								</a>
							) : (
								<Link
									href={href}
									ref={(el) => {
										linkRefs.current[i] = el;
									}}
									className="hover:text-primary focus:text-primary-light outline-none"
									onFocus={() => {
										handleTarget(i);
										router.prefetch(href);
									}}
									prefetch={false}
									onClick={(e) => {
										e.preventDefault();

										if (window.matchMedia('(prefers-reduced-motion)').matches) {
											router.push(href)
										} else {
											setTransitionStarted(true);
											// Do Anim Stuff
											setTimeout(() => {
												router.push(href)
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

			<div className="flex mt-6 md:mt-0">
				<div className="border-2 border-type rounded flex gap-2 px-2 py-2">
					<a href="#">
						<EmailIcon />
					</a>
					<a href="#">
						<GithubIcon />
					</a>
					<a href="#">
						<LinkedinIcon />
					</a>
				</div>
			</div>

			<div className={`absolute bottom-0 left-0 ${transitionStarted ? 'h-full' : 'h-0'} w-full bg-base-light overflow-hidden motion-safe:transition-all motion-safe:duration-500`}>
				<div className={`${styles.nav_link_copy_container} flex justify-center items-center absolute bottom-[50vh] left-[50vw] -translate-x-1/2 translate-y-1/2`}>
					<h2 className="text-5xl md:text-6xl text-black w-min">{links[current].text}</h2>
				</div>
			</div>
		</main>
	);
}
