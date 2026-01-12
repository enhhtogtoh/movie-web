"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Genre } from "@/lib/getGenres";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import * as motion from "motion/react-client";

type Props = {
  genres: Genre[];
};

export const GenresDropdown = ({ genres }: Props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleSelect = (genre: Genre) => {
    router.push(`/genre/${genre.id}`);
    setOpen(false);
  };
  const handleClick = () => {
    setActive(false);
  };

  return (
    <div className="relative flex ">
      <button
        onClick={() => setOpen((prev) => !prev)}
        onChange={handleClick}
        className="flex items-center gap-2 rounded-md border border-[#E4E4E7] bg-white px-4 py-2 text-sm justify-center cursor-pointer hover:bg-[#432dd7] hover:text-white active:scale-95 transition duration-200 "
      >
        <ChevronDownIcon style={{ width: "16px", height: "16px" }} />
        <h2>Genre</h2>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: -10 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 10 }}
          className="absolute left-72 top-8 z-40 mt-3 w-144.25 -translate-x-1/2 rounded-lg border border-[#E4E4E7] bg-white p-6 drop-shadow-md  "
        >
          <div className="mb-4 flex items-start justify-between gap-1">
            <div>
              <h2 className="text-2xl font-semibold">Genres</h2>
              <p className="text-base text-[#09090B] font-normal ">
                See lists of movies by genre
              </p>
            </div>
          </div>
          <div className="border-t py-4 border-[#E4E4E7]"></div>

          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleSelect(genre)}
                className="flex items-center gap-1 rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs hover:bg-[#432dd7] hover:text-white hover:border-neutral-50 cursor-pointer"
              >
                <span>{genre.name}</span>
                <ChevronRightIcon style={{ width: "14px", height: "14px" }} />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
