import { testimonials } from "@/constants";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Button } from "./ui/button";
import Link from "next/link";

export function Testimonials() {
	return (
		<div className="py-10">
			<div className="text-center space-y-4 mb-12 container">
				<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
					What Our Clients Are Saying
				</h3>
				<p className="text-sm text-gray-800 leading-loose">
					Don’t just take our word for it—see how StyledByRose has
					transformed the style and confidence of professionals and
					business owners worldwide.
				</p>
			</div>
			<AnimatedTestimonials testimonials={testimonials} />
			<div className="container pt-8">
				<div className="rounded-3xl mt-8 py-6 px-6 bg-primary text-white flex items-center justify-between flex-col sm:flex-row gap-5">
					<h4 className={`font-medium leading-loose text-base`}>
						Join hundreds of women upgrading their style today! Are
						you ready for your transformation?
					</h4>
					<Button
						className="w-full sm:w-auto"
						variant={"secondary"}
						asChild
					>
						<a
							target="_blank"
							href="https://wa.me/message/42L2WCSTORYKK1"
						>
							Get your guide now
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}
