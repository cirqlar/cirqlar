"use client";

import { useRef, useState } from 'react';

import styles from './webdev.module.css';

import AILogo from '@/components/logo';

const links = ['Experience', 'Skills', 'Projects'];

export default function WebDevPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	// const [previousIndex, setPreviousIndex] = useState(-1);

	const contentRefs = useRef<(HTMLDivElement | null)[]>(new Array(links.length));

	const compensation = (currentIndex - 1) * -1;

	const handleClick = (index: number) => {
		// setPreviousIndex(currentIndex);
		setCurrentIndex(index);

		contentRefs.current[currentIndex]?.classList.remove(styles.from_bottom, styles.from_top, styles.to_bottom, styles.to_top);
		contentRefs.current[index]?.classList.remove(styles.from_bottom, styles.from_top, styles.to_bottom, styles.to_top);

		if (currentIndex < index) {
			contentRefs.current[currentIndex]?.classList.add(styles.to_top);
			contentRefs.current[index]?.classList.add(styles.from_bottom);
		} else {
			contentRefs.current[currentIndex]?.classList.add(styles.to_bottom);
			contentRefs.current[index]?.classList.add(styles.from_top);
		}
	};

	return (
		<div className={`${styles.root} min-w-0 min-h-0 flex flex-col`}>
			<div className={styles.square}>
				<AILogo className="w-full h-full object-contain text-opacity-40 text-type"/>
				<div className={styles.web_links_container}>
					{links.map((link, index) => (
						<button
							key={link}
							onClick={() => handleClick(index)}
							disabled={index == currentIndex}
							className={`${styles.web_links} block text-xl disabled:text-2xl lg:text-2xl font-bold lg:disabled:text-3xl disabled:text-slate-300`}
							style={{ '--rot-mult': `${index - currentIndex}` }}
						>
							{link}
						</button>
					))}
				</div>
				<div
					className={styles.up_left}
					style={{ '--compensation': `${compensation}` }}
				>
					<AILogo className="text-opacity-40 text-type" />
				</div>
				<div
					className={styles.down_left}
					style={{ '--compensation': `${compensation}` }}
				>
					<AILogo className="text-opacity-40 text-type" />
				</div>
				<div
					className={styles.up_right}
					style={{ '--compensation': `${compensation}` }}
				></div>
				<div 
					className={styles.down_right}
					style={{ '--compensation': `${compensation}` }}
				></div>
				<div className={`${styles.center} absolute w-28 h-28 lg:w-32 lg:h-32 border-[length:var(--border-thickness)] border-type rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
			</div>
			<div className={styles.web_dev_container}>
				<h2 className="text-5xl md:text-6xl text-black w-min group-[.open]/client:text-inherit group-[.open]/client:scale-50 transition-all duration-[var(--web-time)]">Web Dev</h2>
			</div>
			<div className="relative md:min-w-96 mt-40 md:mt-0 md:mr-[calc(var(--length)+16px)] flex-1 bg-base-light bg-opacity-90 rounded group-[:not(.open)]/client:opacity-0 transition-all duration-[var(--web-time)] delay-[var(--web-time)] z-20">
				<div className={`${styles.from_top} ${styles.content}`} ref={(el) => { contentRefs.current[0] = el; }}>
					Experience content
				</div>
				<div className={`${styles.content} p-4`} ref={(el) => { contentRefs.current[1] = el; }}>
					Skills content
				</div>
				<div className={`${styles.content} p-4`} ref={(el) => { contentRefs.current[2] = el; }}>
					Projects content
				</div>
			</div>
		</div>
	);
}