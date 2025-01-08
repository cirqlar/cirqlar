"use client";

import AILogo from '@/components/logo';
import styles from './webdev.module.css';
import { useState } from 'react';

export default function WebDevPage() {
	const [flipped, setFlipped] = useState(false);

	return (
		<div>
			<div className="absolute inset-0 flex justify-center items-center -z-10">
				<div className={`${styles.square} ${flipped ? styles.flip : ''} relative`}>
					<AILogo className="w-full h-full object-contain text-opacity-40 dark:text-opacity-40 text-slate-900 dark:text-slate-100"/>
					<div className={`${styles.up_right} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.down_right} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.up_left} bg-slate-100 dark:bg-slate-900`}></div>
					<div className={`${styles.down_left} bg-slate-100 dark:bg-slate-900`}></div>
				</div>

			</div>
			<div className="absolute right-0 top-1/2">
				<button onClick={() => setFlipped(prev => !prev)}>Flip</button>
			</div>
		</div>
	);
}