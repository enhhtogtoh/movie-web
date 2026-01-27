import { fetchfromPopularMovieDB } from "@/app/components/Popular";
import { Movie } from "@/app/page";
import { MovieCard } from "@/app/components/MovieCard";
// import { DynamicPagination } from "@/app/components/DynamicPagination";
// import { useSearchParams } from "next/navigation";
export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;
  const movies: Movie[] = await fetchfromPopularMovieDB(movieCategory);
  // const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get("page") ?? 1);

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
      {/* <DynamicPagination totalPages={currentPage} /> */}
    </div>
  );
}
