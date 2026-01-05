"use client";
import { fetcher } from "@/utils/fetcher";
import { useState, ChangeEvent } from "react";
import useSWR from "swr";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { SearchResultList } from "./SearchResultList";
import Link from "next/link";
import * as motion from "motion/react-client";
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  // const { replace } = useRouter();
  const { data, isLoading, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
    fetcher
  );
  const results = data?.results ?? [];
  console.log(results);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // replace(`/?query=${e.target.value}`);
  };

  // console.log(data);

  return (
    <div
      id="navigation"
      className="w-full h-14.75  flex justify-between px-8  items-center"
    >
      <div
        id="center navigation"
        className="w-full h-9 flex justify-between items-center "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 1 }}
          id="logo"
          className="flex h-5 gap-2 justify-center items-center"
        >
          <img src="./Vector-1.png" alt="vector" className="w-[17] h-[17]" />
          <Link href="/">
            <p className="text-indigo-700 font-semibold italic">Movie Z</p>
          </Link>
        </motion.div>
        <div id="search-frame" className="w-122 h-9 flex gap-3  ">
          <button className="flex items-center justify-center border rounded-md  px-4 py-2 gap-2 w-[97] h- border-[#E4E4E7] text-[#18181B] font-medium text-sm cursor-pointer">
            <img src="./chevron-down.png" alt="chevron" className="w-4 h-4" />
            Genre
          </button>
          {/* <GetGenres /> */}
          {/* <GenreButton genres={onclick} onSelect={onselect} /> */}

          <div className="flex w-[379] h- border px-3 gap-[10] items-center rounded-md border-[#e4e4e7] ">
            <img
              src="_magnifying-glass.png"
              alt="_magnifying-glass"
              className="w-4 h-4 "
            />
            <input
              type="search"
              placeholder="Search.."
              className="w-full"
              onChange={handleChange}
            />
            {isLoading && <Loader />}
            <SearchResultList
              word={searchValue}
              results={results}
              onClose={() => setSearchValue("")}
            />
          </div>
        </div>
        <div
          id="modes"
          className="w-9 h-9 flex gap-3  border rounded-md py-2 justify-center border-[#e4e4e7]"
        >
          <img src="moon.png" alt="moon" className="w-4 h-4 " />
        </div>
      </div>
    </div>
  );
};
