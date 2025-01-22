"use client";

import { useEffect, useState } from "react";

export default function Main(props: { children?: React.ReactNode }) {
	const [open, setOpen] = useState((typeof window === 'undefined' ? {} as Window : window)?.matchMedia?.('(prefers-reduced-motion)').matches ?? false);

	useEffect(() => setOpen(true), []);

	return <main className={`
		main w-full h-full max-h-full p-10 md:p-16
		group/client
		${open ? 'open' : ''} 
		${open ? 'bg-transparent' : 'bg-base-light'}
	`}>{props.children}</main>
}