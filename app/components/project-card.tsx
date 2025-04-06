import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	// image: string;
	link: string;
	tags: string[];
}

export default function ProjectCard({
	title,
	description,
	// image,
	link,
	tags,
}: ProjectCardProps) {
	return (
		<Card className="overflow-hidden bg-black/50 border-gray-800 text-white backdrop-blur-sm flex flex-col">
			{/* <div className="relative aspect-video">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover transition-transform hover:scale-105"
				/>
			</div> */}
			<CardContent className="p-4 flex-grow">
				<h3 className="font-semibold text-xl mb-2">{title}</h3>
				<p className="text-sm text-gray-300 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="inline-flex text-gray-300 items-center rounded-md bg-primary/20 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-300/20">
							{tag}
						</span>
					))}
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Link
					href={link}
					target="_blank"
					className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:underline">
					<Github className="h-4 w-4" />
					View on GitHub
				</Link>
			</CardFooter>
		</Card>
	);
}
