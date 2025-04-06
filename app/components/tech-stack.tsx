import { Card } from "@/components/ui/card";

const technologies = [
	{
		category: "Frontend",
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"MantineUI",
			"Shadcn",
			"HTML",
			"CSS",
		],
	},
	{
		category: "Backend",
		skills: [
			"Prisma",
			"Java",
			"Express",
			"Python",
			"Django",
			"PostgreSQL",
			"Node",
			"MongoDB",
			"MySQL",
			"PHP",
		],
	},
	{
		category: "DevOps",
		skills: ["Docker", "Git", "Linux", "Nginx", "AWS"],
	},
	{
		category: "Tools",
		skills: ["VS Code", "Figma", "Jest", "GitHub", "Vercel"],
	},
];

export default function TechStack() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{technologies.map((tech) => (
				<Card
					key={tech.category}
					className="p-6 bg-black/50 border-gray-800 text-white backdrop-blur-sm">
					<h3 className="text-lg font-semibold mb-4">
						{tech.category}
					</h3>
					<div className="flex flex-wrap gap-2">
						{tech.skills.map((skill) => (
							<span
								key={skill}
								className="inline-flex text-white  items-center rounded-md bg-primary/20 px-2 py-1 text-sm font-medium ring-1 ring-inset ring-gray-300/20">
								{skill}
							</span>
						))}
					</div>
				</Card>
			))}
		</div>
	);
}
