import Link from "next/link";
import { Movie } from "../page";
import { MovieCard } from "./MovieCard";
import * as motion from "motion/react-client";
import { ArrowRightIcon } from "lucide-react";
export const fetchfromSimilarMovieDB = async (id: string): Promise<Movie[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
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
export const SimilarMovie = async ({ id }: { id: string }) => {
  const movies: Movie[] = await fetchfromSimilarMovieDB(id);
  return (
    <div className="flex flex-col gap-8 px-20">
      <h2 className="font-semibold text-3xl">More like this</h2>

      <div className="grid grid-cols-5  w-auto mb-8 gap-8 ">
        {movies.slice(0, 5).map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
