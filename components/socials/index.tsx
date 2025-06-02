import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import tw from "@/utilities/tw";

export const socials = [
	{
		key: "email",
		href: "mailto:ibitoyeayanfeoluwa@gmail.com",
		Icon: EmailIcon,
	},
	{ key: "github", href: "https://github.com/cirqlar", Icon: GithubIcon },
	{
		key: "linkedin",
		href: "https://www.linkedin.com/in/ibitoyeayanfe/",
		Icon: LinkedinIcon,
	},
];

export function SocialLink({ social, className }: { social: (typeof socials)[0], className?: string }) {
	return (
		<a href={social.href} className="hover:text-primary focus:text-primary">
			<social.Icon className={className} />
		</a>
	);
}

type SocialsProps = {
	className?: string;
	classNameOverride?: boolean;
	iconClassName?: string;
	SocialLinkComponent?: typeof SocialLink;
};

export default function Socials({
	className,
	classNameOverride = false,
	iconClassName,
	SocialLinkComponent = SocialLink,
}: SocialsProps) {
	const classes = classNameOverride
		? className
		: tw`border-type flex w-min gap-2 rounded-sm border-2 px-2 py-2 ${className}`;

	return (
		<div className={classes}>
			{socials.map((each) => (
				<SocialLinkComponent social={each} key={each.key} className={iconClassName} />
			))}
		</div>
	);
}
