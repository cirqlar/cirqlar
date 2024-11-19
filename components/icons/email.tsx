import { IconProps } from "./icontypes";

const EmailIcon = ({ fill = 'currentColor', className }: IconProps) => {
	return (
		<svg width="24" height="25" className={className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5ZM6.006 8.7C6.006 8.04 6.54 7.5 7.2 7.5H16.8C17.46 7.5 18 8.04 18 8.7V15.9C18 16.56 17.46 17.1 16.8 17.1H7.2C6.54 17.1 6 16.56 6 15.9L6.006 8.7ZM12 12.9L16.8 9.9V8.7L12 11.7L7.2 8.7V9.9L12 12.9Z"
				fill={fill}
			/>
		</svg>

	)
}

export default EmailIcon;




