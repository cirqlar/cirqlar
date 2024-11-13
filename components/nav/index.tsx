"use client";

import { useRef, useState } from "react";
import navStyles from "./nav.module.css";
import AILogo from "../logo";

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
		<main className={`${navStyles.main} w-full h-full overflow-clip relative`}>
			<nav 
				className={navStyles.nav}
				style={{ "--nav-rot": `${(360 / links.length) * current + multiplier * 360}deg` }}
			>
				<div className={navStyles.nav_images_wrapper}>
					<div className={navStyles.nav_images}>
						{/* Nav Center */}
						<div className={navStyles.nav_center}>
							<AILogo />
						</div>
					</div>
				</div>
				<div className={navStyles.nav_container}>
					{links.map(({ href, text }, i) => (
						<div
							key={href}
							className={`${navStyles.nav_link_container} m-auto`}
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

			<button onClick={() => focusTarget(current + 1)}>up</button>
			<button onClick={() => focusTarget(current - 1)}>down</button>
		</main>
	);
}
