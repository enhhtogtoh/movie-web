import Image from "next/image";
import { movies } from "../data/movies";

export const Upcoming = () => {
  return (
    <div className="p-20 w-full">
      <div className="grid grid-cols-5 gap-5 ">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-200 w-auto h-auto rounded-md">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={200}
              height={300}
              className="rounded-lg object-cover w-full"
            />

            <p className="mt-2 text-sm">⭐ {movie.rating}</p>
            <p className="text-sm font-medium">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
