import Image from "next/image";
import SocialLinks from "../components/social-links";
import { LATO_BOLD } from "../globals/font";

import bgImg from '../globals/images/tareq-ajalyakin-unsplash.jpg';

const MainSection = () => {
	return (
		<div id="main" className="relative">
			<div className="absolute inset-0">
				<Image src={bgImg} alt='' fill priority placeholder="blur" className="object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-0 p-2">
					<p className="text-xs text-right">
						Background Image by{" "}
						<a
							className="underline"
							href="https://unsplash.com/@tareq_aj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						>
							Tareq Ajalyakin
						</a>{" "}
						on{" "}
						<a
							className="underline"
							href="https://unsplash.com/collections/5NaT-Cxe1FE/ayanfe.com/0d6c31939ed1d0f9c2df601cb55c661d?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						>
							Unsplash
						</a>
					</p>
				</div>
			</div>
			<div className="w-min relative pt-4 h-full mx-auto flex flex-col justify-center">
				<p className="text-lg sm:text-2xl lg:text-4xl">Hi! It's me!</p>
				<h1 className={`${LATO_BOLD.className} text-7xl leading-loose sm:text-9xl sm:leading-loose lg:text-[192px] lg:leading-normal uppercase`}>Àyànfẹ</h1>
				<p className="text-sm sm:text-base lg:text-xl text-justify mb-12">I'm a frontend developer mostly working with frontend frameworks and tools including (but not limited to) React, Nextjs and Vuejs. I'm also learning 3d.</p>
				<SocialLinks />
			</div>
		</div>
	)
}

export default MainSection;