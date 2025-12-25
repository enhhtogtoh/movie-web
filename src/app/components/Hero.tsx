import { nowPalying } from "../page";
import { Moviecard1 } from "./MovieCard";
const fetchfromNowPlayingMovieDB = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );
  const data = await response.json();

  return data.results;
};
export const Hero = async () => {
  const nowPlayingMovie: nowPalying[] = await fetchfromNowPlayingMovieDB();
  return (
    <div>
      <div className="w-full h-150  flex">
        {nowPlayingMovie.map((now) => (
          <Moviecard1 now={now} key={now.id} />
        ))}
      </div>
    </div>
  );
};
