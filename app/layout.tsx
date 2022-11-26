import './globals/globals.css'

import { LATO_REGULAR } from './globals/font'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={LATO_REGULAR.className}>
			<head>
				<title>ÀYÀNFẸ</title>
				<meta name="description" content="Ayanfe's website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Ayanfe"/>
				<meta property="og:description" content="Check out Ayanfe's website"/>
				<meta name="twitter:card" content="sumary"/>
			</head>
			<body>
				{children}
			</body>
		</html>
	)
}
