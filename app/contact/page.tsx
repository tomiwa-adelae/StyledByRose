import ContactDetails from "@/components/ContactDetails";
import { ContactForm } from "@/components/forms/ContactForm";
import Header from "@/components/shared/Header";
import { socialLinks } from "@/constants";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact StyledByRose | Get in Touch for Expert Corporate Styling",
	description:
		"Have questions or need expert fashion guidance? Contact StyledByRose for corporate styling services, wardrobe consultations, and personalized fashion advice. Let’s elevate your style today!",
	keywords:
		"contact StyledByRose, corporate styling consultation, fashion advice, professional styling, wardrobe consultation, personal stylist, business fashion expert, get in touch, tomiwa adelae, rose eyo",
};

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});
const page = () => {
	return (
		<div>
			<Header border={true} />
			<div className="py-14 container">
				<h1
					className={`text-4xl lg:text-6xl ${irish.className} text-center leading-normal lg:leading-normal text-primary`}
				>
					Contact us
				</h1>

				<div className="container py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="flex flex-col items-start justify-center">
						<h3 className="text-primary uppercase leading-relaxed font-semibold text-lg md:text-xl">
							Keep in touch with us
						</h3>
						<div className="leading-loose text-sm space-y-4 col-span-3 mt-4">
							<p>
								We’re here to assist you! Whether you have
								questions or need support, feel free to reach
								out. Our team is always ready to help.
							</p>
						</div>
						<ContactDetails />
						<div className="mt-4 flex items-center justify-start gap-4">
							{socialLinks.map(({ url, icon, name }, index) => (
								<a target="_blank" key={index} href={url}>
									<div
										className={`inline-block p-3 rounded-full`}
									>
										<Image
											src={icon}
											alt={name}
											width={1000}
											height={1000}
											className="w-[25px] h-[25px]"
										/>
									</div>
								</a>
							))}
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default page;
