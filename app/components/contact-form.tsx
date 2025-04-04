"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitContactForm } from "../actions";

export default function ContactForm() {
	const [pending, setPending] = useState(false);
	const [message, setMessage] = useState("");

	async function handleSubmit(formData: FormData) {
		setPending(true);
		try {
			const response = await submitContactForm(formData);
			setMessage(response.message);
		} catch (error) {
			setMessage("Something went wrong. Please try again." + error);
		} finally {
			setPending(false);
		}
	}

	return (
		<Card className="p-6 bg-black/50 border-gray-800 text-white backdrop-blur-sm">
			<form action={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium mb-2 text-gray-200">
						Name
					</label>
					<Input
						id="name"
						name="name"
						required
						className="bg-black/30 border-gray-700 text-white"
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium mb-2 text-gray-200">
						Email
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						required
						className="bg-black/30 border-gray-700 text-white"
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium mb-2 text-gray-200">
						Message
					</label>
					<Textarea
						id="message"
						name="message"
						required
						className="bg-black/30 border-gray-700 text-white"
					/>
				</div>
				<Button
					type="submit"
					className="w-full bg-primary hover:bg-primary/90"
					disabled={pending}>
					{pending ? "Sending..." : "Send Message"}
				</Button>
				{message && (
					<p className="text-sm text-center mt-4 text-gray-300">
						{message}
					</p>
				)}
			</form>
		</Card>
	);
}
