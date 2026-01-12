import { SimilarMovie } from "@/app/components/SimilarMovie";

export default function SimilarPage({
  params,
}: {
  params: { movieId: string };
}) {
  return (
    <div className="px-20 py-10">
      <SimilarMovie id={params.movieId} />
    </div>
  );
}
