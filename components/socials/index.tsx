import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";

export const socials = [
	{ key: 'email', href: '#', Icon: EmailIcon },
	{ key: 'github', href: '#', Icon: GithubIcon },
	{ key: 'linkedin', href: '#', Icon: LinkedinIcon },
];

export function SocialLink({ social }: { social: typeof socials[0] }) {
	return (
		<a href={social.href}>
			<social.Icon />
		</a>
	);
}

type SocialsProps = {
	className?: string,
	classNameOverride?: boolean,
	SocialLinkComponent?: typeof SocialLink,
};

export default function Socials({
	className,
	classNameOverride = false,
	SocialLinkComponent = SocialLink,
}: SocialsProps) {
	const classes = classNameOverride
		? className
		: `border-2 border-type rounded-sm flex gap-2 px-2 py-2 w-min ${className}`
	
	return (
		<div className={classes}>
			{socials.map(each => (
				<SocialLinkComponent social={each} key={each.key} />
			))}
		</div>
	)
}