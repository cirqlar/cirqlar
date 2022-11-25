import Image from "next/image";
import Link from "next/link";

import styles from "./projects.module.css";

import ayanfeImg from "./images/ayanfe.png";
import ishraiImg from "./images/ishrai.png";
import marvellImg from "./images/marvell.png";
import fliqpayImg from "./images/fliqpay.png";
import { LATO_BOLD } from "../../globals/font";
import CarButton from "./car-button";

const projects = [
	{
		name: 'ayanfe.com',
		url: '/',
		githubUrl: 'https://github.com/cirqlar/cirqlar',
		tools: 'Nextjs, Typescript',
		image: ayanfeImg,
	},
	{
		name: 'ISHRAI',
		url: 'https://ishrai.vercel.app/',
		githubUrl: 'https://github.com/cirqlar/ishrai',
		tools: 'Nextjs, Forestry.io',
		image: ishraiImg,
	},
	{
		name: 'Mar-vell',
		url: 'https://mar-vell.onrender.com',
		githubUrl: 'https://github.com/cirqlar/Mar-Vell',
		tools: 'Nextjs, Javascript',
		image: marvellImg,
	},
	{
		name: 'Fliqpay Test',
		url: 'https://fliqpay-test.vercel.app/',
		githubUrl: 'https://github.com/cirqlar/fliqpay-test',
		tools: 'React, Typescript',
		image: fliqpayImg,
	},
];

const ProjectsPage = () => {
	return (
		<div className={styles.grid}>
			<div className={styles.projects}>
				{projects.map((project, index) => (
					<div key={project.url} id={project.name.replaceAll(/ |\./g, '-')} className={`${styles.project} @container/project`}>
						<div className="min-h-0 overflow-hidden relative">
							<Image
								src={project.image}
								alt={`${project.name} made with ${project.tools}`}
								priority
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-10" />
						</div>
						<div className={`${LATO_BOLD.className} flex justify-between items-center px-6 bg-white text-dark-purple`}>
							<div className="flex flex-col @lg:flex-row h-12 justify-center @lg:justify-start @lg:items-end gap-1 @lg:gap-3">
								<h3 className="text-2xl @lg:text-4xl">{project.name}</h3>
								<p className="text-sm @lg:text-base mt-1">{project.tools}</p>
							</div>
							<div className="flex @lg:h-12 items-end gap-2">
								<a href={project.githubUrl} className="text-lg @lg:text-2xl" target="_blank" rel="noreferrer">Github</a>
								<div className="h-7 @lg:h-8 w-[2px] @lg:w-[3px] bg-dark-purple" />
								{project.url === '/'
									? (<Link href="/" className="text-lg @lg:text-2xl">Site</Link>)
									: (<a href={project.url} className="text-lg @lg:text-2xl" target="_blank" rel="noreferrer">Site</a>)
								}
							</div>
						</div>
					</div>
				))}
				<div id={"More...".replaceAll(/ |\./g, '-')} className={styles.project}>
					
				</div>
			</div>
			<div className="flex justify-center items-center">
				{projects.map(({ name }, index) => (
					<CarButton key={name} name={name} index={index} />
				))}
				<CarButton name="More..." index={projects.length} hideRight />
			</div>
		</div>
	);
}


export default ProjectsPage;