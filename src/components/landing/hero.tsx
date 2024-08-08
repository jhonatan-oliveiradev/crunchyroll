"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "../ui/carousel";
import { TabSlider } from "../tab-slider";
import { DefaultArea } from "../default-area";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection = () => {
	return (
		<>
			<section className="flex h-[800px] items-center justify-center bg-hero bg-center bg-cover bg-no-repeat w-full">
				<div className="flex items-center justify-center">
					<Carousel
						opts={{
							align: "start",
							loop: true
						}}
						plugins={[
							Autoplay({
								delay: 3000
							})
						]}
					>
						<CarouselContent>
							<CarouselItem>
								<Image
									src="/SpyXFamily-large.png"
									alt="Hero 1"
									width={0}
									height={0}
									sizes="100vw"
									className="w-[1280px] h-auto"
								/>
							</CarouselItem>
							<CarouselItem>...</CarouselItem>
							<CarouselItem>...</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
			<DefaultArea className="flex">
				<TabSlider title="SPY x FAMILY Novo Episódio" focused={true} />
				<TabSlider title="MATHEUSAO" focused={false} />
				<TabSlider title="MATHEUSAO" focused={false} />
				<TabSlider title="MATHEUSAO" focused={false} />
				<TabSlider title="MATHEUSAO" focused={false} />
				<TabSlider title="MATHEUSAO" focused={false} />
			</DefaultArea>
		</>
	);
};
