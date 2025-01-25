import { IconProps } from "./icontypes";

const ArrowIcon = ({ fill = "currentColor", className }: IconProps) => {
	return (
		<svg
			width="24"
			height="22"
			className={className}
			viewBox="0 0 24 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M24 9.53062L24 12.4694L6 12.4694L12 18.3469L10.5 21.2857L-4.49603e-07 11L10.5 0.714294L12 3.65307L6 9.53062L24 9.53062Z"
				fill={fill}
			/>
		</svg>
	);
};

export default ArrowIcon;
