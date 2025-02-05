import Showcase from "@/components/Showcase";
import About from "./components/About";
import OurStyle from "@/components/OurStyle";
import UltimateGuide from "@/components/UltimateGuide";
import { Testimonials } from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQs from "@/components/FAQs";
import FollowSocial from "@/components/shared/FollowSocial";

const page = () => {
	return (
		<div>
			<Showcase />
			<About />
			<OurStyle />
			<UltimateGuide />
			<Testimonials />
			<WhyChooseUs />
			<FAQs />
			<FollowSocial />
		</div>
	);
};

export default page;
