import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";

import "./globals.css";
import ConvexClientProvider from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";

const dmSans = DM_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
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
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${dmSans.variable} ${dmMono.variable}`}
		>
			<body className="antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ClerkProvider dynamic>
						<ConvexClientProvider>
							<SidebarProvider defaultOpen={defaultOpen}>
								<AppSidebar />
								<SidebarInset>
									<main className="flex flex-col">
										<div className="flex flex-row justify-between items-center ">
											<SidebarTrigger />
											<ModeToggle />
										</div>
										{children}
									</main>
								</SidebarInset>
							</SidebarProvider>
						</ConvexClientProvider>
					</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
