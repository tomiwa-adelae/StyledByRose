import Image from "next/image";
import Header from "./shared/Header";
import { ColourfulText } from "./ui/colourful-text";
import { Irish_Grover } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
		<div className="bg-gradient-to-r from-gray-900 to-black min-h-[90vh]">
			<Header />
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
				<div className="space-y-6">
					<h1
						className={`text-4xl lg:text-5xl ${irish.className} leading-normal lg:leading-normal`}
					>
						Elevate your style, <br />
						Own your <ColourfulText text="Confidence" />
					</h1>
					<p className="text-sm lg:text-base text-gray-200 leading-loose lg:leading-loose">
						Premium corporate styling for professionals who want to
						stand out with confidence and elegance.
					</p>
					<div className="flex items-center justify-start gap-8">
						<Button
							variant={"secondary"}
							className="w-full"
							asChild
							size={"lg"}
						>
							<Link href="/">Learn more</Link>
						</Button>
						<Button className="w-full" asChild size={"lg"}>
							<Link href="/">Get the 31-Day style guide</Link>
						</Button>
					</div>
				</div>
				<div className="justify-items-center">
					<Image
						src={"/assets/images/rose-1.png"}
						alt={"A picture of Rose Eyo wearing a black jacket"}
						width={1000}
						height={1000}
						className="w-auto h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
