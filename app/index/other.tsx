import { LATO_BOLD } from "../globals/font";

const OtherSection = () => {
	return (
		<section>
			<div></div>
			<div className="w-[480px] relative h-full mx-auto flex flex-col justify-end items-center pb-28">
				<h2 className={`${LATO_BOLD.className} text-8xl mb-5`}>Other</h2>
				<p className="text-xl text-justify mb-5">I'm learning 3d using Blender and Unreal Engine 5 and hope to show my progress.</p>
				<p className="flex p-2 w-auto justify-center items-center border border-[#777777] text-[#777777] rounded-md">Coming Soon</p>
			</div>
		</section>
	);
}

export default OtherSection;