import EmailIcon from "./icons/email";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

const SocialLinks = () => {
	return (
		<div className="flex justify-center">
			<div className="flex gap-3 p-2 w-min justify-center items-center border border-white rounded-md">
				<a href="https://github.com/cirqlar" target="_blank" rel="noreferrer"><GithubIcon /></a>
				<a href="https://www.linkedin.com/in/ibitoyeayanfe/" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
				<a href="mailto:ibitoyeayanfeoluwa@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
			</div>
		</div>
	);
}

export default SocialLinks;