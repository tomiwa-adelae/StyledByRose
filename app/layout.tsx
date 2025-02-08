import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "StyledByRose | Corporate Styling for Professionals",
	description:
		"Discover sophisticated, stylish, and professional fashion with StyledByRose. Elevate your corporate styling with expert fashion tips, a 31-day style guide, and personalized styling services. Dress with confidence and success!",
	keywords:
		"corporate styling, professional fashion, women’s workwear, style guide, business fashion, fashion consultancy, color coordination, blazer styling, outfit ideas, wardrobe tips, personal stylist, tomiwa adelae, rose eyo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
