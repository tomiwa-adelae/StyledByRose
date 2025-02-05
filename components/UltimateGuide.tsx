import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { whoIsItFor } from "@/constants";

const UltimateGuide = () => {
	return (
		<div className="container py-12">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="space-y-4 flex flex-col items-start justify-center col-span-2">
					<h3 className="text-primary leading-relaxed font-semibold uppercase text-xl">
						Your Ultimate 31-Day Style Guide
					</h3>
					<p className="text-sm text-gray-800 leading-loose">
						Struggling with outfit choices? Our 31 Days Style Guide
						is a carefully curated plan designed for professional
						women who want to look stylish, confident, and polished
						every day—without the stress of deciding what to wear.
					</p>
					<div>
						<h4 className="text-primary leading-relaxed font-semibold uppercase text-base mb-2">
							Who is it for?
						</h4>
						<div className="space-y-4">
							{whoIsItFor.map(({ title, details }, index) => (
								<div
									key={index}
									className="flex gap-4 items-center justify-start"
								>
									<Image
										src={"/assets/icons/check.svg"}
										alt={`An icon of the green check up`}
										width={1000}
										height={1000}
										className="w-[25px] h-[25px]"
									/>
									<p className="text-sm leading-loose">
										<b>{title}</b>- {details}
									</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<h4 className="text-primary leading-relaxed font-semibold uppercase text-base mb-2">
							Price
						</h4>
						<div className="flex gap-4 items-center justify-start">
							<Image
								src={"/assets/icons/money.svg"}
								alt={`An icon of money icon`}
								width={1000}
								height={1000}
								className="w-[25px] h-[25px]"
							/>
							<p className="text-sm leading-loose">
								Starting at <b>₦15,000</b> but is <b>₦10,000</b>{" "}
								till the 28th of February, 2025
							</p>
						</div>
					</div>
					<div>
						<Button asChild size={"lg"} className="mt-2">
							<Link href="/">Get the 31-Day style guide</Link>
						</Button>
					</div>
				</div>
				<Image
					src={"/assets/images/guide.jpeg"}
					alt={"A picture of the 31 days styling guide"}
					width={1000}
					height={1000}
					className="aspect-auto w-full h-full object-cover col-span-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md"
				/>
			</div>
		</div>
	);
};

export default UltimateGuide;
