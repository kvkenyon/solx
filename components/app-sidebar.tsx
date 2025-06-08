"use client";

import { Home } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/clerk-react";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Solx</SidebarGroupLabel>
					<SidebarMenu>
						{items.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarSeparator />

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<UserButton />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
