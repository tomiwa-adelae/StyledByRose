"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Irish_Grover } from "next/font/google";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export function MobileNavbar() {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"ghost"} className="hover:bg-transparent">
					<Image
						src="/assets/icons/menu.svg"
						alt="Menu Icon"
						width={1000}
						height={1000}
						className={`w-[20px] h-[20px] ${
							pathname === "/" && "invert"
						}`}
					/>
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"}>
				<SheetHeader className="border-primary border-b">
					<SheetClose asChild>
						<Link href="/">
							<h3
								className={`uppercase text-left font-bold text-primary text-xl hover:text-primary/90 pb-4 transition ease-out ${irish.className}`}
							>
								StyedByRose
							</h3>
						</Link>
					</SheetClose>
				</SheetHeader>
				<nav className="flex flex-col font-semibold gap-0.5 py-4 text-xs uppercase">
					{navLinks.map(({ title, route }, index) => {
						const isActive =
							pathname === route ||
							pathname.startsWith(`${route}/`);

						return (
							<SheetClose
								asChild
								key={index}
								className="p-3.5 hover:bg-gray-100 transition ease-out"
							>
								<Link
									href={route}
									className={`${isActive && "text-primary"}`}
								>
									{title}
								</Link>
							</SheetClose>
						);
					})}
					<Button asChild className="mt-8">
						<a
							target="_blank"
							href="https://wa.me/message/42L2WCSTORYKK1"
						>
							Get 31-day-style guide
						</a>
					</Button>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
