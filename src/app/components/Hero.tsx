import { nowPalying } from "../page";
import { Moviecard1 } from "./MovieCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fetchfromNowPlayingMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );
  const data = await response.json();

  return data.results;
};

export const Hero = async () => {
  const nowPlayingMovie: nowPalying[] = await fetchfromNowPlayingMovieDB();
  return (
    <Carousel
      className="w-full"
      // opts={{ loop: true }}
      // plugins={[
      //   Autoplay({
      //     delay: 5000,
      //   }),
      // ]}
    >
      <CarouselContent>
        {nowPlayingMovie.map((mov) => (
          <CarouselItem key={mov.id} className="relative">
            <Moviecard1 mov={mov} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  );
};
// export const Hero = async () => {
//   const movie: Movie[] = await fetchfromNowPlayingMovieDB();
//   return (
//     <div>
//       <div className="flex w-full">
//         {movie.slice(0, 10).map((movie) => (
//           <MovieCard movie={movie} key={movie.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

{
  /* {nowPlayingMovie.map((mov) => (
        <Moviecard1 mov={mov} key={mov.id} />
      ))} */
}
