import React from "react";
import { Reasons } from "./Reasons";

const WhyChooseUs = () => {
	return (
		<div className="bg-white pt-10 pb-16">
			<div className="container">
				<div className="space-y-4">
					<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
						What Makes Us Different?
					</h3>
					<p className="text-sm text-gray-800 md:max-w-3xl leading-loose">
						At StyledByRose, we believe that style is more than just
						clothing—it’s a statement of confidence,
						professionalism, and success. Here’s why women trust us
						for their style transformation.
					</p>
				</div>
				<Reasons />
			</div>
		</div>
	);
};

export default WhyChooseUs;
