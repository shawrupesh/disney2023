type props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
import MovieCard from "@/components/MovieCard";
import { getAiringMovies, getsearchedMovies, getsearchedMoviesById } from "@/lib/API/GetDataFromIMDB";
async function genrePage({ params: { id }, searchParams: { genre } }: props) {
  const movies=await getsearchedMoviesById(id)
  
  return (
    <>
      <h1>
        Result for {genre}
      </h1>
      <div className="mt-4">

      {movies!==undefined &&
        movies.map((movie:any)=>
        <MovieCard key={movie.id} movie={movie}  isVertical={true}/>
        )
      }
      </div>
     
    </>
  );
}

export default genrePage;
