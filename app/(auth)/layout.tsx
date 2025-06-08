import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";

import "../globals.css";
import ConvexClientProvider from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const dmSans = DM_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
});

const dmMono = DM_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: "SolX",
	description: "Get better with humans",
	icons: {
		icon: "/convex.svg",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${dmSans.variable} ${dmMono.variable}`}
		>
			<body className="antialiased">
				<ClerkProvider dynamic>
					<ConvexClientProvider>
						<main className="flex flex-col items-center justify-center h-screen">
							{children}
						</main>
					</ConvexClientProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
