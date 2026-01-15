import { MovieCard } from "@/app/components/MovieCard";
import { Genre } from "@/lib/getGenres";
type Props = {
  genres: Genre[];
};
export default async function GenresPage({
  params,
}: {
  params: Promise<{ genreIds: string }>;
}) {
  //   { genres }: Props
  const resolvedParams = await params;
  const genreIds = resolvedParams.genreIds;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  console.log(data);
  const movies = data?.results || [];

  return (
    <div className="px-20 py-8">
      <h1 className="text-3xl font-bold mb-2">Search filter</h1>

      <p className="text-gray-600 mb-6 text-xl">
        {data.total_results} results for "{genreIds}"
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
