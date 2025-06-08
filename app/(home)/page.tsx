import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<main className="p-8 flex flex-col gap-8">
				<h1 className="text-4xl font-bold text-center">Solx</h1>
				<Content />
			</main>
		</>
	);
}

function Content() {
	return (
		<div className="flex flex-col gap-8 max-w-lg mx-auto">
			<p>Solx is coming soon.</p>
			<Button>Get Started!</Button>
		</div>
	);
}
