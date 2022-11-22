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
				<a
					className={`${LATO_BOLD.className} text-2xl flex items-center gap-3`}
					href="https://docs.google.com/document/d/1-XeSw5DwV6fNbSBDyLa-e4PlD-jOGcJxDTRwaVfdhbA/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Resume
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 7.2C20 7.51826 19.8736 7.82348 19.6485 8.04853C19.4235 8.27357 19.1183 8.4 18.8 8.4C18.4817 8.4 18.1765 8.27357 17.9515 8.04853C17.7264 7.82348 17.6 7.51826 17.6 7.2V4.1L12.45 9.25C12.3383 9.36134 12.2057 9.44956 12.0598 9.50962C11.914 9.56967 11.7577 9.60039 11.6 9.6C11.4419 9.60265 11.285 9.57298 11.1389 9.51279C10.9927 9.4526 10.8604 9.36318 10.75 9.25C10.6381 9.13852 10.5494 9.00604 10.4888 8.86018C10.4282 8.71432 10.3971 8.55794 10.3971 8.4C10.3971 8.24206 10.4282 8.08568 10.4888 7.93982C10.5494 7.79396 10.6381 7.66148 10.75 7.55L15.9 2.4H12.8C12.4817 2.4 12.1765 2.27357 11.9515 2.04853C11.7264 1.82348 11.6 1.51826 11.6 1.2C11.6 0.88174 11.7264 0.576516 11.9515 0.351472C12.1765 0.126428 12.4817 0 12.8 0H18.8C19.1183 0 19.4235 0.126428 19.6485 0.351472C19.8736 0.576516 20 0.88174 20 1.2V7.2ZM15.6 10.4C15.2817 10.4 14.9765 10.5264 14.7515 10.7515C14.5264 10.9765 14.4 11.2817 14.4 11.6V17.6H2.4V5.6H8.4C8.71826 5.6 9.02348 5.47357 9.24853 5.24853C9.47357 5.02348 9.6 4.71826 9.6 4.4C9.6 4.08174 9.47357 3.77652 9.24853 3.55147C9.02348 3.32643 8.71826 3.2 8.4 3.2H2C1.47038 3.20263 0.963195 3.41419 0.588691 3.78869C0.214186 4.1632 0.00262845 4.67038 0 5.2V18C0.00262845 18.5296 0.214186 19.0368 0.588691 19.4113C0.963195 19.7858 1.47038 19.9974 2 20H14.8C15.3296 19.9974 15.8368 19.7858 16.2113 19.4113C16.5858 19.0368 16.7974 18.5296 16.8 18V11.6C16.8 11.2817 16.6736 10.9765 16.4485 10.7515C16.2235 10.5264 15.9183 10.4 15.6 10.4Z"
							fill="white"
						/>
					</svg>
				</a>
			</nav>
		</div>
	);
}

export default FrontendLayoutNav;