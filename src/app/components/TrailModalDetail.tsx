// "use client";
// type Props = {
//   youtubeKey: string;
//   onClose: () => void;
//   movieId: string;
// };

// export const TrailerModalDetail = ({ youtubeKey, onClose, movieId }: Props) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 max-sm:place-content-start">
//       <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg max-sm:w-auto ">
//         <button
//           onClick={onClose}
//           className="absolute -top-10 right-0 text-white text-lg cursor-pointer"
//         >
//           ✕
//         </button>

//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${youtubeKey}`}
//           allow="autoplay; encrypted-media"
//         />
//       </div>
//     </div>
//   );
// };

// "use client";

// type Props = {
//   youtubeKey: string;
//   onClose: () => void;
//   movieId: string;
// };

// export const TrailerModalDetail = ({
//   youtubeKey,
//   onClose,
// }: Props) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
//       {/* Modal container */}
//       <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 z-10 text-white text-2xl hover:scale-110 transition"
//         >
//           ✕
//         </button>

//         {/* YouTube iframe */}
//         <iframe
//           className="w-full h-full"
//           src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// };
"use client";

type Props = {
  youtubeKey: string;
  onClose: () => void;
  movieId: string;
};

export const TrailerModalDetail = ({
  youtubeKey,
  onClose,
}: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      {/* Wrapper */}
      <div className="relative w-full max-w-4xl">
        {/* ❌ Close button – iframe-ийн ГАДНА */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl hover:scale-110 transition"
        >
          ✕
        </button>

        {/* Video container */}
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
