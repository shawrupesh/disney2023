import { Movie } from "@/lib/types";
import MovieCard from "./MovieCard";

type props = {
  title: string;
  movies: Movie[];
  isVertical: boolean;
};

export default function MoviesCarousel({ title, movies, isVertical }: props) {
  function MovieCardReturn(vertical:boolean) {
    return movies.map((movie) => <MovieCard key={movie.id} movie={movie} isVertical={vertical} />);
  }

  return (
    <>
      <h1 className="text-xl px-10 py-2 font-bold">{title}</h1>
      {isVertical ? (
        <div className="flex-col ">{MovieCardReturn(true)}</div>
      ) : (
        <div className="flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5">
          {MovieCardReturn(false)}
        </div>
      )}
    </>
  );
}
