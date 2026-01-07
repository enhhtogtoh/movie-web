// type Params = {
//   params: {
//     movieId: string;
//   };
// };

// type Movie = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   vote_average: number;
//   release_date: string;
//   runtime: number;
//   genres: { id: number; name: string }[];
// };

// export default async function MovieDetails({ params }: Params) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
//       },
//     }
//   );

//   const data: Movie = await res.json();
//   return (
//     <div className="px-10 py-6 space-y-6">
//       <div>
//         <h1 className="text-3xl font-semibold">{data.title}</h1>
//         <p className="text-gray-500 mt-1">
//           {data.release_date} • {Math.floor(data.runtime / 60)}h{" "}
//           {data.runtime % 60}m
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
//           className="rounded-lg"
//         />

//         <img
//           src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
//           className="rounded-lg"
//         />
//       </div>

//       {/* <div className="flex gap-2 flex-wrap mt-3">
//         {data.genres.map((g) => (
//           <span
//             key={g.id}
//             className="px-3 py-1 rounded-full bg-gray-200 text-sm"
//           >
//             {g.name}
//           </span>
//         ))}
//       </div> */}

//       <p className="text-gray-700 mt-3">{data.overview}</p>
//     </div>
//   );
// }

// import { fetchMovieDetail, fetchSimilarMovies } from "@/lib/api"; // Функцүүдээ өөрчилж магадгүй
// import Image from "next/image";
// import { Star } from "lucide-react"; // Одонд зориулсан icon

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ movie: string }>;
// }) {
//   const { movie: movieId } = await params;

//   // Киноны дэлгэрэнгүй мэдээллийг ID-аар нь авах
//   const movie = await fetchMovieDetail(movieId);

//   if (!movie)
//     return <div className="p-20 text-center">Уучлаарай, кино олдсонгүй.</div>;

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-8">
//       {/* 1. Header: Гарчиг болон Үнэлгээ */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h1 className="text-4xl font-bold">{movie.title}</h1>
//           <p className="text-gray-500 mt-2">
//             {movie.release_date} • {movie.runtime}m •{" "}
//             {movie.certification || "PG"}
//           </p>
//         </div>
//         <div className="flex flex-col items-end">
//           <span className="text-sm uppercase text-gray-400 font-semibold">
//             Rating
//           </span>
//           <div className="flex items-center gap-1 text-xl font-bold">
//             <Star className="text-yellow-400 fill-yellow-400" size={24} />
//             <span>{movie.vote_average?.toFixed(1)}</span>
//             <span className="text-gray-400 text-sm">/10</span>
//           </div>
//         </div>
//       </div>

//       {/* 2. Visuals: Poster болон Backdrop (Трейлер хэсэг) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[450px]">
//         <div className="relative h-full w-full">
//           <Image
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             fill
//             className="rounded-lg object-cover"
//           />
//         </div>
//         <div className="md:col-span-2 relative h-full w-full group cursor-pointer">
//           <Image
//             src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//             alt="Backdrop"
//             fill
//             className="rounded-lg object-cover brightness-75 group-hover:brightness-50 transition"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
//               <span className="text-white">▶ Play Trailer</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. Details: Genres, Overview, Crew */}
//       <div className="space-y-6">
//         {/* Genres */}
//         <div className="flex gap-2">
//           {movie.genres?.map((genre: any) => (
//             <span
//               key={genre.id}
//               className="px-3 py-1 border rounded-full text-sm"
//             >
//               {genre.name}
//             </span>
//           ))}
//         </div>

//         {/* Overview */}
//         <p className="text-lg leading-relaxed max-w-4xl">{movie.overview}</p>

//         {/* Cast & Crew Table */}
//         <div className="border-t pt-6 space-y-4">
//           <div className="flex border-b pb-2">
//             <span className="w-24 font-bold">Director</span>
//             <span className="text-blue-500">{movie.director || "N/A"}</span>
//           </div>
//           <div className="flex border-b pb-2">
//             <span className="w-24 font-bold">Writers</span>
//             <span className="text-blue-500">{movie.writers?.join(", ")}</span>
//           </div>
//           <div className="flex border-b pb-2">
//             <span className="w-24 font-bold">Stars</span>
//             <span className="text-blue-500">{movie.stars?.join(", ")}</span>
//           </div>
//         </div>
//       </div>

//       {/* 4. More Like This Section */}
//       <div className="pt-10">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">More like this</h2>
//           <button className="text-sm font-semibold hover:underline">
//             See more &gt;
//           </button>
//         </div>
//         {/* Энд өмнөх MovieCard компонентоо ашиглаж болно */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {/* similarMovies.map(...) */}
//         </div>
//       </div>
//     </div>
//   );
// }

// params-ийн төрлийг Next.js 15-д тохируулж засав
// type Params = {
//   params: Promise<{
//     movie: string; // Хэрэв таны folder-ийн нэр [movie] бол
//   }>;
// };

// type Movie = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   vote_average: number;
//   release_date: string;
//   runtime: number;
//   genres: { id: number; name: string }[];
// };

