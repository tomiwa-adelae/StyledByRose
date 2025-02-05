import { images } from "@/constants";
import React from "react";
import { ImageLibrary } from "./ImageLibrary";

const OurStyle = () => {
	return (
		<div className="bg-white py-10">
			<div className="container">
				<div className="text-center space-y-4">
					<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
						Our Style in Action
					</h3>
					<p className="text-sm text-gray-800 leading-loose">
						At StyledByRose, we believe that style is more than just
						clothing—it’s a statement of confidence. We specialize
						in helping professionals curate sophisticated, stylish,
						and powerful outfits that elevate their personal and
						corporate image.
					</p>
				</div>
				<ImageLibrary images={images} />
			</div>
		</div>
	);
};

export default OurStyle;
