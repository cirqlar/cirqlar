import Link from "next/link";
import { LATO_BOLD } from "../globals/font";

const FrontendSection = () => {
	return (
		<section id="frontend" className="relative">
			<div className="absolute inset-0 p-8 pb-16 flex justify-center items-center">
				<div className="w-full max-w-5xl aspect-video bg-[#2C2C3E] rounded-2xl grid grid-rows-[80px_1fr] grid-cols-1 overflow-hidden">
					<div className="grid grid-rows-2 grid-cols-1">
						<div className="flex justify-between items-center">
							<div className="h-full flex flex-row-reverse">
								<div className="h-full w-40 rounded-tr-xl bg-[#393951] -ml-2 overflow-hidden"></div>
								<div className="h-full w-40 rounded-tr-xl bg-[#484862] -ml-2 overflow-hidden"></div>
								<div className="h-full w-40 rounded-tr-xl bg-[#2E1760] overflow-hidden"></div>
							</div>
							<div className="flex gap-4 justify-center items-center w-min pr-3">
								<div className="w-3 h-3 rounded-full bg-green-600"></div>
								<div className="w-3 h-3 rounded-full bg-orange-600"></div>
								<div className="w-3 h-3 rounded-full bg-red-600"></div>
							</div>
						</div>
						<div className="bg-[#181831] px-2 py-3">
							<div className="w-3/4 h-full bg-[#484862]"></div>
						</div>
					</div>
					<div className="min-h-0">

					</div>
				</div>
			</div>
			<div className="w-min relative h-full mx-auto flex flex-col justify-center">
				<h2 className={`${LATO_BOLD.className} text-8xl mb-8`}>Frontend Development</h2>
				<nav className="text-2xl flex justify-center items-center gap-9">
					<Link href="/experience">Experience</Link>
					<Link href="/skills">Skills</Link>
					<Link href="/projects">Projects</Link>
					<a href="#">Resume</a>
				</nav>
			</div>
		</section>
	);
}

export default FrontendSection;