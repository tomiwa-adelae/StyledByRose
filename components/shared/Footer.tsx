import { Irish_Grover } from "next/font/google";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer
			className={`font-medium bg-primary py-8 uppercase text-sm text-white text-center`}
		>
			&copy; StyledByRose {year}. All rights reserved
		</footer>
	);
};

export default Footer;
