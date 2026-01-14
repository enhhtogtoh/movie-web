// import { MovieCard } from "@/app/components/MovieCard";

// type Movie = {
//   id: number;
//   title: string;
//   poster_path: string;
//   vote_average: number;
// };

// type ApiResponse = {
//   results: Movie[];
// };

// export default async function SimilarPage({
//   params,
// }: {
//   params: { similarId: string };
// }) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${params.similarId}/similar?language=en-US&page=1`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
//       },
//       cache: "no-store",
//     }
//   );

//   const data: ApiResponse = await res.json();

//   return (
//     <div className="px-10 py-8">
//       <h1 className="text-2xl font-bold mb-6">More like this</h1>

//       <div className="grid grid-cols-5 gap-6">
//         {data.results.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { MovieCard } from "@/app/components/MovieCard";

export default async function SimilarPage({
  params,
}: {
  params: Promise<{ similarId: string }>; // 1. Promise гэж тодорхойлно
}) {
  // 2. params-ийг заавал await хийж авна
  const resolvedParams = await params;
  const id = resolvedParams.similarId;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  // 3. Өгөгдөл ирээгүй бол map хийхээс өмнө шалгана
  if (!data || !data.results) {
    return <div className="p-10 text-center">Мэдээлэл олдсонгүй.</div>;
  }

  return (
    <div className="px-10 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 ">More like this</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {data.results.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
