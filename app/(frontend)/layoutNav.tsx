"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import { LATO_BOLD } from "../globals/font";

const navigationLinks = [
	{ name: "Experience", path: "/experience", },
	{ name: "Skills", path: "/skills", },
	{ name: "Projects", path: "/projects", },
];

const FrontendLayoutNav = () => {
	const pathname = usePathname();

	return (
		<div className="w-full h-full flex justify-center items-center py-28">
			<nav className="w-min h-min flex flex-col gap-12">
				{navigationLinks.map((navlink) => (
					pathname === navlink.path
						? (
							<div key={navlink.name}>
								<h2 className={`${LATO_BOLD.className} text-5xl mb-6`}>{navlink.name}</h2>
								<p className="text-xl whitespace-nowrap">
									Programming since 2015 <br />
									Web development for over 3 years <br />
									Employed as a frontend dev for 2+ years <br />
								</p>
							</div>
						)
						: (
							<Link 
								key={navlink.name}
								className={`${LATO_BOLD.className} text-2xl`}
								href={navlink.path}
							>
								{navlink.name}
							</Link>
						)
				))}
				<a className={`${LATO_BOLD.className} text-2xl`} href="#">Resume</a>
			</nav>
		</div>
	);
}

export default FrontendLayoutNav;