"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Main(props: { children?: React.ReactNode }) {
	const router = useRouter();
	const pathname = usePathname();

	const [open, setOpen] = useState(
		(typeof window === "undefined" ? ({} as Window) : window)?.matchMedia?.(
			"(prefers-reduced-motion)",
		).matches ?? false,
	);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => setOpen(true), []);
	useEffect(() => setIsClient(true), []);

	return (
		<main
			className={`main group/client h-full max-h-full w-full p-10 md:p-16 ${open ? "open" : ""} ${open ? "bg-transparent" : "bg-base-light"}`}
		>
			{props.children}
			{isClient
				? createPortal(
						<Link
							href="/"
							className="text-4xl font-bold uppercase underline underline-offset-4"
							onClick={(e) => {
								e.preventDefault();

								const url = `/?from=${pathname.slice(1)}`;

								if (
									window.matchMedia(
										"(prefers-reduced-motion)",
									).matches
								) {
									router.push(url);
								} else {
									setOpen(false);
									// Do Anim Stuff
									setTimeout(() => {
										router.push(url);
									}, 600);
								}
							}}
						>
							<span>Ayanfeoluwa</span>
							<span className="mt-6 block" />
							<span className="">Ibitoye</span>
						</Link>,
						document.querySelector("#mainHeader") as Element,
					)
				: null}
		</main>
	);
}
