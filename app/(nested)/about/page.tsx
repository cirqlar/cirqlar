import styles from "./about.module.css";

export default function AboutPage() {
	return (
		<div>
			<div
				className={`absolute left-0 flex w-full flex-col items-center justify-center px-10 md:flex-row md:px-20 ${styles.container} `}
			>
				<h2 className={`text-5xl md:text-6xl ${styles.title}`}>
					About
				</h2>

				<div
					className={`${styles.text} flex flex-col items-center justify-start md:flex-row`}
				>
					<div className={styles.divider}></div>

					<div className={styles.text_container}>
						<p className="text-type">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Reiciendis harum perspiciatis aliquam
							aspernatur provident enim quasi.
						</p>
						<p className="text-type mt-2 text-pretty">
							Exercitationem, doloremque sint modi architecto
							provident accusantium libero illo est nihil
							incidunt. Quidem dolorem numquam tempora debitis,
							iure odio in praesentium molestias.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
