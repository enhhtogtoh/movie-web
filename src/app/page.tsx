import Image from "next/image";
// import { Description } from "./about/components/Description";
import { MovieCard } from "./components/MovieCard";
import { Header } from "./components/Header";
import { Upcoming } from "./components/Upcoming";
import { Button } from "@/components/ui/button";
import { Scroll } from "@/app/components/Scroll";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-360">
        {/* <h1>Home page</h1> */}
        <a href="/about">About ruu oc</a>
        <Header />
        <Scroll />
        <Title />
        <Upcoming />
        <MovieCard />
        {/* <Button>Click me</Button> */}

        {/* <MovieCard /> */}
      </div>
    </div>
  );
}
