import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Movie } from "../page";
import { MovieCard } from "./MovieCard";
import { nowPalying } from "../page";
const fetchfromNowPlayingMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
export const Hero = async () => {
  const nowPlayingMovie: Movie[] = await fetchfromNowPlayingMovieDB();
  return (
    <div>
      <div className="w-full h-150  flex">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {nowPlayingMovie.slice(0, 10).map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
// import { nowPalying } from "../page";
// async function fetchNowPlaying() {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`,
//     { cache: "no-store" }
//   );

//   // API алдаа шалгана
//   // if (!res.ok) {
//   //   console.error("TMDB Now Playing fetch failed");
//   //   return [];
//   // }

//   const data = await res.json();
//   return data.results ?? [];
// }
// export const Hero = async () => {
//   const nowPalying: nowPalying[] = await fetchNowPlaying();

//   if (nowPalying.length === 0) return null;

//   return (
//     <section className="relative">
//       <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
//         {nowPalying.slice(0, 5).map((movie: any) => (
//           <div key={movie.id} className="relative min-w-full h-125 snap-start">
//             {/* background image */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
