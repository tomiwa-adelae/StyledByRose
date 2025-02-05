import { Button } from "@/components/ui/button";
import { aboutQualities } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8">
			<Image
				src={"/assets/images/rose-2.jpeg"}
				alt={"A picture of Rose Eyo wearing a black jacket"}
				width={1000}
				height={1000}
				className="aspect-square w-full h-full object-cover order-1"
			/>
			<div className="py-12 container space-y-4 flex flex-col items-start justify-center md:order-2">
				<h3 className="text-primary leading-relaxed font-semibold uppercase text-xl">
					Redefining Corporate Elegance
				</h3>
				<p className="text-sm text-gray-800 leading-loose">
					At StyledByRose, we believe that style is more than just
					clothing—it’s a statement of confidence. We specialize in
					helping professionals curate sophisticated, stylish, and
					powerful outfits that elevate their personal and corporate
					image.
				</p>
				<div className="space-y-4">
					{aboutQualities.map(({ title, icon, details }, index) => (
						<div
							key={index}
							className="flex gap-4 items-center justify-start"
						>
							<Image
								src={icon}
								alt={`An icon of the ${title}`}
								width={1000}
								height={1000}
								className="w-[25px] h-[25px]"
							/>
							<p className="text-sm">
								<b>{title}</b>- {details}
							</p>
						</div>
					))}
				</div>
				<div>
					<Button asChild size={"lg"} className="mt-2">
						<Link href="/">Get the 31-Day style guide</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
