import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Irish_Grover } from "next/font/google";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div>
			<Header border={true} />
			<main className="container min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center">
				<h1
					className={`text-6xl lg:text-8xl ${irish.className} leading-normal lg:leading-normal text-primary`}
				>
					404!
				</h1>
				<p className="text-sm lg:text-base leading-loose lg:leading-loose">
					Oops! You’re off the runway. This page doesn’t exist
				</p>
				<Button className="w-full sm:w-auto" asChild size={"lg"}>
					<Link target="_blank" href="/">
						Go back
					</Link>
				</Button>
			</main>
		</div>
	);
};

export default page;
