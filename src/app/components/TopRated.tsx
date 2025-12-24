import { Movie } from "../page";
import { MovieCard } from "./MovieCard";
const fetchfromTopRatedMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
export const TopRated = async () => {
  const topRatedMovies: Movie[] = await fetchfromTopRatedMovieDB();
  return (
    <div className="w-full flex flex-col gap-8 mt-8">
      <div className="text-2xl font-semibold  flex gap-8">Top Rated</div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {topRatedMovies.slice(0, 10).map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
