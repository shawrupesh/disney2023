import MovieCard from "./MovieCard";
import { Movie } from "@/lib/types";

type props = {
  title: string;
  movies: Movie[];
  isVertical: boolean;
};

export default function MoviesCarousel({ title, movies, isVertical }: props) {
    
  return (
    <>
    <h1 className="text-xl px-10 py-2 font-bold">{title}</h1>
    <div className="flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  );
}
