"use client";

import AILogo from '@/components/logo';
import styles from './webdev.module.css';
import { useEffect, useState } from 'react';

const LinkList = ['Experience', 'Skills', 'Projects'];

function Links(props: { currentIndex: number, setIndex: (newIndex: number) => unknown, side: 'left' | 'right', show: boolean }) {
	const [shouldUse, setShouldUse] = useState(props.currentIndex);
	const [shouldUpdate, setShouldUpdate] = useState(true);

	useEffect(() => {
		if (shouldUpdate) {
			setShouldUse(props.currentIndex);
		}
	}, [props.currentIndex, shouldUpdate]);

	const handleClick = (index: number) => {
		setShouldUpdate(false);
		props.setIndex(index);

		setTimeout(() => setShouldUpdate(true), 1000);
	};
	const space = props.side == 'left' ? 'left-16' : 'right-16';
	const space_0 = props.side == 'left' ? 'left-0' : 'right-0';

	return (
		<div className={`absolute top-1/2 ${props.show ? space : space_0} ${props.show ? '' : 'opacity-0'} transition-all duration-[var(--transition-time)] -translate-y-1/2`}>
			{LinkList.map((link, index) => index != shouldUse && (<button key={link} onClick={() => handleClick(index)} className="block text-2xl font-bold mb-4 last:mb-0">
				{link}
			</button>))}
		</div>
	)
}

export default function WebDevPage() {
	const [flipped, setFlipped] = useState(false);

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className={styles.root}>
			<div className="absolute inset-0 -z-10">
				<div className={`${styles.square} ${flipped ? styles.flip : ''} relative`}>
					<AILogo className="w-full h-full object-contain text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100"/>
					<div className={`${styles.up_right} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.down_right} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.up_left} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.down_left} bg-slate-100 dark:bg-slate-900`}></div>
					<div className="bg-slate-100 dark:bg-slate-900 absolute w-32 h-32 border-[length:var(--border-thickness)] border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
			</div>
			<div className={`absolute top-1/2 group-[:not(.open)]/client:left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-[ease] duration-[var(--transition-time)] ${flipped ? 'group-[.open]/client:left-[calc(var(--spacing)+var(--length)/2)]' : 'group-[.open]/client:left-[calc(var(--def-left)+var(--length)/2)]'}`}>
				<h2 className="text-5xl md:text-6xl text-black w-min group-[.open]/client:text-inherit group-[.open]/client:scale-50 transition-all duration-[var(--transition-time)]">Web Dev</h2>
			</div>

			<Links currentIndex={currentIndex} side='right' show={!flipped} setIndex={(index) => { setFlipped(prev => !prev); setCurrentIndex(index) }} />
			<Links currentIndex={currentIndex} side='left' show={flipped} setIndex={(index) => { setFlipped(prev => !prev); setCurrentIndex(index) }} />
		</div>
	);
}