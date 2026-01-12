import { fetchfromPopularMovieDB } from "@/app/components/Popular";
import { Movie } from "@/app/page";
import { MovieCard } from "@/app/components/MovieCard";
// import { SimilarPage } from "@/app/movie/[movieId]/similar/page";
export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;
  const movies: Movie[] = await fetchfromPopularMovieDB(movieCategory);

  return (
    <div className="flex  flex-col items-center">
      <div className="flex flex-col justify-center items-center max-w-360 w-full gap-8">
        <div className="flex w-full pt-13">
          <p className="text-3xl font-semibold ">{movieCategory} </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
