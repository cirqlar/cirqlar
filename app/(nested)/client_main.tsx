"use client";

import { useEffect, useState } from "react";

export default function Main(props: { children?: React.ReactNode }) {
	const [open, setOpen] = useState(false);

	useEffect(() => setOpen(true), []);

	return <main className={`
		main w-full h-full p-10 md:p-20
		${open ? 'open' : ''} 
		${open ? 'bg-transparent' : 'bg-slate-700'}
	`}>{props.children}</main>
}