import { socialLinks } from "@/constants";
import Image from "next/image";

const FollowSocial = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<div className="text-center space-y-4">
					<h3 className="uppercase leading-relaxed font-semibold text-xl md:text-2xl text-primary">
						Follow on social media
					</h3>
					<p className="text-sm md:w-5/6 mx-auto text-gray-800 leading-loose">
						We know you might have some questions before starting
						your style journey with us. Here are the most frequently
						asked questions to help you get started!
					</p>
				</div>
				<div className="mt-8 flex items-center justify-center gap-6 md:gap-8">
					{socialLinks.map(({ url, icon, name }, index) => (
						<a target="_blank" key={index} href={url}>
							<div className={`inline-block p-3 rounded-full`}>
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
		</div>
	);
};

export default FollowSocial;
