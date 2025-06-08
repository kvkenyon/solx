const authConfig = {
	providers: [
		// Uncomment this once you have set up a Clerk app
		{
			domain: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
			applicationID: "convex",
		},
	],
};

export default authConfig;
