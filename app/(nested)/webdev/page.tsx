"use client";

import { useState } from 'react';

import styles from './webdev.module.css';

import AILogo from '@/components/logo';

const links = ['Experience', 'Skills', 'Projects'];
const LINK_ANGLE = 18;

export default function WebDevPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [previousIndex, setPreviousIndex] = useState(-1);

	const compensation = (currentIndex - 1) * -LINK_ANGLE;

	const handleClick = (index: number) => {
		setPreviousIndex(currentIndex);
		setCurrentIndex(index);
	};

	return (
		<div className={styles.root}>
			<div className={`${styles.square} group-[:not(.open)]/client:opacity-0`}>
				<AILogo className="w-full h-full object-contain text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100"/>
				<div className={`absolute top-1/2 group-[.open]/client:left-1/2 group-[:not(.open)]/client:left-2/3 group-[:not(.open)]/client:opacity-0 transition-all duration-[var(--web-time)] -translate-y-1/2`}>
					{links.map((link, index) => (
						<button
							key={link}
							onClick={() => handleClick(index)}
							disabled={index == currentIndex}
							className={`${styles.web_links} block text-xl disabled:text-2xl lg:text-2xl font-bold lg:disabled:text-3xl disabled:text-slate-300`}
							style={{ '--rot-angle': `${(index - currentIndex) * LINK_ANGLE}deg` }}
						>
							{link}
						</button>
					))}
				</div>
				<div
					className={`${styles.up_left} group-[:not(.open)]/client:bg-slate-700 group-[.open]/client:bg-slate-100 group-[.open]/client:dark:bg-slate-900`}
					style={{ '--compensation': `${compensation}deg` }}
				>
					<AILogo className="text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100" />
				</div>
				<div
					className={`${styles.down_left} group-[:not(.open)]/client:bg-slate-700 group-[.open]/client:bg-slate-100 group-[.open]/client:dark:bg-slate-900`}
					style={{ '--compensation': `${compensation}deg` }}
				>
					<AILogo className="text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100" />
				</div>
				<div
					className={`${styles.up_right} group-[:not(.open)]/client:bg-slate-700 group-[.open]/client:bg-slate-100 group-[.open]/client:dark:bg-slate-900`}
					style={{ '--compensation': `${compensation}deg` }}
				></div>
				<div 
					className={`${styles.down_right} group-[:not(.open)]/client:bg-slate-700 group-[.open]/client:bg-slate-100 group-[.open]/client:dark:bg-slate-900`}
					style={{ '--compensation': `${compensation}deg` }}
				></div>
				<div className="group-[:not(.open)]/client:bg-slate-700 group-[.open]/client:bg-slate-100 group-[.open]/client:dark:bg-slate-900 absolute w-32 h-32 border-[length:var(--border-thickness)] border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
			</div>
			<div className={`absolute top-1/2 group-[:not(.open)]/client:left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-[ease] duration-[var(--web-time)] group-[.open]/client:left-[calc(var(--def-left)+var(--length)/2)]`}>
				<h2 className="text-5xl md:text-6xl text-black w-min group-[.open]/client:text-inherit group-[.open]/client:scale-50 transition-all duration-[var(--web-time)]">Web Dev</h2>
			</div>
		</div>
	);
}