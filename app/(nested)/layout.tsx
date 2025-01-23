import Link from "next/link";
import Main from "./client_main";
import Socials from "@/components/socials";

import "./nested.css";

export default function NestedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Main>
			<div className="title_block z-10 h-full w-full overflow-hidden">
				<Link href="/" className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span>
					<br />
					<span className="mt-6 inline-block">Ibitoye</span>
				</Link>
			</div>

			{children}

			<div className="social_block z-10 flex h-full w-full content-end items-end overflow-hidden">
				<Socials />
			</div>
		</Main>
	);
}
