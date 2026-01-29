// "use client";

// import { fetcher } from "@/utils/fetcher";
// import { useState, ChangeEvent } from "react";
// import useSWR from "swr";
// import { SearchResultList } from "./SearchResultList";
// import Link from "next/link";
// import * as motion from "motion/react-client";
// import { SearchIcon, Loader, X } from "lucide-react";
// import { GenresDropdown } from "@/app/components/GenreButton";
// import { Genre } from "@/lib/getGenres";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { TbMovie } from "react-icons/tb";

// type Props = {
//   genres: Genre[];
// };

// export const Header = ({ genres }: Props) => {
//   const [searchValue, setSearchValue] = useState("");
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [mobileGenreOpen, setMobileGenreOpen] = useState(false);

//   const { data, isLoading } = useSWR(
//     searchValue
//       ? `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
//       : null,
//     fetcher,
//   );

//   const results = data?.results ?? [];

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.target.value);
//   };

//   return (
//     <div className="relative w-full h-14.75 flex justify-between px-4 items-center">
//       <div className="w-full flex justify-between items-center">
//         {/* LOGO */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.8 }}
//           whileInView={{ opacity: 1 }}
//           className="flex gap-2 items-center"
//         >
//           <TbMovie style={{ color: "#432dd7", width: 20, height: 20 }} />
//           <Link href="/">
//             <p className="text-indigo-700 font-semibold italic">Movie Z</p>
//           </Link>
//         </motion.div>

//         {/* ================= DESKTOP SEARCH ================= */}
//         <div className="hidden md:flex gap-3 items-center">
//           <GenresDropdown genres={genres} />

//           <div className="relative flex w-94.75 border px-3 gap-2 h-9.5 items-center rounded-md border-[#e4e4e7]">
//             <SearchIcon size={16} />
//             <input
//               type="search"
//               placeholder="Search.."
//               className="w-full outline-none"
//               value={searchValue}
//               onChange={handleChange}
//             />
//             {isLoading && <Loader size={16} />}

//             <SearchResultList
//               word={searchValue}
//               results={results}
//               onClose={() => setSearchValue("")}
//             />
//           </div>
//         </div>

//         {/* ================= RIGHT ICONS ================= */}
//         <div className="flex gap-3">
//           {/* MOBILE GENRE */}
//           {/* <button
//             onClick={() => setMobileGenreOpen(true)}
//             className="md:hidden w-9 h-9 flex items-center justify-center border rounded-md border-[#e4e4e7]"
//           >
//             ☰
//           </button> */}
//           {/* MOBILE SEARCH */}
//           {mobileSearchOpen && (
//             <div className="flex flex-col">
//               {" "}
//               <button
//                 onClick={() => setMobileGenreOpen(true)}
//                 className="md:hidden w-9 h-9 flex items-center justify-center border rounded-md border-[#e4e4e7]"
//               >
//                 ☰
//               </button>
//               <GenresDropdown genres={genres} />
//             </div>
//           )}{" "}
//           <button
//             onClick={() => setMobileSearchOpen(true)}
//             className="md:hidden w-9 h-9 flex items-center justify-center border rounded-md border-[#e4e4e7]"
//           >
//             <SearchIcon size={18} />
//           </button>
//           {/* DARK MODE */}
//           <div className="w-9 h-9 flex items-center justify-center border rounded-md border-[#e4e4e7]">
//             <MdOutlineDarkMode className="cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE SEARCH OVERLAY ================= */}
//       {mobileSearchOpen && (
//         <div className="absolute inset-0 z-50 bg-white px-4 pt-3 md:hidden">
//           <div className="relative flex items-center gap-2">
//             <SearchIcon size={16} className="text-gray-500" />

//             <input
//               autoFocus
//               type="search"
//               placeholder="Search"
//               className="flex-1 border rounded-md px-3 py-2 outline-none border-[#e4e4e7]"
//               value={searchValue}
//               onChange={handleChange}
//             />

//             {isLoading && <Loader size={16} />}

//             <button
//               onClick={() => {
//                 setMobileSearchOpen(false);
//                 setSearchValue("");
//               }}
//             >
//               <X size={20} />
//             </button>

//             <SearchResultList
//               word={searchValue}
//               results={results}
//               onClose={() => {
//                 setMobileSearchOpen(false);
//                 setSearchValue("");
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* ================= MOBILE GENRE OVERLAY ================= */}
//       {mobileGenreOpen && (
//         <div className="absolute inset-0 z-50 bg-white px-4 pt-4 md:hidden">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Genres</h2>
//             <button onClick={() => setMobileGenreOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           {/* reuse existing GenresDropdown */}
//           <GenresDropdown genres={genres} />
//         </div>
//       )}
//     </div>
//   );
// };
"use client";

import { fetcher } from "@/utils/fetcher";
import { useState, ChangeEvent } from "react";
import useSWR from "swr";
import { SearchResultList } from "./SearchResultList";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SearchIcon, Loader, X, ChevronDownIcon } from "lucide-react";
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
  const [mobileGenreOpen, setMobileGenreOpen] = useState(false);

  const { data, isLoading } = useSWR(
    searchValue
      ? `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
      : null,
    fetcher,
  );

  const results = data?.results ?? [];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="relative w-full px-4 h-14 flex items-center">
      <div className="w-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-2 items-center"
        >
          <TbMovie className="text-indigo-600 w-5 h-5" />
          <Link href="/">
            <span className="text-indigo-700 font-semibold italic">
              Movie Z
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-3 items-center">
          <GenresDropdown genres={genres} />

          <div className="relative flex items-center gap-2 w-96 h-9 border rounded-md px-3 border-gray-300">
            <SearchIcon size={16} />
            <input
              type="search"
              placeholder="Search..."
              value={searchValue}
              onChange={handleChange}
              className="w-full outline-none "
            />
            {isLoading && <Loader size={16} />}

            <SearchResultList
              word={searchValue}
              results={results}
              onClose={() => setSearchValue("")}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden w-9 h-9 border rounded-md flex items-center justify-center border-[#e4e4e7] cursor-pointer"
          >
            <SearchIcon size={18} />
          </button>

          <div className="w-9 h-9 border rounded-md flex items-center justify-center border-[#e4e4e7]">
            <MdOutlineDarkMode />
          </div>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="absolute inset-0 z-50 bg-white px-4 pt-3 md:hidden">
          <div className="relative flex items-center gap-2 w-full">
            <div>
              <GenresDropdown genres={genres} />
            </div>
            <SearchIcon size={16} className="text-gray-500 " />

            <input
              autoFocus
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleChange}
              className="flex-1 border rounded-md px-3 py-2 outline-none border-[#e4e4e7]"
            />

            {isLoading && <Loader size={16} />}

            <button
              onClick={() => {
                setMobileSearchOpen(false);
                setMobileGenreOpen(false);
                setSearchValue("");
              }}
              className="cursor-pointer"
            >
              <X size={20} />
            </button>

            <SearchResultList
              word={searchValue}
              results={results}
              onClose={() => {
                setMobileSearchOpen(false);
                setSearchValue("");
              }}
            />
          </div>

          {mobileGenreOpen && (
            <div className="mt-3">
              <GenresDropdown genres={genres} />
            </div>
          )}
        </div>
      )}
    </header>
  );
};
