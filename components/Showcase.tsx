import Image from "next/image";
import Header from "./shared/Header";
import { ColourfulText } from "./ui/colourful-text";
// import { Irish_Grover } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

// const irish = Irish_Grover({
// 	subsets: ["latin"],
// 	weight: ["400"],
// });

const Showcase = () => {
	return (
		// <div className="bg-gradient-to-r from-black to-[#252222] min-h-[90vh]">
		<div className="bg-gradient-to-r from-orange-50 to-neutral-50 text-black min-h-[90vh]">
			<Header />
			<div className="container grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4 text-black">
				<div className="space-y-6 col-span-3 flex flex-col items-start justify-center pt-20 md:pt-0">
					<h1
						className={`text-4xl lg:text-6xl font-semibold leading-snug lg:leading-snug`}
					>
						Elevate your style, <br />
						Own your <ColourfulText text="Confidence" />
					</h1>
					<p className="text-sm lg:text-base text-gray-700 leading-loose lg:leading-loose">
						Premium corporate styling for professionals who want to
						stand out with confidence and elegance.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full">
						<Button
							variant={"black"}
							className="w-full"
							asChild
							size={"lg"}
						>
							<Link href="/about">Learn more</Link>
						</Button>
						<Button className="w-full" asChild size={"lg"}>
							<a
								target="_blank"
								href="https://wa.me/message/42L2WCSTORYKK1"
							>
								Get the 31-Day style guide
							</a>
						</Button>
					</div>
				</div>
				<div className="justify-items-center col-span-2">
					<Image
						src={"/assets/images/rose-1.png"}
						alt={"A picture of Rose Eyo wearing a black jacket"}
						width={1000}
						height={1000}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
