export const fetchfromUpcomingMovieDB = async (upcoming: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${upcoming}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    },
  );
  const data = await response.json();
  return data.results;
};
export const 