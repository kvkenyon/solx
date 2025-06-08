import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
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

const notoSans = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"],
});

const notoSansMono = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"],
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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}
			>
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
									<main className="flex flex-col h-screen">
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
