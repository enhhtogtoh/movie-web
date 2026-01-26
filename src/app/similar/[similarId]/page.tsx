import { MovieCard } from "@/app/components/MovieCard";

export default async function SimilarPage({
  params,
}: {
  params: Promise<{ similarId: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.similarId;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
      cache: "no-store",
    },
  );

  const data = await res.json();

  const movies = data?.results || [];
  return (
    <div className="flex  flex-col items-center">
      <div className="flex flex-col justify-center items-center max-w-360 w-full gap-8">
        <div className="flex w-full pt-13">
          <p className="text-3xl font-semibold ">More like this </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie: any) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
