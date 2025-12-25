import { Header } from "./components/Header";
import { Upcoming } from "@/app/components/Upcoming";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Hero } from "@/app/components/Hero";
import { Footer } from "./components/Footer";
import { CarouselHero } from "@/components/ui/Carousel1";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  rating: number;
  vote_average: number;
};
export type nowPalying = {
  id: 123;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
};

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-360 w-full">
        <Header />

        <CarouselHero />
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </div>
  );
}
