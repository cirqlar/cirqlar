import React from "react";
import Link from "next/link";
import { LATO_BOLD } from "../globals/font";

import styles from "./layout.module.css";
import SocialLinks from "../components/social-links";
import FrontendLayoutNav from "./layoutNav";

import bgImg from '../globals/images/night.png';
import Image from "next/image";

const FrontendLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	
	return (
		<>
			<div className="absolute inset-0 bg-dark-purple">
				<Image src={bgImg} alt='' fill priority className="object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-60" />
			</div>
			<div className={`${styles.grid}`}>
				<div className="bg-[#2C2C36] border-r border-black hidden md:block">
					<div className="bg-[#484862] w-36 rounded-tr-xl h-full"></div>
				</div>
				<div className="bg-[#2C2C36] flex justify-between items-center">
					<div className="bg-[#484862] w-36 rounded-tr-xl h-full"></div>
					<div className="flex gap-4 justify-center items-center w-min pr-3">
						<div className="w-3 h-3 rounded-full bg-green-600"></div>
						<div className="w-3 h-3 rounded-full bg-orange-600"></div>
						<div className="w-3 h-3 rounded-full bg-red-600"></div>
					</div>
				</div>
				<div className="flex md:block gap-4 pt-4 md:pt-0 flex-col items-center md:border-r bg-dark-purple border-black relative row-start-3 md:row-start-auto max-w-full max-h-full">
					<FrontendLayoutNav />
					<div className="md:absolute inset-x-0 bottom-0 md:h-28 flex justify-center items-center gap-4 md:gap-8">
						<Link href="/" className={`${LATO_BOLD.className} text-2xl md:text-4xl uppercase`}>Àyànfẹ</Link>
						<SocialLinks />
					</div>
				</div>
				{children}
			</div>
		</>
	);
}

export default FrontendLayout;