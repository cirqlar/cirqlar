import SocialLinks from "../components/social-links";
import { LATO_BOLD } from "../globals/font";

const MainSection = () => {
	return (
		<div id="main">
			<div>
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