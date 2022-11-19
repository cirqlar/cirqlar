import { LATO_BOLD } from "../globals/font";

const FrontendSection = () => {
	return (
		<section>
			<div></div>
			<div className="w-min relative h-full mx-auto flex flex-col justify-center">
				<h2 className={`${LATO_BOLD.className} text-8xl mb-8`}>Frontend Development</h2>
				<nav className="text-2xl flex justify-center items-center gap-9">
					<p>Experience</p>
					<p>Skills</p>
					<p>Projects</p>
					<p>Resume</p>
				</nav>
			</div>
		</section>
	);
}

export default FrontendSection;