import { Fullscreen } from "lucide-react";
import Image from "next/image";
// import { Movie } from "@/app/data/movies";
// type Props = {};
// import Image from "next/image";
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
type Props = {
  movie: Movie;
};
export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="cursor-pointer bg-[#F4F4F5] h-97.5 rounded-md flex flex-col ">
      {/* MOVIE POSTER */}
      <div className="h-75 w-full ">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
          className="h-75 w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col pl-2">
        {/* RATING */}
        <p className="mt-2 text-sm text-yellow-500">
          ⭐ {movie.vote_average?.toFixed(1)}
        </p>
        {/* TITLE */}
        <p className="text-lg md:text-base sm:text-sm font-medium text-black ">
          {movie.title}
        </p>
      </div>
    </div>
  );
};
type nowPlaying = {
  id: number;
  title: string;
  backdrop_path: string;
};
type Props1 = {
  now: nowPlaying;
};
export const Moviecard1 = ({ now }: Props1) => {
  return (
    <div className="w-full h-150 cursor-pointer ">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${now.backdrop_path}`}
          alt={now.title}
          width={1000}
          height={600}
          className="w-full h-150 object-cover shrink-0"
        />
      </div>
    </div>
  );
};
