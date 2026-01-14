import { MovieCard } from "@/app/components/MovieCard";
// import { getGenres } from "@/lib/getGenres";

export default async function ResultPage({
  params,
}: {
  params: Promise<{ searchValue: string }>;
}) {
  const resolvedParams = await params;
  const searchValue = resolvedParams.searchValue;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  //   console.log(data);
  const movies = data?.results || [];

  return (
    <div className="px-20 py-8">
      <h1 className="text-3xl font-bold mb-2">Search results</h1>

      <p className="text-gray-600 mb-6 text-xl">
        {data.total_results} results for "{searchValue}"
      </p>

      {movies.length === 0 ? (
        <div className="border rounded-lg py-20 text-center text-gray-500">
          No results found.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
