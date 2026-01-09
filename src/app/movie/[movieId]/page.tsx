import { TbStarFilled } from "react-icons/tb";
import Team from "@/app/components/Directors";
import { m } from "motion/react";
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

export default async function MovieDetails({ params }: Params) {
  const resolvedParams = await params;
  const movieId = resolvedParams.movieId;

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
    <div className="px-10 py-6 space-y-6 flex flex-col justify-center ">
      <div className="flex justify-between w-full">
        <div className="">
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <p className="text-gray-500 mt-1">
            {data.release_date} • {Math.floor(data.runtime / 60)}h{" "}
            {data.runtime % 60}m
          </p>
        </div>
        <div
          className="flex flex-col justify-center
       items-center pr-3"
        >
          <p>Rating</p>
          <div className="flex  items-center gap-1">
            <TbStarFilled
              style={{ color: "#FDE047", width: "28px", height: "28px" }}
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">
                {data.vote_average.toFixed(1)}
                <span className="text-base text-[#71717A] font-normal">
                  /10
                </span>{" "}
              </p>
              <p className="text-sm text-[#71717A]">{data.vote_count}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-center items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="rounded-lg w-72.5 h-107"
          alt="poster"
        />

        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className="rounded-lg w-190 h-107"
          alt="backdrop"
        />
      </div>

      <div className="flex gap-2 flex-wrap mt-3">
        {data.genres?.map((g) => (
          <span
            key={g.id}
            className="px-3 py-1 rounded-full bg-gray-200 text-sm text-black cursor-pointer hover:bg-[#432dd7] hover:text-white active:scale-95 transition duration-200"
          >
            {g.name}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mt-3 ">{data.overview}</p>
      <Team id={movieId} />
      <SimilarMovie id={movieId} />
    </div>
  );
}
