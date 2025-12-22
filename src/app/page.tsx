import Image from "next/image";
// import { Description } from "./about/components/Description";
import { MovieCard } from "./components/MovieCard";
import { Header } from "./components/Header";
import { Upcoming } from "./components/Upcoming";

export default function Home() {
  return (
    <div>
      {/* <h1>Home page</h1> */}
      <a href="/about">About ruu oc</a>
      <Header />
      <Upcoming />
      <MovieCard />

      {/* <MovieCard /> */}
    </div>
  );
}
