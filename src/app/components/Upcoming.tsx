import Link from "next/link";
import { Movie } from "../page";
import { MovieCard } from "./MovieCard";
import * as motion from "motion/react-client";
export const fetchfromUpcomingMovieDB = async (category: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
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
export const Upcoming = async () => {
  const upcomingMovie: Movie[] = await fetchfromUpcomingMovieDB("upcoming");
  return (
    <div className="w-full flex flex-col gap-8 mt-8">
      <div className="text-2xl font-semibold  flex gap-8 justify-between">
        <h1>Upcoming</h1>
        <Link href="/category/upcoming">
          <motion.button
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, color: "#432dd7" }}
            whileInView={{ opacity: 1 }}
            className="flex text-sm  justify-center items-center gap-2 cursor-pointer"
          >
            See more
            <img
              src="./arrow-right.png"
              alt="arrow-right"
              className="w-4 h-4"
            />
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {upcomingMovie.slice(0, 10).map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
