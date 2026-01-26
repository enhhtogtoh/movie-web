// type Props = {
//   id: string;
// };

// export default async function Team({ id }: Props) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
//       },
//     }
//   );

//   const data = await res.json();
//   console.log(data);
//   const directors = data.crew.filter((p: any) => p.job === "Director");
//   const writers = new Set(
//     data.crew
//       .filter((p: any) => p.known_for_department === "Writing")
//       .slice(0, 3)
//       .map((w: any) => w.name)
//   );

//   const actors = data.cast.filter(
//     (actor: any) => actor.known_for_department === "Acting"
//   );
//   console.log(writers);

//   return (
//     <div className="mt-8">
//       <div className="mb-6 flex gap-13.25 border-b pb-1 border-[#E4E4E7]">
//         <p className="font-bold mb-1 w-16">Director</p>

//         {directors.map((d: any) => (
//           <p key={d.id} className="font-normal">
//             {d.name}
//           </p>
//         ))}
//       </div>

//       <div>
//         <div className="flex flex-wrap gap-13.25 items-center mb-6 border-b pb-1 border-[#E4E4E7]">
//           <p className="font-bold mb-1 w-16">Writers</p>
//           <p>{Array.from(writers).join(" · ")}</p>
//         </div>
//         <div className="flex gap-13.25 border-b pb-1 border-[#E4E4E7] ">
//           <p className="font-bold mb-1 w-16">Stars</p>

//           <p className="max-sm:flex-wrap">
//             {actors
//               .slice(0, 3)
//               .map((actor: any) => actor.name)
//               .join(" · ")}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
type Props = {
  id: string;
};

export default async function Team({ id }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );

  const data = await res.json();

  const directors = data.crew.filter((p: any) => p.job === "Director");

  const writers = Array.from(
    new Set(
      data.crew
        .filter((p: any) => p.known_for_department === "Writing")
        .map((w: any) => w.name)
    )
  ).slice(0, 3);

  const actors = data.cast
    .filter((a: any) => a.known_for_department === "Acting")
    .slice(0, 3)
    .map((a: any) => a.name);

  return (
    <div className="mt-8 space-y-4">
      {/* Director */}
      <div className="grid grid-cols-[120px_1fr] border-b pb-2 border-[#E4E4E7]">
        <p className="font-bold">Director</p>
        <p>{directors.map((d: any) => d.name).join(" · ")}</p>
      </div>

      {/* Writers */}
      <div className="grid grid-cols-[120px_1fr] border-b pb-2 border-[#E4E4E7]">
        <p className="font-bold">Writers</p>
        <p>{writers.join(" · ")}</p>
      </div>

      {/* Stars */}
      <div className="grid grid-cols-[120px_1fr] border-b pb-2 border-[#E4E4E7]">
        <p className="font-bold">Stars</p>
        <p>{actors.join(" · ")}</p>
      </div>
    </div>
  );
}
