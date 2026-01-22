import { MovieCard } from "@/app/components/MovieCard";
import { getGenres } from "@/lib/getGenres";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default async function GenresPage({
  params,
}: {
  params: Promise<{ genreIds: string }>;
}) {
  const resolvedParams = await params;
  const genreIds = resolvedParams.genreIds;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
      cache: "no-store",
    },
  );

  const data = await res.json();
  const movies = data?.results || [];

  const genres = await getGenres();

  // genre ID → name
  const currentGenre = genres.find(
    (g: any) => String(g.id) === String(genreIds),
  );

  const genreName = currentGenre?.name || "Unknown";

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Search filter</h1>

      <div className="grid grid-cols-12 gap-8">
        {/* left-genres */}
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-semibold text-2xl mb-1">Genres</h3>
          <p className="text-gray-500 text-sm mb-4">
            See lists of movies by genre
          </p>

          <div className="flex flex-wrap gap-2">
            {genres.map((g: any) => (
              <Link
                key={g.id}
                href={`/genres/${g.id}`}
                className={`px-3 py-1 border rounded-full flex items-center gap-1 text-xs
                  ${
                    String(g.id) === String(genreIds)
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
                  }`}
              >
                {g.name}
                <ChevronRightIcon size={12} />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block col-span-1">
          <div className="h-full w-px bg-gray-200 mx-auto" />
        </div>

        {/* right-movie */}
        <div className="col-span-12 md:col-span-8">
          <p className="text-black font-semibold mb-4 text-xl">
            {data.total_results} titles in "{genreName}"
          </p>

          {movies.length === 0 ? (
            <div className="border rounded-lg py-20 text-center text-gray-500">
              No results found.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
