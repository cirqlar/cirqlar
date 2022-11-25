import { Fragment } from "react";
import { LATO_BOLD } from "../../globals/font";

import styles from "./experience.module.css";

const experience = [
	{
		company: 'Helicarrier',
		dates: 'AUG 2021 - Present',
		tools: 'React, Nextjs, Vuejs, Nodejs, Express, React Native etc.',
		description: 'Responsible for developing, optimizing, testing and fixing web and mobile apps and UI components; and converting design assets into responsive UI.'
	},
	{
		company: 'Crenet Techlabs',
		dates: 'AUG 2020 - AUG 2021',
		tools: 'React, Vuejs, Nodejs, etc.',
		description: 'Responsible for developing web applications using frontend frameworks, libraries and tools.'
	},
	{
		company: 'Freelance',
		dates: '2016-2017, 2020',
		tools: 'React, Nextjs, Ruby on Rails,  etc.',
		description: 'Designing, developing and managing websites for clients'
	},
];

const ExperiencePage = () => {
	return (
		<div className="w-full h-full overflow-y-auto md:flex justify-center items-center p-8">
			<div className={styles.grid}>
				{experience.map((exp) => (
					<Fragment key={exp.company}>
						<p
							className={`
								${LATO_BOLD.className}
								h-8 lg:h-10 px-3 flex items-center
								justify-self-start md:justify-self-end
								bg-[#FFFFFF45] text-dark-purple
								text-xs md:text-sm lg:text-base
							`}
						>
							{exp.dates}
						</p>
						<div className="max-md:mb-6 last:mb-0">
							<p className={`${LATO_BOLD.className} text-2xl lg:text-4xl h-8 lg:h-10 flex items-center mb-2 md:mb-4`}>{exp.company}</p>
							<p className="text-sm lg:text-base mb-2 md:mb-4">Tools: {exp.tools}</p>
							<p className="text-base lg:text-xl">{exp.description}</p>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
}


export default ExperiencePage;