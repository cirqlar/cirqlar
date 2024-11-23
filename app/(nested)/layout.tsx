
import Link from "next/link";
import Main from "./client_main";
import Socials from "@/components/socials";

import './nested.css';

export default function NestedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Main>
			<div className="w-full h-full overflow-hidden title_block">
				<Link href="/" className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span>
					<br />
					<span className="inline-block mt-6">Ibitoye</span>
				</Link>
			</div>

			{children}

			<div className="content-end w-full h-full overflow-hidden flex items-end social_block">
				<Socials />
			</div>
		</Main>
	);
}