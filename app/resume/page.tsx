"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { trackResumeInteraction } from "../actions";
import SpaceBackground from "../components/space-background"; // Assuming you want the same background

export default function ResumePage() {
	const [error, setError] = useState(false);

	// Track the view interaction when the component mounts
	useEffect(() => {
		trackResumeInteraction("view")
			.then((result) => console.log("Resume view tracked:", result))
			.catch((err) => console.error("Failed to track resume view:", err));
	}, []); // Empty dependency array ensures this runs only once on mount

	return (
		<div className="min-h-screen flex flex-col text-white">
			{/* Optional: Add a consistent header if desired */}
			{/* <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold">gcal.dev</span>
          </Link>
          <Link href="/" className="text-sm hover:underline">
            Back to Home
          </Link>
        </div>
      </header> */}
			<SpaceBackground /> {/* Add background */}
			<main className="flex-1 flex flex-col relative z-10 p-4 md:p-8">
				<div className="container mx-auto flex-grow flex flex-col">
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-2xl md:text-3xl font-bold">
							Resume
						</h1>
						<Link
							href="/"
							className="text-sm hover:underline text-gray-300 hover:text-white">
							&larr; Back to Home
						</Link>
					</div>

					{error ? (
						<div className="flex-grow flex items-center justify-center bg-gray-800/50 rounded-lg shadow-lg p-4 text-center">
							<div>
								<p className="text-red-400 mb-4">
									Error loading PDF viewer.
								</p>
								<a
									href="/resume.pdf"
									download="GregoryCal_Resume.pdf"
									onClick={() =>
										trackResumeInteraction("download")
									} // Track download on fallback link click
									className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
									Download PDF Directly
								</a>
							</div>
						</div>
					) : (
						<div className="flex-grow bg-gray-900/70 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
							{/* Using <object> for better browser compatibility and fallback */}
							<object
								data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" // Added parameters to potentially hide PDF controls
								type="application/pdf"
								width="100%"
								height="100%"
								className="min-h-[70vh] md:min-h-[85vh]" // Ensure minimum height
								onError={() => {
									console.error("Error loading PDF object.");
									setError(true);
								}}>
								{/* Fallback content if the browser cannot display the PDF */}
								<div className="flex-grow flex items-center justify-center bg-gray-800/50 rounded-lg shadow-lg p-4 text-center h-full">
									<div>
										<p className="mb-4">
											Your browser doesn&apos;t support
											embedding PDFs directly.
										</p>
										<a
											href="/resume.pdf"
											download="GregoryCal_Resume.pdf"
											onClick={() =>
												trackResumeInteraction(
													"download"
												)
											} // Track download on fallback link click
											className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
											Download PDF Instead
										</a>
									</div>
								</div>
							</object>
						</div>
					)}
				</div>
			</main>
			{/* Optional: Add a consistent footer if desired */}
			{/* <footer className="border-t border-gray-800 relative z-10 mt-auto">
        <div className="container mx-auto py-4 px-4 md:px-6 text-center text-xs text-gray-400">
          © 2024 gcal.dev. All rights reserved.
        </div>
      </footer> */}
		</div>
	);
}
