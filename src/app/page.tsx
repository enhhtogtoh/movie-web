import { Upcoming } from "@/app/components/Upcoming";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Hero } from "@/app/components/Hero";

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
  original_title: string;

  vote_average: number;
};

export default async function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col justify-center items-center max-w-360 w-full">
        <Hero />
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
    </div>
  );
}
