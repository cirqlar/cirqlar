import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";

export default function NestedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			className={`w-full min-h-full relative p-10 md:p-20 flex flex-col justify-between`}
		>
			<div className="">
				<h1 className="text-4xl font-bold uppercase">
					<span>Ayanfeoluwa</span>
					<br />
					<span className="inline-block mt-6">Ibitoye</span>
				</h1>
			</div>

			{children}

			<div className="flex mt-6 md:mt-0">
				<div className="border-2 border-slate-900 dark:border-slate-100 rounded flex gap-2 px-2 py-2">
					<a href="#">
						<EmailIcon />
					</a>
					<a href="#">
						<GithubIcon />
					</a>
					<a href="#">
						<LinkedinIcon />
					</a>
				</div>
			</div>
		</main>
	);
}