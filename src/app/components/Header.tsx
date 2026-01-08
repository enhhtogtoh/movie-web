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
  // const { replace } = useRouter();
  const { data, isLoading, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
    fetcher
  );
  const results = data?.results ?? [];
  // console.log(results);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // replace(`/?query=${e.target.value}`);
  };
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
          <TbMovie
            style={{ color: "#432dd7", width: "20px", height: "20px" }}
          />
          <Link href="/">
            <p className="text-indigo-700 font-semibold italic">Movie Z</p>
          </Link>
        </motion.div>
        <div id="search-frame" className="w-122 h-9 flex gap-3  ">
          <GenresDropdown genres={genres} />
          <div className="flex w-[379] h- border px-3 gap-[10] items-center rounded-md border-[#e4e4e7] ">
            <SearchIcon style={{ width: "16px", height: "16px" }} />
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
          <MdOutlineDarkMode className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
