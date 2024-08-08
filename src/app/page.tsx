import { ContinueToWatchSection } from "@/components/landing/continue-to-watch";
import { HeroSection } from "@/components/landing/hero";
import { RecommendationsPage } from "@/components/landing/recommendations";

export default function Home() {
	return (
		<>
			<HeroSection />
			<RecommendationsPage />
			<ContinueToWatchSection />
		</>
	);
}
