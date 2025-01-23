import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import tw from "@/utilities/tw";

export const socials = [
	{ key: "email", href: "#", Icon: EmailIcon },
	{ key: "github", href: "#", Icon: GithubIcon },
	{ key: "linkedin", href: "#", Icon: LinkedinIcon },
];

export function SocialLink({ social }: { social: (typeof socials)[0] }) {
	return (
		<a href={social.href}>
			<social.Icon />
		</a>
	);
}

type SocialsProps = {
	className?: string;
	classNameOverride?: boolean;
	SocialLinkComponent?: typeof SocialLink;
};

export default function Socials({
	className,
	classNameOverride = false,
	SocialLinkComponent = SocialLink,
}: SocialsProps) {
	const classes = classNameOverride
		? className
		: tw`border-type flex w-min gap-2 rounded-sm border-2 px-2 py-2 ${className}`;

	return (
		<div className={classes}>
			{socials.map((each) => (
				<SocialLinkComponent social={each} key={each.key} />
			))}
		</div>
	);
}
