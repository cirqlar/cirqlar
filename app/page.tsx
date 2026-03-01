import { preload } from "react-dom";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { ALower, AUpper, ILower, IUpper } from "@/components/icons/ai";
import Socials from "@/components/socials";

import imgs from "@/app/images/bgbg.jpg";
import webs from "@/app/images/web.jpg";
import proj from "@/app/images/proj.jpg";
import styles from "./home.module.css";

const poppins = Poppins({
	weight: ["700"],
	subsets: ["latin"],
});

export default function Home() {
	preload("/aupper.svg", {
		as: "image",
		type: "image/svg+xml",
		crossOrigin: "anonymous",
	});
	preload("/iupper.svg", {
		as: "image",
		type: "image/svg+xml",
		crossOrigin: "anonymous",
	});
	preload("/alower.svg", {
		as: "image",
		type: "image/svg+xml",
		crossOrigin: "anonymous",
	});

	return (
		<main className="max-h-dvh scroll-pt-24 overflow-auto scroll-smooth supports-[not_(height:_100svh)]:max-h-screen">
			<header className="fixed inset-x-0 top-0 z-10">
				<nav className="bg-back/60 flex items-center justify-between gap-8 px-8 py-8 uppercase sm:mx-auto sm:mt-4 sm:w-fit sm:justify-center sm:rounded sm:py-4">
					<a
						href="#about"
						className="hover:text-primary-dark focus-visible:text-primary-dark focus-visible:outline-none"
					>
						About
					</a>
					<a
						href="#work"
						className="hover:text-primary-dark focus-visible:text-primary-dark focus-visible:outline-none"
					>
						Experience
					</a>
					<a
						href="#projects"
						className="hover:text-primary-dark focus-visible:text-primary-dark focus-visible:outline-none"
					>
						Projects
					</a>
				</nav>
			</header>
			<div
				className={`sticky top-0 h-svh gap-[20px] supports-[not_(height:_100svh)]:h-screen sm:gap-[calc(100px/3)] lg:gap-[50px] ${styles.hero_grid}`}
			>
				<div className="relative h-full w-full">
					<Image
						sizes="50vw"
						src={imgs}
						className="mask-[url(/aupper.svg)] mask-bottom-right mask-size-[120px] sm:mask-size-[200px] lg:mask-size-[300px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full bg-white object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="A foggy forest"
						priority
					/>
					<AUpper className="absolute bottom-0 right-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px]" />
				</div>
				<div className="relative h-full w-full">
					<Image
						sizes="50vw"
						src={webs}
						className="mask-[url(/iupper.svg)] mask-bottom-left mask-size-[120px] sm:mask-size-[200px] lg:mask-size-[300px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full bg-white object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="Three hand-drawn and colorful wireframes in a row"
						priority
					/>
					<IUpper className="absolute bottom-0 left-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px]" />
				</div>
				<div className="relative h-full w-full">
					<Image
						sizes="50vw"
						src={proj}
						className="mask-[url(/alower.svg)] mask-top-right mask-size-[120px] sm:mask-size-[200px] lg:mask-size-[300px] mask-no-repeat group-hover:mask-size-[600%] group-focus-visible:mask-size-[600%] hidden h-full w-full bg-white object-cover transition-all duration-500 supports-[mask-image:_url()]:block"
						alt="A pile of game controllers seen from above"
						priority
					/>
					<ALower className="absolute right-0 top-0 h-[120px] w-[120px] origin-bottom-right transition-all duration-500 group-hover:scale-125 group-focus-visible:scale-125 supports-[mask-image:_url()]:hidden sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px]" />
				</div>
				<div className="relative h-full w-full">
					<ILower className="absolute h-[120px] w-[120px] text-white/30 sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px]" />

					<h1
						className={`text-shadow-lg absolute left-[12.5px] top-[25px] block text-left text-2xl/normal font-bold sm:left-[25px] sm:top-[25px] sm:text-5xl/normal lg:top-[50px] lg:text-6xl/normal ${poppins.className}`}
					>
						Ayanfeoluwa <br />
						Ibitoye
					</h1>
				</div>
			</div>

			<div className="bg-back/95 relative flex flex-col items-center gap-12 px-8 pb-28 pt-8">
				<article className="prose prose-invert prose-lg">
					<h2 id="about">About me</h2>
					<p>Hi!</p>
					<p>
						I'm a Software Developer with over 5 years of
						experience, including Frontend, Full Stack and Mobile
						development. I have been involved in and responsible for
						the entire software development pipeline, including:
					</p>
					<ul>
						<li>
							Owning the development and maintainance of features
							used by large and active userbases
						</li>
						<li>Handling bug fixing and perfomance improvements</li>
						<li>
							Collaborating with teammates asynchronously using
							version control systems and async messaging tools
						</li>
					</ul>
					<p>
						I have worked professionally with many tools and
						technologies such as React, Typescript, Javascript,
						Next.js, CSS, Node.js, Express.js, among others. And
						personally, I have also interacted with many more tools,
						including Rust, C++, C#, and tried to stay abreast of
						developments in the software development industry. I
						have tried my best not just to learn useful skills, but
						also to understand the technology behind them deeply in
						order to make better decisions in their use and easily
						deal with issues that arise in my work. enjoy working on
						complex and interesting problems that have a positive
						impact on people's lives and collaborating with people
						smarter than I am.
					</p>
				</article>
				<article className="prose prose-invert prose-lg *:last:*:last:mb-0">
					<h2 id="work">Experience</h2>

					<section>
						<h3>Helicarrier Development Studio</h3>
						<p className="text-base italic">08/2021 - 06/2025</p>

						<p>
							A financial technology company developing software
							to connect Africa to the world. I worked as a
							Software Developer and was tasked with developing
							and maintaining web and mobile apps. In this role, I
							primarily made use of Javascript/Typescript, HTML,
							CSS, React, Next.js, React Native, SCSS, GraphQl and
							REST apis. I also worked on projects using Vue.js,
							Express.js, Styled Components and more.
						</p>
						<p>In this role, I was in charge of:</p>
						<ul>
							<li>
								Working with stakeholders, designers, QA and
								backend engineers to bring new features to users
							</li>
							<li>
								Working with customer support and directly with
								customers to triage and fix user issues and bug
								reports
							</li>
							<li>
								Managing and minimizing technical debt and
								improving developer efficiency by suggesting and
								completing refactors and upgrades of code and
								the tech stack
							</li>
							<li>
								Managing web and mobile app releases, including
								releasing new app builds to App Stores
							</li>
						</ul>
					</section>

					<section>
						<h3>Crenet Techlabs</h3>
						<p className="text-base italic">08/2020 - 08/2021</p>

						<p>
							A digital product design and development company
							helping clients realize their visions. I worked as a
							Frontend Developer and was tasked with developing
							web apps in line with stakeholder expectations. In
							this role, I primarily made use of Javascript, HTML,
							CSS, React, Bootstrap, React Testing Library, Jest,
							Figma.
						</p>
						<p>In this role, I was in charge of:</p>
						<ul>
							<li>
								Translating designs and stakeholder guidlines
								into well architected frontend apps
							</li>
							<li>
								Developing tests and ensuring high code coverage
							</li>
						</ul>
					</section>

					<section className="">
						<h3>Languages, Frameworks, Libraries and Tools</h3>
						<p>
							Here's a non-exhaustive list of the languages,
							frameworks, libraries and tools I've worked with in
							my professional career: Javascript, Typescript,
							React, Next.js, HTML, CSS, SASS/SCSS, Node.js,
							Vue.js, Graphql, React Query, zustand, React testing
							library, Jest.
						</p>
						<p>
							In my personal time, I've also worked with: Rust,
							C++ with Unreal Engine, C# with Godot, Tailwind,
							Solid.js.
						</p>
					</section>
				</article>
				<article className="prose prose-invert prose-lg prose-a:hover:text-primary-dark prose-a:focus-visible:text-primary-dark prose-a:focus-visible:outline-none prose-a:underline-offset-4 *:last:*:last:mb-0">
					<h2 id="projects">Projects</h2>

					<section>
						<h3>This website</h3>
						<p className="text-base">
							<a
								href="https://github.com/cirqlar/cirqlar"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Github
							</a>
							, Made with: Next.js, React, Tailwind
						</p>
					</section>

					<section>
						<h3>Greg</h3>
						<p className="text-base">
							<a
								href="https://github.com/cirqlar/greg"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Github
							</a>
							, Made with: Rust, Typescript, Actix, React, Tokio,
							sqlite/libsql, Vite, Tailwind, Tanstack
							Router/Table/Query
						</p>

						<p>
							Greg is a simple RSS aggregator and a change tracker
							for (one) Productboard roadmap(s). I initially built
							it when I couldn't find any free RSS aggregator
							services that I was happy with. It was expanded to
							track changes on a certain Productboard roadmap when
							free website monitoring services weren't up to
							snuff.
						</p>
					</section>

					<section>
						<h3>Others</h3>

						<section>
							<h4>ISHRAI Nigeria</h4>
							<p className="text-base">
								<a
									href="https://github.com/cirqlar/ishrai"
									target="_blank"
									referrerPolicy="no-referrer"
								>
									Github
								</a>
								, Made with: Nextjs, React, Tailwind,
								Forestry.io (now TinaCMS)
							</p>
							<p>
								A freelance project made for an NGO in 2020/2021
							</p>
						</section>

						<section>
							<h4>Advent of code</h4>
							<p className="text-base">
								<a
									href="https://github.com/cirqlar/aoc"
									target="_blank"
									referrerPolicy="no-referrer"
								>
									Github
								</a>
								, Rust, Go, C
							</p>
							<p>
								A yearly Advent calendar of small programming
								puzzles for a variety of skill levels that can
								be solved in any programming language.
							</p>
						</section>

						<p>
							See more on{" "}
							<a
								href="https://github.com/cirqlar"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Github
							</a>
							.
						</p>
					</section>
				</article>
				<section className="prose prose-invert prose-lg prose-a:hover:text-primary-dark prose-a:focus-visible:text-primary-dark prose-a:focus-visible:outline-none prose-a:underline-offset-4 w-full *:last:*:last:mb-0">
					<h3 id="img_credits">Image Credits</h3>

					<ul>
						<li>
							Top Left of background photo by{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/@kevinmueller?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Kevin Mueller
							</a>{" "}
							on{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/photos/fog-shrouds-a-forest-of-evergreens-MardXkt4Gdk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Unsplash
							</a>
						</li>
						<li>
							Top Right of background photo by{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/@halacious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Hal Gatewood
							</a>{" "}
							on{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/photos/assorted-color-abstract-painting-tZc3vjPCk-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Unsplash
							</a>
						</li>
						<li>
							Bottom Left of background photo by{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/@pragii07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Pragii
							</a>{" "}
							on{" "}
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href="https://unsplash.com/photos/assorted-colored-xbox-and-sony-playstaion-game-controller-lot-pX829a6ObhE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							>
								Unsplash
							</a>
						</li>
					</ul>
				</section>
			</div>

			<footer className="fixed inset-x-0 bottom-0 z-10">
				<div className="flex items-end justify-between px-4 pb-4">
					<div className="bg-back/60 rounded p-4">
						<Socials />
					</div>
					<div className="bg-back/60 flex gap-4 rounded p-4">
						<a
							href="https://docs.google.com/document/d/1R1DaFmChMq50IXdIXINOK4SNrklaIVKgVi7hUTG6-ls/edit?usp=sharing"
							target="_blank"
							referrerPolicy="no-referrer"
							className="hover:text-primary-dark focus-visible:text-primary-dark cursor-pointer text-white focus-visible:outline-none"
						>
							Resume
						</a>
						<a
							href="#img_credits"
							className="hover:text-primary-dark focus-visible:text-primary-dark cursor-pointer text-white focus-visible:outline-none"
						>
							Credits
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
