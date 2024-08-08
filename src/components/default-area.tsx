import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DefaultAreaProps {
	children: ReactNode;
	className?: string;
}

export const DefaultArea = ({ className, children }: DefaultAreaProps) => {
	return (
		<div className={cn("w-full max-w-[1440px] mx-auto px-2", className)}>
			{children}
		</div>
	);
};
