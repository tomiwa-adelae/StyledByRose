"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

export function Reasons() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-8 md:grid-cols-12 md:grid-rows-3 lg:gap-8 xl:max-h-[34rem] xl:grid-rows-2 mt-10">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={"/assets/icons/diamond.svg"}
				title="Premium Styling Expertise"
				description="Over 5 years of experience in corporate & professional styling."
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={"/assets/icons/book.svg"}
				title="Educational & Transformational"
				description="Learn color coordination, outfit layering, and wardrobe essentials."
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={"/assets/icons/scissors.svg"}
				title="Tailored for Busy Professionals"
				description="No more last-minute outfit stress—our guides and services make dressing effortless."
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={"/assets/icons/calendar.svg"}
				title="Exclusive 31-Day Style Guide"
				description="A carefully curated monthly styling blueprint for busy women."
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={"/assets/icons/briefcase.svg"}
				title="Trusted by Professionals & Entrepreneurs"
				description="Hundreds of satisfied clients across corporate, business, and media industries."
			/>
		</ul>
	);
}

interface GridItemProps {
	area: string;
	icon: string;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<div className="relative h-full border p-2 rounded-3xl md:p-3">
				<GlowingEffect
					blur={0}
					borderWidth={3}
					spread={80}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<Image
							src={icon}
							alt={title}
							width={1000}
							height={1000}
							className="w-[25px] h-[25px]"
						/>
						<div className="space-y-3">
							<h3 className="pt-0.5 text-xl font-semibold -tracking-4 text-balance text-black leading-relaxed dark:text-white">
								{title}
							</h3>
							<h2
								className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm leading-loose 
              text-black dark:text-neutral-400"
							>
								{description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
