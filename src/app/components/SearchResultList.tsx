"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Movie = {
  id: number;
  title: string;
  release_date?: string;
  poster_path?: string | null;
  vote_average?: number;
};

type Props = {
  word: string;
  results: Movie[];
  onClose: () => void;
};

export const SearchResultList = ({ word, results, onClose }: Props) => {
  if (!word) return null;
  const router = useRouter();
  return (
    <div className="absolute left-1/2 top-11 z-40 mt-2 w-144.25 h-auto -translate-x-1/2 rounded-md bg-white shadow-lg border border-[#E4E4E7]">
      <div className="h-auto overflow-y-auto">
        {results.slice(0, 5).map((movie) => (
          <li
            key={movie.id}
            onClick={() => {
              router.push(`/movie/${movie.id}`);
              onClose();
            }}
            className="flex justify-between gap-3 px-4 py-3 hover:bg-gray-50 border-b border-[#E4E4E7] cursor-pointer"
          >
            <div className="flex items-center gap-3 ">
              {movie.poster_path && (
                <div className="h-16 w-11 overflow-hidden rounded-md bg-gray-200">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    width={80}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col ">
                <p className="text-lg font-medium text-black">{movie.title}</p>

                {movie.vote_average !== undefined && (
                  <p className="text-sm text-black">
                    ⭐ {movie.vote_average.toFixed(1)}
                    <span className="text-xs text-gray-500">/10</span>
                  </p>
                )}
                <span className="text-sm text-black">
                  {movie.release_date?.slice(0, 4)}
                </span>
              </div>
            </div>

            <button className="text-xs font-medium text-[#09090B] flex items-end">
              See more →
            </button>
          </li>
        ))}
      </div>

      <button
        onClick={() => {
          router.push(`/search?query=${word}`);
          onClose();
        }}
        className="text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer h-10 flex items-center"
      >
        See all results for "{word}"
      </button>
    </div>
  );
};
