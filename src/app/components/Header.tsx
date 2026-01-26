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
  // console.log(results);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // replace(`/?query=${e.target.value}`);
  };
  return (
    // <div
    //   id="navigation"
    //   className="w-full h-14.75  flex justify-between px-8  items-center"
    // >
    //   <div
    //     id="center navigation"
    //     className="w-full h-9 flex justify-between items-center "
    //   >
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileHover={{ scale: 1.2 }}
    //       whileTap={{ scale: 0.8 }}
    //       whileInView={{ opacity: 1 }}
    //       id="logo"
    //       className="flex h-5 gap-2 justify-center items-center"
    //     >
    //       <TbMovie
    //         style={{ color: "#432dd7", width: "20px", height: "20px" }}
    //       />
    //       <Link href="/">
    //         <p className="text-indigo-700 font-semibold italic">Movie Z</p>
    //       </Link>
    //     </motion.div>
    //     <div id="search-frame" className="w-122 h-9 flex gap-3  ">
    //       <GenresDropdown genres={genres} />
    //       <div className="flex w-[379] h- border px-3 gap-[10] items-center rounded-md border-[#e4e4e7] max-sm:w-9 ">
    //         <SearchIcon style={{ width: "16px", height: "16px" }} />
    //         <input
    //           type="search"
    //           placeholder="Search.."
    //           className="w-full"
    //           onChange={handleChange}
    //         />
    //         {isLoading && <Loader />}
    //         <SearchResultList
    //           word={searchValue}
    //           results={results}
    //           onClose={() => setSearchValue("")}
    //         />
    //       </div>
    //     </div>
    //     <div
    //       id="modes"
    //       className="w-9 h-9 flex gap-3  border rounded-md py-2 justify-center border-[#e4e4e7]"
    //     >
    //       <MdOutlineDarkMode className="cursor-pointer" />
    //     </div>
    //   </div>
    // </div>
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

// "use client";

// import { useState, ChangeEvent } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import { SearchIcon, Loader } from "lucide-react";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { TbMovie } from "react-icons/tb";
// import * as motion from "motion/react-client";

// import { fetcher } from "@/utils/fetcher";
// import { SearchResultList } from "./SearchResultList";
// import { GenresDropdown } from "@/app/components/GenreButton";
// import { Genre } from "@/lib/getGenres";

// type Props = {
//   genres: Genre[];
// };

// export const Header = ({ genres }: Props) => {
//   const [searchValue, setSearchValue] = useState("");
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

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
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="w-full h-14 flex items-center justify-between px-4 md:px-8 border-b">
//         {/* LOGO */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="flex items-center gap-2"
//         >
//           <TbMovie className="text-indigo-700" size={22} />
//           <Link href="/" className="text-indigo-700 font-semibold italic">
//             Movie Z
//           </Link>
//         </motion.div>

//         {/* CENTER (Desktop only) */}
//         <div className="hidden md:flex items-center gap-3">
//           <GenresDropdown genres={genres} />

//           <div className="relative flex w-[380px] items-center gap-2 border px-3 py-2 rounded-md">
//             <SearchIcon size={16} />
//             <input
//               type="search"
//               placeholder="Search..."
//               className="w-full outline-none"
//               onChange={handleChange}
//             />
//             {isLoading && <Loader size={16} className="animate-spin" />}

//             <SearchResultList
//               word={searchValue}
//               results={results}
//               onClose={() => setSearchValue("")}
//             />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE SEARCH ICON */}
//           <button
//             className="md:hidden w-9 h-9 flex items-center justify-center border rounded-md"
//             onClick={() => setMobileSearchOpen(true)}
//           >
//             <SearchIcon size={18} />
//           </button>

//           {/* DARK MODE */}
//           <div className="w-9 h-9 flex items-center justify-center border rounded-md">
//             <MdOutlineDarkMode className="cursor-pointer" />
//           </div>
//         </div>
//       </header>

//       {/* ================= MOBILE SEARCH OVERLAY ================= */}
//       {mobileSearchOpen && (
//         <div className="fixed inset-0 z-50 bg-white px-4 pt-4">
//           <div className="flex items-center gap-2">
//             {/* CLOSE */}
//             <button
//               onClick={() => {
//                 setMobileSearchOpen(false);
//                 setSearchValue("");
//               }}
//               className="w-9 h-9 border rounded-md flex items-center justify-center"
//             >
//               ✕
//             </button>

//             {/* INPUT */}
//             <div className="flex flex-1 items-center gap-2 border px-3 py-2 rounded-md">
//               <SearchIcon size={16} />
//               <input
//                 autoFocus
//                 type="search"
//                 placeholder="Search"
//                 className="w-full outline-none"
//                 onChange={handleChange}
//               />
//               {isLoading && <Loader size={16} className="animate-spin" />}
//             </div>
//           </div>

//           <div className="mt-4">
//             <SearchResultList
//               word={searchValue}
//               results={results}
//               onClose={() => {
//                 setSearchValue("");
//                 setMobileSearchOpen(false);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
