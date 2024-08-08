import { DefaultArea } from "../default-area";
import { ItemCard } from "../item-card";
import { SectionTitle } from "../section-title";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "../ui/carousel";

export const ContinueToWatchSection = () => {
	return (
		<DefaultArea>
			<section>
				<SectionTitle
					title="Continue Assistindo"
					stripeColor="orange"
					cta={{
						text: "Ver histórico",
						href: "/continue-to-watch"
					}}
				/>
				<div className="flex items-center justify-center gap-12 my-8  overflow-x-hidden">
					<Carousel
						opts={{
							align: "start",
							loop: true
						}}
					>
						<CarouselContent className="flex items-center justify-start gap-10 max-w-[1440px]">
							<CarouselItem className="basis-1/7">
								<ItemCard />
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</DefaultArea>
	);
};
