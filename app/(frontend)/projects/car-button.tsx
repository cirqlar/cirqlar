"use client";

interface CarButtonProps {
	name: string;
	index: number;
	hideRight?: boolean;
}

const CarButton = ({ name, index, hideRight }: CarButtonProps) => {
	return (
		<button
			key={name}
			type="button"
			className={`
				flex ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}
				items-center gap-2 group
			`}
			onClick={() => {
				document.querySelector(`#${name.replaceAll(/ |\./g, '-')}`)?.scrollIntoView({ behavior: 'smooth' });
			}}
		>
			<div className="text-xs h-5 text-gray-400 group-focus:text-white transition-colors duration-300">{name}</div>
			<div className="flex justify-center items-center">
				<div className={`w-10 h-[2px] bg-gray-400 ${index !== 0 ? '' : 'opacity-0'}`}></div>
				<div className="w-3 h-3 rounded-full bg-gray-400 group-focus:bg-white transition-colors duration-300"></div>
				<div className={`w-10 h-[2px] bg-gray-400 ${hideRight ? 'opacity-0' : ''}`}></div>
			</div>
			<div className="h-5"></div>
		</button>
	);
};

export default CarButton;