"use client";

import { useRef, useState } from "react";
import navStyles from "./nav.module.css";
import AILogo from "../logo";
import EmailIcon from "../icons/email";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";

const links = [
	{ href: "/gosomewhere1", text: "About" },
	{ href: "/gosomewhere2", text: "Web Dev" },
	{ href: "/gosomewhere3", text: "Game Dev" },
	{ href: "/gosomewhere4", text: "Resume" },
	{ href: "/gosomewhere5", text: "Others" },
];

export default function Nav() {
	const [current, setCurrent] = useState(0);
	const [multiplier, setMult] = useState(0);

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
			setMult(prev => prev + 1);
		} else if (target === links.length - 1 && current === 0) {
			setMult(prev => prev - 1);
		}

		setCurrent(target);
	}

	return (
		<main className={`${navStyles.main} w-full h-full overflow-clip relative p-10 md:p-20 md:flex md:flex-col md:justify-between`}>
			<div className="">
				<h1 className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span><br />
					<span className="inline-block mt-6">Ibitoye</span>
				</h1>
			</div>

			<nav 
				className={navStyles.nav}
				style={{ "--nav-rot": `${(360 / links.length) * current + multiplier * 360}deg` }}
			>
				<div className={navStyles.nav_images_wrapper}>
					<div className={navStyles.nav_images}>
						{/* Nav Center */}
						<div className={`${navStyles.nav_center} text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100`}>
							<AILogo />
						</div>
					</div>
				</div>
				<div className={navStyles.nav_container}>
					{links.map(({ href, text }, i) => (
						<div
							key={href}
							className={`${navStyles.nav_link_container} m-auto text-5xl md:text-6xl`}
							style={{ "--item-rot": `${360 - (360 / links.length) * i}deg` }}
						>
							<a
								href={href}
								ref={(el) => {
									linkRefs.current[i] = el;
								}}
								className="hover:text-green-700 focus:text-green-300 outline-none"
								onFocus={() => handleTarget(i)}
							>
								{text}
							</a>
						</div>
					))}
				</div>
			</nav>

			<button
				className={navStyles.nav_button_top}
				onClick={() => focusTarget(current - 1)}
			>up arrow</button>
			<button
				className={navStyles.nav_button_bottom}
				onClick={() => focusTarget(current + 1)}
			>down arrow</button>

			<div className="flex">
				<div className="border-2 border-slate-900 dark:border-slate-100 rounded flex gap-2 px-2 py-2">
					<a href="#"><EmailIcon /></a>
					<a href="#"><GithubIcon /></a>
					<a href="#"><LinkedinIcon /></a>
				</div>
			</div>

		</main>
	);
}
