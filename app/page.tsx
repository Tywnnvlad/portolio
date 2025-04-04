import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import SpaceBackground from "./components/space-background";
import TechStack from "./components/tech-stack";
import { Analytics } from "@vercel/analytics/react";

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col">
			<SpaceBackground />

			<header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/40">
				<div className="container mx-auto flex h-14 items-center justify-between px-4">
					<div className="flex items-center">
						<Link className="flex items-center space-x-2" href="/">
							<span className="font-bold text-white">
								gcal.dev
							</span>
						</Link>
						<nav className="hidden md:flex items-center ml-6 space-x-6 text-sm font-medium">
							<Link
								href="#about"
								className="text-gray-300 transition-colors hover:text-white">
								About
							</Link>
							<Link
								href="#projects"
								className="text-gray-300 transition-colors hover:text-white">
								Projects
							</Link>
							<Link
								href="#contact"
								className="text-gray-300 transition-colors hover:text-white">
								Contact
							</Link>
						</nav>
					</div>
					<Button
						// variant="outline"
						className="border-gray-700 bg-white text-gray-800 hover:bg-blue-500 hover:text-white">
						Resume
					</Button>
				</div>
			</header>

			<main className="flex-1 flex flex-col relative z-10">
				<section
					id="about"
					className="py-12 md:py-24 lg:py-32 flex items-center justify-center">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-6 text-center">
							<div className="space-y-3 max-w-3xl">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
									gcal.dev
								</h1>

								<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
									Welcome to my corner of the internet! I am,
									a software developer who enjoys the
									challenge of building innovative software.
									When I am not coding, you will find me at
									the climbing gym or playing boardgames with
									friends! Feel free to browse my work and get
									in touch.
								</p>
							</div>
							<div className="flex space-x-4">
								<Link
									href="https://github.com/Tywnnvlad"
									target="_blank">
									<Button
										variant="outline"
										size="icon"
										className="bg-black/50 border-gray-700 hover:bg-black/70 text-white">
										<Github className="h-4 w-4" />
										<span className="sr-only">GitHub</span>
									</Button>
								</Link>
								<Link
									href="https://www.linkedin.com/in/gregorycal1994/"
									target="_blank">
									<Button
										variant="outline"
										size="icon"
										className="bg-black/50 border-gray-700 hover:bg-black/70 text-white">
										<Linkedin className="h-4 w-4" />
										<span className="sr-only">
											LinkedIn
										</span>
									</Button>
								</Link>
								{/* <Link
									href="https://twitter.com"
									target="_blank">
									<Button
										variant="outline"
										size="icon"
										className="bg-black/50 border-gray-700 hover:bg-black/70 text-white">
										<Twitter className="h-4 w-4" />
										<span className="sr-only">Twitter</span>
									</Button>
								</Link> */}
								<Link href="mailto:hello@gred_cal@yahoo.com">
									<Button
										variant="outline"
										size="icon"
										className="bg-black/50 border-gray-700 hover:bg-black/70 text-white">
										<Mail className="h-4 w-4" />
										<span className="sr-only">Email</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
							Projects
						</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<ProjectCard
								title="Chess"
								description="A java-based chess game, using a Swing GUI. The game is made for players of various chess-ability, having features including: move highlights, move hints, move undo/redo, a piece information query button, AI player functionality, PGN loading and saving functionality, and more."
								image="/placeholder.svg?height=400&width=600"
								link="https://github.com/Tywnnvlad/chess"
								tags={[
									"Java",
									"Swing",
									"JUnit",
									"ANTlr",
									"Regex",
								]}
							/>
							<ProjectCard
								title="Raytracing engine"
								description="This project is a basic raytracing engine implemented in Java. It demonstrates fundamental raytracing concepts."
								image="/placeholder.svg?height=400&width=600"
								link="https://github.com/Tywnnvlad/Raytracing-engine"
								tags={["Java"]}
							/>
							<ProjectCard
								title="File integrity checker"
								description="A Python script to monitor file integrity within a directory by comparing SHA256 hashes against a stored baseline."
								image="/placeholder.svg?height=400&width=600"
								link="https://github.com/Tywnnvlad/File-Inegrity-Cheker"
								tags={["Python"]}
							/>
							<ProjectCard
								title="Fullstack Websites"
								description="Various websites that different technologies for the needs of clients "
								image="/placeholder.svg?height=400&width=600"
								link="https://github.com/Tywnnvlad/"
								tags={[
									"React",
									"Next.js",
									"Tailwind",
									"Django",
									"MongoDB",
									"Prisma",
								]}
							/>
						</div>
					</div>
				</section>

				<section className="py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
							Tech Stack
						</h2>
						<TechStack />
					</div>
				</section>

				<section id="contact" className="py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<div className="mx-auto max-w-2xl">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
								Get in Touch
							</h2>
							<ContactForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-gray-800 relative z-10">
				<div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
					<p className="text-xs text-gray-400">
						© 2024 gcal.dev. All rights reserved.
					</p>
					<nav className="sm:ml-auto flex gap-4 sm:gap-6">
						<Link
							className="text-xs text-gray-400 hover:underline underline-offset-4"
							href="#">
							Terms of Service
						</Link>
						<Link
							className="text-xs text-gray-400 hover:underline underline-offset-4"
							href="#">
							Privacy
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}
