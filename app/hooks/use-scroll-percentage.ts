import { useEffect, useRef, useState } from "react";

export function useScrollPercentage(scrollID: string, direction: 'horizontal' | 'vertical') {
	const [scrollPercentage, setScrollPercetage] = useState(0);
	const ref = useRef<Element | null>(null);

	useEffect(() => {
		const scrollContainer = document.querySelector(scrollID);
		ref.current = scrollContainer;

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', scrollFunction, { passive: true });

			return () => scrollContainer.addEventListener('scroll', scrollFunction, { passive: true });
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [scrollID]);

	const scrollFunction: EventListener = () => {
		if (!ref.current) return;

		const length = ref.current[direction === 'vertical' ? "clientHeight" : "clientWidth"];
		const scrollLength = ref.current[direction === 'vertical' ? "scrollHeight" : "scrollWidth"] - length;
		let percentScrolled = Math.round((ref.current[direction === 'vertical' ? "scrollTop" : "scrollLeft"] / scrollLength) * 100);

		setScrollPercetage(percentScrolled);
	}

	return { scrollPercentage };
}