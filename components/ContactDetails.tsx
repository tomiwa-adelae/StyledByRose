import { contactDetails } from "@/constants";
import Image from "next/image";

const ContactDetails = () => {
	return (
		<div className="grid gap-4 mt-8">
			{contactDetails.map(({ icon, title, detail }, index) => (
				<div
					key={index}
					className="flex items-center justify-start gap-2"
				>
					<Image
						src={icon}
						alt={`The icon of a ${title}`}
						width={1000}
						height={1000}
						className="w-[30px] h-[30px]"
					/>
					<a
						href={
							title === "email"
								? `mailto:${detail}`
								: `tel:${detail}`
						}
						className="font-semibold text-sm"
					>
						{detail}
					</a>
				</div>
			))}
		</div>
	);
};

export default ContactDetails;
