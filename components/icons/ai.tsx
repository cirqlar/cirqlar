import { IconProps } from "./icontypes";

export default function AILogo({
	className,
	fill = "currentColor",
}: IconProps) {
	return (
		<svg
			className={className}
			width="1400"
			height="1400"
			viewBox="0 0 1400 1400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1350 700C1350 1042.16 1085.62 1322.57 750 1348.11V750H1000V850H900V950H1200V850H1100V550H1200V450H900V550H1000V650H750V51.8945C1085.62 77.4258 1350 357.839 1350 700Z"
				fill={fill}
			/>
			<path
				d="M650 750V1348.11C314.378 1322.57 50 1042.16 50 700C50 357.839 314.378 77.4258 650 51.8945V650H550V450H450L330 650H150V750H270L150 950H250L370 750H450V950H550V750H650Z"
				fill={fill}
			/>
			<path d="M450 650V616.667L430 650H450Z" fill={fill} />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1400 700C1400 1086.6 1086.6 1400 700 1400C313.401 1400 0 1086.6 0 700C0 313.401 313.401 0 700 0C1086.6 0 1400 313.401 1400 700ZM1375 700C1375 1072.79 1072.79 1375 700 1375C327.208 1375 25 1072.79 25 700C25 327.208 327.208 25 700 25C1072.79 25 1375 327.208 1375 700Z"
				fill={fill}
			/>
		</svg>
	);
}

export function AUpper({ className, fill = "currentColor" }: IconProps) {
	return (
		<svg
			className={className}
			width="600"
			height="600"
			viewBox="0 0 600 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M599.999 600.004H499.999V450.004C499.999 422.39 477.613 400.004 449.999 400.004H249.999C222.385 400.004 199.999 422.39 199.999 450.004V600.004H1.91016C26.2823 280.982 280.949 26.3799 599.999 2.10938V600.004Z"
				fill={fill}
			/>
			<path
				d="M374.999 500.004C388.806 500.004 399.999 511.197 399.999 525.004V600.004H299.999V525.004C299.999 511.197 311.192 500.004 324.999 500.004H374.999Z"
				fill={fill}
			/>
			<path
				d="M393.011 25.8613C227.837 93.9216 95.5915 225.617 26.8096 390.416L3.68457 380.897C74.9878 209.98 212.113 73.3857 383.392 2.77832L393.011 25.8613Z"
				fill={fill}
			/>
		</svg>
	);
}

export function IUpper({ className, fill = "currentColor" }: IconProps) {
	return (
		<svg
			className={className}
			width="600"
			height="600"
			viewBox="0 0 600 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 2.10938C319.05 26.3799 573.717 280.982 598.089 600.004H300V500.004H400V400.004H100V500.004H200V600.004H0V2.10938Z"
				fill={fill}
			/>
			<path
				d="M219.117 3.81738C390.05 75.0646 526.677 212.137 597.34 383.374L574.257 392.994C506.141 227.862 374.414 95.6675 209.599 26.9414L219.117 3.81738Z"
				fill={fill}
			/>
		</svg>
	);
}

export function ALower({ className, fill = "currentColor" }: IconProps) {
	return (
		<svg
			className={className}
			width="600"
			height="600"
			viewBox="0 0 600 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M200.001 200H300.001V0H400.001V200H500.001V0H600.001V598.315C280.81 574.034 26.0596 319.219 1.87988 0H200.001V200Z"
				fill={fill}
			/>
			<path
				d="M25.626 207.147C93.6975 372.388 225.454 504.678 390.329 573.452L380.811 596.577C209.817 525.282 73.1626 388.112 2.54395 216.767L25.626 207.147Z"
				fill={fill}
			/>
		</svg>
	);
}

export function ILower({ className, fill = "currentColor" }: IconProps) {
	return (
		<svg
			className={className}
			width="600"
			height="600"
			viewBox="0 0 600 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M200 100H100V200H400V100H300V0H598.121C573.941 319.219 319.191 574.034 0 598.315V0H200V100Z"
				fill={fill}
			/>
			<path
				d="M596.451 219.199C525.212 390.21 388.092 526.897 216.788 597.571L207.169 574.489C372.368 506.362 504.608 374.573 573.326 209.681L596.451 219.199Z"
				fill={fill}
			/>
		</svg>
	);
}
