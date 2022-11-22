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
				items-center gap-2
			`}
			onClick={() => {
				document.querySelector(`#${name.replaceAll(/ |\./g, '-')}`)?.scrollIntoView({ behavior: 'smooth' });
			}}
		>
			<div className="text-xs h-5">{name}</div>
			<div className="flex justify-center items-center">
				<div className={`w-10 h-[2px] bg-white ${index !== 0 ? '' : 'opacity-0'}`}></div>
				<div className="w-3 h-3 rounded-full bg-white"></div>
				<div className={`w-10 h-[2px] bg-white ${hideRight ? 'opacity-0' : ''}`}></div>
			</div>
			<div className="h-5"></div>
		</button>
	);
};

export default CarButton;