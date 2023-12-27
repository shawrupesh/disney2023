import Image from 'next/image'
import MoviesCarousel from '@/components/MoviesCarousel'
import { getUpcomingMovies, getPopularMovies, getTopRatedMovies } from '@/lib/API/GetDataFromIMDB'
export default async function Home() {
  const UpcomingMovie=await getUpcomingMovies()
  const PopularMovies= await getPopularMovies()
  const TopRatedMovies= await getTopRatedMovies()
  
  
  return (
    <main >
   <h1>Disney Home Page</h1>
   <MoviesCarousel title='Upcoming Movies' movies={UpcomingMovie} isVertical={false}    />
   <MoviesCarousel title='Top Rated Movies' movies={TopRatedMovies} isVertical={false}    />
   <MoviesCarousel title='Most popular Movies' movies={PopularMovies} isVertical={false}    />


    </main>
  )
}
