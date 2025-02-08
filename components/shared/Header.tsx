"use client";
import { navLinks } from "@/constants";
import { Irish_Grover } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./MobileNavbar";
import { Button } from "../ui/button";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Header = ({ border }: { border?: boolean }) => {
	const pathname = usePathname();
	return (
		<header className={`py-8 z-50 ${border && "border-primary border-b"}`}>
			<div className="container flex items-center justify-between gap-2">
				<h3
					className={`uppercase text-primary text-2xl lg:text-2xl font-semibold ${
						irish.className
					} ${pathname !== "/" && "text-green-400"}`}
				>
					<Link href="/">StyedByRose</Link>
				</h3>
				<nav className="hidden md:flex">
					<ul className="flex items-center justify-center gap-8">
						{navLinks.map(({ title, route }, index) => (
							<Link
								key={index}
								className={`uppercase text-xs font-semibold hover:text-primary transition ease-in-out ${
									pathname === "/" &&
									"text-white border-gray-200"
								}`}
								href={route}
							>
								{title}
							</Link>
						))}
						<Button asChild>
							<a
								target="_blank"
								href="https://wa.me/message/42L2WCSTORYKK1"
							>
								Get styled calendar
							</a>
						</Button>
					</ul>
				</nav>
				<div className="md:hidden">
					<MobileNavbar />
				</div>
			</div>
		</header>
	);
};

export default Header;
