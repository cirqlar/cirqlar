"use client";

import Image from "next/image";

import imgs from "@/public/bgbg.jpg"; // Photo by <a href="https://unsplash.com/@kevinmueller?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kevin Mueller</a> on <a href="https://unsplash.com/photos/fog-shrouds-a-forest-of-evergreens-MardXkt4Gdk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import webs from "@/public/web.jpg"; // Photo by <a href="https://unsplash.com/@halacious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hal Gatewood</a> on <a href="https://unsplash.com/photos/assorted-color-abstract-painting-tZc3vjPCk-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import proj from "@/public/proj.jpg"; // Photo by <a href="https://unsplash.com/@pragii07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pragii</a> on <a href="https://unsplash.com/photos/assorted-colored-xbox-and-sony-playstaion-game-controller-lot-pX829a6ObhE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

import { ALower, AUpper, ILower, IUpper } from "@/components/icons/ai";
import Socials from "@/components/socials";
import styles from "./home.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["700"],
	subsets: ["latin"],
});

// const _links = [
// 	{ href: "/about", text: "About" },
// 	{ href: "/webdev", text: "Web Dev" },
// 	{
// 		href: "https://docs.google.com/document/d/1R1DaFmChMq50IXdIXINOK4SNrklaIVKgVi7hUTG6-ls/edit?usp=sharing",
// 		text: "Resume",
// 		external: true,
// 	},
// 	{ href: "/other", text: "Others" },
// ];

export default function Home() {
	return (
		<main className={`h-full gap-[20px] sm:gap-[25px] ${styles.main}`}>
			<div className="relative h-full w-full">
				<a
					href="#"
					className="group block h-full w-full rounded-br focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					<Image
						sizes="50vw"
						src={imgs}
						className="mask-[url(/aupper.svg)] mask-bottom-right mask-size-[120px] sm:mask-size-[150px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="A foggy forest"
						priority
					/>
					<AUpper className="absolute bottom-0 right-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[150px] sm:w-[150px]" />

					<p className="text-shadow-lg text-shadow-base/50 absolute bottom-[95px] right-[56px] block w-20 rounded-md text-xl font-bold text-white sm:left-1/2 sm:top-1/2 sm:w-fit sm:-translate-x-1/2 sm:-translate-y-1/2 sm:text-4xl">
						About <br />
						me
					</p>
				</a>
			</div>
			<div className="relative h-full w-full">
				<a
					href="#"
					className="group block h-full w-full rounded-bl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					<Image
						sizes="50vw"
						src={webs}
						className="mask-[url(/iupper.svg)] mask-bottom-left mask-size-[120px] sm:mask-size-[150px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="Three hand-drawn and colorful wireframes in a row"
						priority
					/>
					<IUpper className="absolute bottom-0 left-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[150px] sm:w-[150px]" />
					<p className="text-shadow-lg text-shadow-base/50 absolute bottom-[95px] left-[75px] block w-20 rounded-md text-right text-xl font-bold text-white sm:left-1/2 sm:top-1/2 sm:w-fit sm:-translate-x-1/2 sm:-translate-y-1/2 sm:text-4xl">
						Work & <br />
						Skills
					</p>
				</a>
			</div>
			<div className="relative h-full w-full">
				<a
					href="#"
					className="group block h-full w-full rounded-tr focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					<Image
						sizes="50vw"
						src={proj}
						className="mask-[url(/alower.svg)] mask-top-right mask-size-[120px] sm:mask-size-[150px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="A pile of game controllers seen from above"
						priority
					/>
					<ALower className="absolute right-0 top-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[150px] sm:w-[150px]" />

					<p className="text-shadow-lg text-shadow-base/50 absolute right-[56px] top-[95px] block w-20 rounded-md text-xl font-bold text-white sm:left-1/2 sm:top-1/2 sm:w-fit sm:-translate-x-1/2 sm:-translate-y-1/2 sm:text-4xl">
						My <br />
						Stuff
					</p>
				</a>
			</div>
			<div className="relative h-full w-full">
				<ILower className="absolute h-[120px] w-[120px] text-white/30 sm:h-[150px] sm:w-[150px]" />

				<h1
					className={`text-shadow-lg absolute left-[12.5px] top-[25px] block text-left text-2xl/normal font-bold sm:left-[25px] sm:top-[25px] sm:text-5xl/normal ${poppins.className}`}
				>
					Ayanfeoluwa <br />
					Ibitoye
				</h1>
				<header className="absolute bottom-12 right-12 flex flex-col items-end sm:bottom-12 sm:right-16">
					<div className="mb-4 flex flex-col items-end gap-4 sm:flex-row">
						<button
							className="hover:text-primary-dark focus-visible:text-primary-dark cursor-pointer rounded-sm text-lg font-bold text-white focus-visible:outline-none"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							Image Credits
						</button>
						<Socials />
					</div>
				</header>
			</div>
		</main>
	);
}
