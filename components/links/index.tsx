import tw from "@/utilities/tw";
import Link, { LinkProps } from "next/link";

export const LinkInternal = (
	props: React.HTMLProps<HTMLAnchorElement> &
		LinkProps & { classNameOverride?: boolean },
) => {
	const className = props.classNameOverride
		? props.className
		: tw`${props.className} hover:text-primary focus:text-primary`;
	return <Link {...props} className={className} />;
};

export const LinkExternal = (
	props: React.HTMLProps<HTMLAnchorElement> & { classNameOverride?: boolean },
) => {
	const className = props.classNameOverride
		? props.className
		: tw`${props.className} hover:text-primary focus:text-primary`;
	return <a {...props} className={className} />;
};
