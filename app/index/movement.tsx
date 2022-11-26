"use client";
import { useEffect, useState } from 'react';
import { useScrollPercentage } from '../hooks/use-scroll-percentage';

const MainContainer = () => {
	const { scrollPercentage } = useScrollPercentage('#maincontainer', 'horizontal');
	const [scrolling, setScrolling] = useState(false);
	const [page, setPage] = useState<'main' | 'frontend' | 'other'>('main');

	const scrollToMain = () => {
		if (scrolling) return;
		setScrolling(true);
		document.querySelector('#main')?.scrollIntoView({ behavior: 'smooth' });
	}
	const scrollToFrontend = () => {
		if (scrolling) return;
		setScrolling(true);
		document.querySelector('#frontend')?.scrollIntoView({ behavior: 'smooth' });
	}
	const scrollToOther = () => {
		if (scrolling) return;
		setScrolling(true);
		document.querySelector('#other')?.scrollIntoView({ behavior: 'smooth' });
	}

	useEffect(() => {
		let newPage: 'main' | 'frontend' | 'other' | undefined;
		if (scrollPercentage === 0) {
			newPage = 'main';
		} else if (scrollPercentage === 50) {
			newPage = 'frontend';
		} else if (scrollPercentage === 100) {
			newPage = 'other';
		}
		
		if (newPage && newPage !== page) {
			setPage(newPage);
			setScrolling(false);
		}
		console.log(scrollPercentage);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [scrollPercentage]);

	const scrollNext = () => {
		if (page === 'main') {
			scrollToFrontend();
		} else if (page === 'frontend') {
			scrollToOther();
		}
	}

	const scrollPrevious = () => {
		if (page === 'main') {
			return;
		} else if (page === 'frontend') {
			scrollToMain();
		} else {
			scrollToFrontend();
		}
	}


	return (
		<div>
			<div className="absolute max-sm:hidden inset-y-0 left-0 w-min flex justify-center items-center pl-12">
				<button
					type="button"
					aria-label="Scroll to Next Section"
					className={`text-white disabled:text-gray-400 ${page === 'main' ? 'hidden' : ''}`}
					disabled={page==='main'}
					onClick={scrollPrevious}
				>
					<svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33 65L1 33L33 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
			<div className="absolute max-sm:hidden inset-y-8 right-0 w-min flex justify-center items-center pr-12">
				<button
					type="button"
					aria-label="Scroll to Previous Section"
					className={`text-white disabled:text-gray-400 ${page === 'other' ? 'hidden' : ''}`}
					disabled={page==='other'}
					onClick={scrollNext}
				>
					<svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L33 33L1 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
			<div className="absolute h-20 inset-x-0 bottom-0 flex justify-center items-center gap-6">
				<button
					className={`h-1 w-6 ${page === 'main' ? "bg-white" : "bg-gray-400"}`}
					type="button"
					aria-label="Scroll to Main"
					onClick={scrollToMain}
				></button>
				<button
					className={`h-1 w-6 ${page === 'frontend' ? "bg-white" : "bg-gray-400"}`}
					type="button"
					aria-label="Scroll to Frontend"
					onClick={scrollToFrontend}
				></button>
				<button
					className={`h-1 w-6 ${page === 'other' ? "bg-white" : "bg-gray-400"}`}
					type="button"
					aria-label="Scroll to Other"
					onClick={scrollToOther}
				></button>
			</div>
		</div>
	);
};

export default MainContainer;