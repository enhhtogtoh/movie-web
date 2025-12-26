"use client";

import { useState } from "react";
import { TrailerModal } from "./TrailModal";

type Props = {
  movieId: number;
};

export const WatchTrailerButton = ({ movieId }: Props) => {
  const [youtubeKey, setYoutubeKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    const data = await res.json();

    const trailer =
      data.results?.find(
        (v: any) => v.site === "YouTube" && v.type === "Trailer"
      ) || data.results?.find((v: any) => v.site === "YouTube");

    if (!trailer) {
      alert("Trailer олдсонгүй 😅");
      setLoading(false);
      return;
    }

    setYoutubeKey(trailer.key);
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className="mt-4 rounded-md bg-white px-6 py-2 text-sm font-medium text-black"
      >
        {loading ? "Loading..." : "Watch Trailer"}
      </button>

      {youtubeKey && (
        <TrailerModal
          youtubeKey={youtubeKey}
          onClose={() => setYoutubeKey(null)}
        />
      )}
    </>
  );
};
