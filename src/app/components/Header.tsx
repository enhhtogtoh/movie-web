"use client";
import { fetcher } from "@/utils/fetcher";
import { useState, ChangeEvent } from "react";
import useSWR from "swr";
// import { useRouter } from "next/navigation";
import { SearchResultList } from "./SearchResultList";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SearchIcon, Loader } from "lucide-react";
import { GenresDropdown } from "@/app/components/GenreButton";
import { Genre } from "@/lib/getGenres";
import { MdOutlineDarkMode } from "react-icons/md";
import { TbMovie } from "react-icons/tb";

type Props = {
  genres: Genre[];
};

export const Header = ({ genres }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // const { replace } = useRouter();
  const { data, isLoading, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
    fetcher,
  );
  const results = data?.results ?? [];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // replace(`/?query=${e.target.value}`);
  };
  return (
    <div
      id="navigation"
      className="w-full h-14.75 flex justify-between px-4 items-center"
    >
      <div className="w-full flex justify-between items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-2 items-center"
        >
          <TbMovie style={{ color: "#432dd7", width: 20, height: 20 }} />
          <Link href="/">
            <p className="text-indigo-700 font-semibold italic">Movie Z</p>
          </Link>
        </motion.div>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex gap-3">
          <GenresDropdown genres={genres} />

          <div className="flex w-94.75 border px-3 gap-2 items-center rounded-md border-[#e4e4e7]">
            <SearchIcon size={16} />
            <input
              type="search"
              placeholder="Search.."
              className="w-full outline-none "
              onChange={handleChange}
            />
            {isLoading && <Loader size={16} />}
            <SearchResultList
              word={searchValue}
              results={results}
              onClose={() => setSearchValue("")}
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex gap-3">
          {/* Mobile search */}
          <button className="md:hidden w-9 h-9 flex items-center justify-center border rounded-md ">
            <SearchIcon size={18} />
          </button>

          {/* Dark mode */}
          <div className="w-9 h-9 flex items-center justify-center border rounded-md border-[#e4e4e7]">
            <MdOutlineDarkMode className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
