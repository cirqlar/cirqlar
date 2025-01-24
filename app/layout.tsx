import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const lato = Lato({
	weight: ["300", "700"],
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
			<head></head>
			<body className={`${lato.className} bg-base text-type antialiased`}>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	);
}
