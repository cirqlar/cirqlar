import { IconProps } from "./icontypes";

const LinkedinIcon = ({ fill = 'currentColor' }: IconProps) => {
	return (
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 0.5C5.3725 0.5 0 5.8725 0 12.5C0 19.1275 5.3725 24.5 12 24.5C18.6275 24.5 24 19.1275 24 12.5C24 5.8725 18.6275 0.5 12 0.5ZM9.0625 17.4738H6.6325V9.65375H9.0625V17.4738ZM7.8325 8.69375C7.065 8.69375 6.56875 8.15 6.56875 7.4775C6.56875 6.79125 7.08 6.26375 7.86375 6.26375C8.6475 6.26375 9.1275 6.79125 9.1425 7.4775C9.1425 8.15 8.6475 8.69375 7.8325 8.69375ZM17.9375 17.4738H15.5075V13.14C15.5075 12.1313 15.155 11.4462 14.2763 11.4462C13.605 11.4462 13.2063 11.91 13.03 12.3563C12.965 12.515 12.9488 12.74 12.9488 12.9638V17.4725H10.5175V12.1475C10.5175 11.1713 10.4862 10.355 10.4537 9.6525H12.565L12.6763 10.7388H12.725C13.045 10.2288 13.8288 9.47625 15.14 9.47625C16.7388 9.47625 17.9375 10.5475 17.9375 12.85V17.4738Z" 
				fill={fill}
			/>
		</svg>

	)
}

export default LinkedinIcon;