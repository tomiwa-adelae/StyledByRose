import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FAQs = () => {
	return (
		<div className="bg-primary text-white py-14">
			<div className="container">
				<div className="text-center space-y-4">
					<h3 className="uppercase leading-relaxed font-semibold text-xl md:text-2xl">
						Got Questions? We’ve Got Answers
					</h3>
					<p className="text-sm leading-loose">
						We know you might have some questions before starting
						your style journey with us. Here are the most frequently
						asked questions to help you get started!
					</p>
				</div>
				<div className="mt-8">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(({ question, answer }, index) => (
							<AccordionItem value={`${index}`} key={index}>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>
									{answer} to the WAI-ARIA design pattern.
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