// export default async function MovieDetails({ params }: Params) {
//   // 1. params-ийг хүлээх (await) хэрэгтэй
//   const resolvedParams = await params;
//   const movieId = resolvedParams.movie; // Folder-ийн нэрээрээ авна

//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
//       },
//       // Өгөгдөл шинэчлэгдэх хугацаа (заавал биш)
//       next: { revalidate: 3600 },
//     }
//   );

//   // Алдаа гарсан эсэхийг шалгах
//   if (!res.ok) {
//     return (
//       <div className="p-10 text-center">
//         Киноны мэдээлэл татахад алдаа гарлаа. (ID: {movieId})
//       </div>
//     );
//   }

//   const data: Movie = await res.json();

//   return (
//     <div className="px-10 py-6 space-y-6 max-w-7xl mx-auto">
//       <div>
//         <h1 className="text-4xl font-bold">{data.title}</h1>
//         <p className="text-gray-500 mt-2 font-medium">
//           {data.release_date} • {Math.floor(data.runtime / 60)}h{" "}
//           {data.runtime % 60}m
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Poster - 1 багана */}
//         <div className="md:col-span-1">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//             alt={data.title}
//             className="rounded-xl shadow-lg w-full"
//           />
//         </div>

//         {/* Backdrop - 2 багана */}
//         <div className="md:col-span-2 relative">
//           <img
//             src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
//             alt="backdrop"
//             className="rounded-xl shadow-lg w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Төрөл (Genres) */}
//       <div className="flex gap-2 flex-wrap mt-4">
//         {data.genres?.map((g) => (
//           <span
//             key={g.id}
//             className="px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium"
//           >
//             {g.name}
//           </span>
//         ))}
//       </div>

//       <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
//         {data.overview}
//       </p>
//     </div>
//   );
// }

// type Params = {
//   params: Promise<{
//     movie: string; // Folder-ийн нэр тань [movie] бол 'movie' гэж бичнэ
//   }>;
// };

// type Movie = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   vote_average: number;
//   release_date: string;
//   runtime: number;
//   genres: { id: number; name: string }[];
// };

// export default async function MovieDetails({ params }: Params) {
//   // 1. Params-ийг хүлээж авах
//   const resolvedParams = await params;
//   const movieId = resolvedParams.movie;

//   // 2. Token байгаа эсэхийг шалгах (Терминал дээр харагдана)
//   const token = process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY;

//   if (!token) {
//     console.error("АЛДАА: NEXT_PUBLIC_TMDB_API_TOKEN_KEY олдохгүй байна!");
//   }

//   // 3. API-руу хүсэлт илгээх
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       cache: "no-store", // Датаг шинээр авахын тулд
//     }
//   );

//   // 4. Хариуг шалгах
//   if (!res.ok) {
//     const errorLog = await res.text();
//     console.log("API-аас ирсэн алдаа:", errorLog);
//     return (
//       <div className="p-20 text-center">
//         <h1 className="text-red-500 font-bold">
//           Кино олдсонгүй (404) эсвэл API алдаа!
//         </h1>
//         <p>Ирсэн ID: {movieId}</p>
//       </div>
//     );
//   }

//   const data: Movie = await res.json();

//   return (
//     <div className="px-10 py-6 space-y-6 max-w-7xl mx-auto">
//       <div>
//         <h1 className="text-4xl font-bold">{data.title}</h1>
//         <p className="text-gray-500 mt-2">
//           {data.release_date} • {Math.floor(data.runtime / 60)}h{" "}
//           {data.runtime % 60}m
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-1">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//             alt={data.title}
//             className="rounded-xl w-full"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <img
//             src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
//             alt="backdrop"
//             className="rounded-xl w-full object-cover h-full"
//           />
//         </div>
//       </div>

//       <div className="flex gap-2 flex-wrap">
//         {data.genres?.map((g) => (
//           <span key={g.id} className="px-4 py-1 border rounded-full text-sm">
//             {g.name}
//           </span>
//         ))}
//       </div>

//       <p className="text-gray-700 text-lg leading-relaxed">{data.overview}</p>
//     </div>
//   );
// }

type Params = {
  params: Promise<{
    movie: string; // Хэрэв таны folder [movie] нэртэй бол
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
  genres: { id: number; name: string }[];
};

export default async function MovieDetails({ params }: Params) {
  // 1. Params-ийг заавал await хийж авна
  const resolvedParams = await params;
  const movieId = resolvedParams.movie;

  // 2. API-руу хүсэлт илгээх
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );

  const data: Movie = await res.json();

  return (
    <div className="px-10 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-500 mt-1">
          {data.release_date} • {Math.floor(data.runtime / 60)}h{" "}
          {data.runtime % 60}m
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Зургийн зам дээрх илүү '/' тэмдэгтийг хасав */}
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="rounded-lg w-full"
          alt="poster"
        />

        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className="rounded-lg w-full"
          alt="backdrop"
        />
      </div>

      <div className="flex gap-2 flex-wrap mt-3">
        {data.genres?.map((g) => (
          <span
            key={g.id}
            className="px-3 py-1 rounded-full bg-gray-200 text-sm text-black"
          >
            {g.name}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mt-3">{data.overview}</p>
    </div>
  );
}
