"use client";
import { useEffect, useRef, useCallback } from 'react';

const MainContainer = () => {
	const leftButton = useRef<HTMLButtonElement>(null);
	const rightButton = useRef<HTMLButtonElement>(null);
	const mainButton = useRef<HTMLButtonElement>(null);
	const frontendButton = useRef<HTMLButtonElement>(null);
	const otherButton = useRef<HTMLButtonElement>(null);

	const getPercent = () => {
		const scrollContainer = document.querySelector('#maincontainer');
		if (!scrollContainer) return 0;

		const length = scrollContainer.clientWidth;
		const scrollLength = scrollContainer.scrollWidth - length;
		return Math.round((scrollContainer.scrollLeft / scrollLength) * 100);
	}

	const scrollFunction = useCallback(() => {
		const percent = getPercent();
		const activeColor = 'bg-white';
		const inactiveColor = 'bg-gray-400';

		if (percent < 50) {
			leftButton.current?.classList.add('hidden');
			rightButton.current?.classList.remove('hidden');

			mainButton.current?.classList.replace(inactiveColor, activeColor);
			frontendButton.current?.classList.replace(activeColor, inactiveColor);
			otherButton.current?.classList.replace(activeColor, inactiveColor);
		} else if (percent < 100) {
			leftButton.current?.classList.remove('hidden');
			rightButton.current?.classList.remove('hidden');

			mainButton.current?.classList.replace(activeColor, inactiveColor);
			frontendButton.current?.classList.replace(inactiveColor, activeColor);
			otherButton.current?.classList.replace(activeColor, inactiveColor);
		} else {
			leftButton.current?.classList.remove('hidden');
			rightButton.current?.classList.add('hidden');

			mainButton.current?.classList.replace(activeColor, inactiveColor);
			frontendButton.current?.classList.replace(activeColor, inactiveColor);
			otherButton.current?.classList.replace(inactiveColor, activeColor);
		}
	}, []);

	useEffect(() => {
		const scrollContainer = document.querySelector('#maincontainer');

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', scrollFunction, { passive: true });

			return () => scrollContainer.addEventListener('scroll', scrollFunction, { passive: true });
		}
	}, [scrollFunction]);

	const scrollToMain = () => {
		document.querySelector('#main')?.scrollIntoView({ behavior: 'smooth' });
	}
	const scrollToFrontend = () => {
		document.querySelector('#frontend')?.scrollIntoView({ behavior: 'smooth' });
	}
	const scrollToOther = () => {
		document.querySelector('#other')?.scrollIntoView({ behavior: 'smooth' });
	}

	const scrollNext = () => {
		const percent = getPercent();
		if (percent < 50) {
			scrollToFrontend();
		} else if (percent < 100) {
			scrollToOther();
		}
	}

	const scrollPrevious = () => {
		const percent = getPercent();
		if (percent >= 100) {
			scrollToFrontend();
		} else if (percent >= 50) {
			scrollToMain();
		}
	}

	return (
		<div>
			<div className="absolute hidden md:flex inset-y-0 left-0 w-min justify-center items-center pl-12">
				<button
					type="button"
					aria-label="Scroll to Next Section"
					className={`text-white disabled:text-gray-400 hidden`}
					ref={leftButton}
					onClick={scrollPrevious}
				>
					<svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33 65L1 33L33 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
			<div className="absolute hidden md:flex inset-y-8 right-0 w-min justify-center items-center pr-12">
				<button
					type="button"
					aria-label="Scroll to Previous Section"
					className={`text-white disabled:text-gray-400`}
					ref={rightButton}
					onClick={scrollNext}
				>
					<svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L33 33L1 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
			<div className="absolute h-20 inset-x-0 bottom-0 flex justify-center items-center gap-6">
				<button
					className={`h-1 w-6 bg-gray-400`}
					type="button"
					aria-label="Scroll to Main"
					onClick={scrollToMain}
					ref={mainButton}
				></button>
				<button
					className={`h-1 w-6 bg-white`}
					type="button"
					aria-label="Scroll to Frontend"
					onClick={scrollToFrontend}
					ref={frontendButton}
				></button>
				<button
					className={`h-1 w-6 bg-white`}
					type="button"
					aria-label="Scroll to Other"
					onClick={scrollToOther}
					ref={otherButton}
				></button>
			</div>
		</div>
	);
};

export default MainContainer;