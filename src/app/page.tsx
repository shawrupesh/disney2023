import Image from 'next/image'
import MoviesCarousel from '@/components/MoviesCarousel'
import { getUpcomingMovies, getPopularMovies, getTopRatedMovies,getAiringMovies } from '@/lib/API/GetDataFromIMDB'
import CarosulBannerWrapper from '@/components/CarosulBannerWrapper'
export default async function Home() {
  const UpcomingMovie=await getUpcomingMovies()
  const PopularMovies= await getPopularMovies()
  const TopRatedMovies= await getTopRatedMovies()
  const AiringMovies= await getAiringMovies()
  
  
  return (
    <main >
   <CarosulBannerWrapper movies={AiringMovies}  />
   <MoviesCarousel title='Upcoming Movies' movies={UpcomingMovie} isVertical={false}    />
   <MoviesCarousel title='Top Rated Movies' movies={TopRatedMovies} isVertical={false}    />
   <MoviesCarousel title='Most popular Movies' movies={PopularMovies} isVertical={false}    />


    </main>
  )
}
