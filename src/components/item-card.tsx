import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

export const ItemCard = () => {
	return (
		<Link href="">
			<Card className="border-transparent">
				<CardContent className="">
					<Image
						src="/shinobinoittoki-small.png"
						alt="Card"
						width={0}
						height={0}
						sizes="100vw"
						className="w-[150px] h-[225px] hover:scale-105 transition-all"
					/>
				</CardContent>
				<CardFooter className="flex text-left flex-col w-full items-start mt-4">
					<h3 className="">Shinobi no Ittoki</h3>
					<div className="text-lg flex gap-1">
						<span className="text-teal-500">Anime</span>
						<span className="text-zinc-500">•</span>
						<span className="text-zinc-500">Legendado</span>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};
