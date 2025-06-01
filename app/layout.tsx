import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const lato = Lato({
	weight: ["300", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ayanfe",
	description: "Check out Ayanfe's website",
	icons: "/favicon.ico",

	openGraph: {
		type: "website",
		url: "https://www.ayanfe.name/",
		title: "Ayanfe",
		description: "Check out Ayanfe's website",
		images: "https://www.ayanfe.name/social.png",
	},

	twitter: {
		card: "summary_large_image",
		title: "Ayanfe",
		description: "Check out Ayanfe's website",
		images: "https://www.ayanfe.name/social.png",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark" lang="en">
			<head>
				<link
					rel="preload"
					href="/alower.svg"
					as="image"
					type="image/svg+xml"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/aupper.svg"
					as="image"
					type="image/svg+xml"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/iupper.svg"
					as="image"
					type="image/svg+xml"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={`${lato.className} bg-back text-type antialiased`}>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	);
}
