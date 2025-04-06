"use server";

export async function submitContactForm(formData: FormData) {
	// Simulate a delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	// Here you would typically send an email or save to a database
	console.log("Form submission:", { name, email, message });

	return {
		message: "Thanks for your message! I'll get back to you soon.",
	};
}
export async function trackResumeInteraction(type: "download" | "view") {
	// Log the interaction
	console.log(`Resume ${type} recorded at ${new Date().toISOString()}`);

	// In a real implementation, you might:
	// - Save to a database (e.g., using Prisma, Drizzle, etc.)
	// - Send data to an analytics service (e.g., Google Analytics, Plausible)

	// Simulate potential async operation
	await new Promise((resolve) => setTimeout(resolve, 50)); // Small delay

	return { success: true, type, timestamp: new Date().toISOString() };
}
