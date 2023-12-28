import { getsearchedMovies, getPopularMovies } from "@/lib/API/GetDataFromIMDB";
import MoviesCarousel from "@/components/MoviesCarousel";

type props = {
  params: {
    term: string;
  };
};

async function Search({ params: { term } }: props) {
  const searchedMovie = await getsearchedMovies(term);
  const popular = await getPopularMovies();

  const label = decodeURI(term);
  return (
    <div className="z-100 ">
      {searchedMovie.length > 0 ? (
        <MoviesCarousel
          title={`Result for ${label}`}
          movies={searchedMovie}
          isVertical={true}
        />
      ) : (
        "No result found"
      )}
      <MoviesCarousel title="You May also Like" movies={popular} isVertical={false}  />
    </div>
  );
}
export default Search;
