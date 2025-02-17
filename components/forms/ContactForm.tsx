"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle, MoveUpRight } from "lucide-react";
import { preventWrongPhoneNumber } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	phoneNumber: z
		.string()
		.min(10, {
			message: "Please enter a valid phone number.",
		})
		.max(11, {
			message: "Please enter a valid phone number.",
		}),
	email: z.string().email().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	message: z.string().optional(),
});

export function ContactForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const details = {
				name: data.name,
				email: data.email,
				phoneNumber: data.phoneNumber,
				message: data.message,
			};
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				details,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
			toast({
				title: "Success!",
				description:
					"Thank you for reaching out to StyledByRose! 🌸 Your message has been received, and we’ll get back to you as soon as possible. Stay stylish!",
			});
			// router.push('/success')
		} catch (error) {
			toast({
				title: "Error!",
				description:
					"An error occurred! Your message couldn't successfully send. Please reach out to me via email or phone number.",
			});
		}
	}

	return (
		<div className="shadow-none sm:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-0 sm:border sm:p-8 md:p-12 rounded-xl w-full lg:max-w-lg mx-auto">
			<div className="mb-6">
				<h3 className="text-primary uppercase leading-relaxed font-semibold text-xl md:text-2xl">
					Get in touch
				</h3>
				<div className="leading-loose text-sm space-y-4 col-span-3 mt-4">
					<p>
						Whether you have questions or you would just like to say
						hello, contact us.
					</p>
				</div>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										maxLength={11}
										id="decimalInput"
										inputMode="numeric"
										type="number"
										onKeyDown={preventWrongPhoneNumber}
										placeholder="Enter your phone number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us what you would like us to know"
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={form.formState.isSubmitting}
						size={"lg"}
						type="submit"
					>
						{form.formState.isSubmitting ? (
							<>
								Sending...
								<LoaderCircle className="animate-spin ml-3" />
							</>
						) : (
							<>
								Send Message
								<MoveUpRight />
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}
