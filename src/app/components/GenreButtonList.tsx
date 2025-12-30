"use client";
import { getGenres } from "@/lib/getGenres";
import { useState } from "react";

type Genre = {
  id: number;
  name: string;
};

type Props = {
  genres: Genre[];
  onSelect: (id: number) => void;
};

export const GenreButton = ({ genres, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <button className="px-4 py-2 bg-gray-200 rounded">Genre</button>

      <div className="flex flex-col bg-white shadow rounded p-2">
        {genres.map((g) => (
          <button
            key={g.id}
            onClick={() => onSelect(g.id)}
            className="text-left px-2 py-1 hover:bg-gray-100"
          >
            {g.name}
          </button>
        ))}
      </div>
    </div>
  );
};
