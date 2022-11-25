import { LATO_BOLD } from "../../globals/font";

import styles from "./skills.module.css";

const skills = [
	{ skill: 'Javascript', dates: 'Since 2015' },
	{ skill: 'HTML5', dates: 'Since 2015' },
	{ skill: 'CSS3', dates: 'Since 2015' },
	{ skill: 'React', dates: '2+ years' },
	{ skill: 'Nextjs', dates: '2 years' },
	{ skill: 'Typescript', dates: '2 years' },
	{ skill: 'Nodejs', dates: '2+ years' },
	{ skill: 'Vuejs', dates: '2 years' },
	{ skill: 'React Native', dates: '1+ years' },
	{ skill: 'Git', dates: 'Since 2015' },
	{ skill: 'Graphql', dates: '1+ years' },
]

const SkillsPage = () => {
	return (
		<div className="w-full h-full overflow-y-auto flex flex-col md:justify-center items-center gap-8 max-md:px-4 md:gap-16 pt-8 pb-1 md:py-8">
			<div className={styles.grid}>
				{skills.map((skill) => (
					<div className={`${LATO_BOLD.className} flex h-10 items-center gap-2 lg:gap-6`} key={skill.skill}>
						<p
							className={`
								w-[70px] md:w-24 lg:w-28 h-8 lg:h-10 px-1 md:px-3
								flex items-center justify-center justify-self-end
								bg-[#FFFFFF45] text-dark-purple
								text-xs md:text-sm lg:text-base
							`}
						>{skill.dates}</p>
						<p className="md:text-xl lg:text-3xl whitespace-nowrap">{skill.skill}</p>
					</div>
				))}
			</div>
			<div className="flex gap-3 max-w-md">
				<p className={LATO_BOLD.className}>Others:</p>
				<p className="italic">Ruby, Ruby on Rails, REST, Angular, Tailwind, Jest (testing framework), Python, C#, C++</p>
			</div>
		</div>
	);
}


export default SkillsPage;