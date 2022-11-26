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
				<meta name="title" content="ÀYÀNFẸ" />
				<meta name="description" content="Check out Ayanfe's website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://www.ayanfe.name/" />
				<meta property="og:title" content="ÀYÀNFẸ" />
				<meta property="og:description" content="Check out Ayanfe's website" />
				<meta property="og:image" content="/social.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="http://www.ayanfe.name/" />
				<meta property="twitter:title" content="ÀYÀNFẸ" />
				<meta property="twitter:description" content="Check out Ayanfe's website" />
				<meta property="twitter:image" content="/social.png" />
			</head>
			<body>
				{children}
			</body>
		</html>
	)
}
