import Image from "next/image";
import { LATO_BOLD } from "../globals/font";

import bgImg from '../globals/images/square-clouds.png';


const OtherSection = () => {
	return (
		<section id="other" className="relative bg-primary text-dark-purple">
			<div className="absolute inset-0">
				<Image src={bgImg} alt='' fill placeholder="blur" className="object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-0 p-2">
					<p className="text-xs text-right">Background Image by Me</p>
				</div>
			</div>
			<div className="max-w-full px-8 sm:px-0 w-[480px] relative h-full mx-auto flex flex-col justify-end items-center pb-28">
				<h2 className={`${LATO_BOLD.className} text-4xl sm:text-6xl lg:text-8xl mb-5`}>Other</h2>
				<p className="text-xl text-justify mb-5">I'm learning a bunch of things from Rust to Game development and hope to show my progress.</p>
				<p className="flex p-2 w-auto justify-center items-center border border-gray-600 text-gray-600 rounded-md">Coming Soon</p>
			</div>
		</section>
	);
}

export default OtherSection;