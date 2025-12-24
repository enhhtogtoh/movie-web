// import Image from "next/image";
// import { Description } from "./about/components/Description";
// import { MovieCard } from "./components/MovieCard";
import { Header } from "./components/Header";
import { Upcoming } from "@/app/components/Upcoming";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
// import { Button } from "@/components/ui/button";
import { Hero } from "@/app/components/Hero";
import { Footer } from "./components/Footer";
// import { Title } from "./components/SeeMoreButton";
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
      <div className="flex flex-col justify-center items-center max-w-360">
        {/* <h1>Home page</h1> */}
        {/* <a href="/about">About ruu oc</a> */}
        <Header />
        <Hero />
        {/* <Title /> */}
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
        {/* <MovieCard /> */}
      </div>
    </div>
  );
}
