import { LinkInternal } from "@/components/links";
import styles from "./about.module.css";

export default function AboutPage() {
	return (
		<div className="">
			<div
				className={`left-0 flex w-full flex-col items-center md:absolute md:flex-row md:justify-center md:px-20 ${styles.container} `}
			>
				<h2 className={`text-5xl md:text-6xl ${styles.title}`}>
					About
				</h2>

				<div
					className={`${styles.text} flex flex-col items-center justify-start md:flex-row`}
				>
					<div className={styles.divider}></div>

					<div className={styles.text_container}>
						<p className="text-pretty">
							Hello. I'm a Software Developer. I've been employed
							in Frontend development for about{" "}
							<LinkInternal
								href="/webdev"
								className="underline underline-offset-4"
							>
								5 years
							</LinkInternal>{" "}
							and I've been programming for much longer.
						</p>
						<p className="mt-2 text-pretty">
							I've got tons of professional experience using
							frontend and frontend-related tech like Typescript,
							React, Vue, Tailwind and I've worked with{" "}
							<LinkInternal
								href="/webdev"
								className="underline underline-offset-4"
							>
								a lot more
							</LinkInternal>{" "}
							in my free time.
						</p>
						<p className="mt-2 text-pretty">
							I love thinking through problems, working on useful
							software and learning new technology.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
