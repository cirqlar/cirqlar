import './globals/globals.css'

import { LATO_REGULAR } from './globals/font'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ÀYÀNFẸ',
	description: "Check out Ayanfe's website",
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	icons: '/favicon.ico',

	openGraph: {
		type: 'website',
		url: 'https://www.ayanfe.name/',
		title: 'ÀYÀNFẸ',
		description: "Check out Ayanfe's website",
		images: 'https://www.ayanfe.name/social.png',
	},
	
	twitter: {
		card: 'summary_large_image',
		title: 'ÀYÀNFẸ',
		description: "Check out Ayanfe's website",
		images: 'https://www.ayanfe.name/social.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={LATO_REGULAR.className}>
			<body className='text-white'>
				{children}
			</body>
		</html>
	)
}
