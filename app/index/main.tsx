import SocialLinks from "../components/social-links";
import { LATO_BOLD } from "../globals/font";

const MainSection = () => {
	return (
		<div>
			<div>
			</div>
			<div className="w-min relative pt-4 h-full mx-auto flex flex-col justify-center">
				<p className="text-4xl">Hi! It's me!</p>
				<h1 className={`${LATO_BOLD.className} text-[192px] uppercase`}>Àyànfẹ</h1>
				<p className="text-xl text-justify mb-12">I'm a frontend developer mostly working with frontend frameworks and tools including (but not limited to) React, Nextjs and Vuejs. I'm also learning 3d.</p>
				<SocialLinks />
			</div>
		</div>
	)
}

export default MainSection;