import { cn } from "@/lib/utils";
import { DefaultArea } from "./default-area";

interface TabSliderProps {
	focused: boolean;
	title: string;
}

export const TabSlider = ({ title, focused }: TabSliderProps) => {
	return (
		<DefaultArea className="my-5 cursor-pointer">
			<div
				className={cn(
					"flex flex-col h-14",
					focused ? "bg-slate-800" : "bg-zinc-900"
				)}
			>
				{focused && <div className="bg-zinc-200 w-full h-1"></div>}
				<h3 className="text-sm p-[0.5rem]">{title}</h3>
			</div>
		</DefaultArea>
	);
};
