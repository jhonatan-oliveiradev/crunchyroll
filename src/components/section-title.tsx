import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SectionTitleProps {
	title: string;
	stripeColor: "orange" | "blue";
	cta?: {
		text: string;
		href: string;
	};
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
	title,
	stripeColor = "blue",
	cta
}) => {
	return (
		<div className="">
			<div className="flex items-center w-full justify-between mb-1">
				<h2 className="font-display text-[2rem]">{title}</h2>
				<Link href={""} legacyBehavior>
					<a
						href={cta?.href}
						className="flex items-center justify-center uppercase font-semibold text-zinc-500 hover:text-zinc-400 transition-all"
					>
						{cta?.text}
						{cta && <ChevronRight className="size-5" />}
					</a>
				</Link>
			</div>
			<div
				className={cn(
					"w-full h-1 bg-gradient-to-r",
					stripeColor === "blue"
						? "from-teal-500 to-slate-800"
						: "from-orange-600 to-amber-400"
				)}
			/>
		</div>
	);
};
