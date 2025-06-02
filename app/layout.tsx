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
		<html className="dark relative h-full w-full overflow-hidden" lang="en">
			<head></head>
			<body
				className={`${lato.className} bg-back text-type relative h-full w-full overflow-auto scroll-smooth antialiased`}
			>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	);
}
