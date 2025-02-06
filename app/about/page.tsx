import FAQs from "@/components/FAQs";
import FollowSocial from "@/components/shared/FollowSocial";
import Header from "@/components/shared/Header";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div>
			<Header border={true} />
			<div className="pt-14">
				<h1
					className={`text-4xl lg:text-6xl ${irish.className} text-center leading-normal lg:leading-normal text-primary`}
				>
					About StyledByRose
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-8">
					<Image
						src={"/assets/images/rose-2.jpeg"}
						alt={"A picture of Rose Eyo wearing a black jacket"}
						width={1000}
						height={1000}
						className="w-auto h-auto aspect-square object-cover"
					/>
					<Image
						src={"/assets/images/rose-3.jpeg"}
						alt={"A picture of Rose Eyo wearing a black jacket"}
						width={1000}
						height={1000}
						className="w-auto h-auto aspect-square object-cover md:rounded-tr-[300px]"
					/>
				</div>
				<div className="container grid grid-cols-1 md:grid-cols-4 gap-4 py-14">
					<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
						About us
					</h3>
					<div className="leading-loose text-sm space-y-4 col-span-3">
						<p>
							At StyledByRose, we believe that style is more than
							just fashion—it’s a statement of confidence,
							professionalism, and self-expression. We specialize
							in premium corporate styling, helping professionals,
							business owners, and individuals refine their
							wardrobes to create sophisticated, stylish, and
							powerful looks.
						</p>
						<p>
							We educate our clients on how to style themselves
							effortlessly, from mastering color coordination to
							perfecting blazer pairings and understanding the
							nuances of corporate elegance. Whether you need a
							complete wardrobe transformation or styling guidance
							for a specific occasion, StyledByRose is here to
							help.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
					<Image
						src={"/assets/images/rose-4.jpeg"}
						alt={"A picture of Rose Eyo wearing a black jacket"}
						width={1000}
						height={1000}
						className="w-auto h-auto aspect-square object-cover"
					/>
					<div className="container py-8 flex flex-col items-start justify-center">
						<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
							Our journey
						</h3>
						<div className="leading-loose text-sm space-y-4 col-span-3 mt-4">
							<p>
								StyledByRose was founded with a simple yet
								powerful goal: to empower individuals through
								style. We recognized that many professionals
								struggle with creating a polished, cohesive look
								that reflects their ambitions and personal
								brand. That’s why we set out to create a styling
								system that is both practical and effective,
								allowing anyone to dress with confidence and
								ease.
							</p>
							<p>
								From one-on-one consultations to our highly
								sought-after 31-Day Style Guide for Professional
								Women, we have helped countless individuals
								elevate their style game and embrace the power
								of a well-curated wardrobe.
							</p>
						</div>
					</div>
				</div>
				<FAQs />
				<FollowSocial />
			</div>
		</div>
	);
};

export default page;
