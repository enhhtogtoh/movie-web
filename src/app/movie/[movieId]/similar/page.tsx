import { SimilarMovie } from "@/app/components/SimilarMovie";

type Params = {
  params: Promise<{
    movieId: string;
  }>;
};

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  vote_count: number;
  genres: { id: number; name: string }[];
};
export default async function SimilarPage({ params }: Params) {
  const resolvedParams = await params;
  const movieId = resolvedParams.movieId;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );

  const data: Movie = await res.json();
  console.log(data);
}
