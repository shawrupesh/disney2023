import Image from "next/image";
import getImagePath from "@/lib/GetImagePath";

function MovieCard({ movie }: any) {
    const {title,poster_path, popularity,name, backdrop_path}=movie
    const url=getImagePath(poster_path)
    console.log(url);
    
  return <div className="relative cursor-pointer flex-shrink-0 transform hover:scale-105 transition duration-200 ease-out">
    <div  className=" absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-500  z-20 dark:to-[black]" />
  <p className="absolute z-20 bottom-5 left-3 ">{title?title:name}</p>
  <Image 
  className="w-fit lg:min-w-[400px] object-cover h-56 object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
  src={getImagePath(poster_path||backdrop_path)}
  alt="movie"
  width={1920}
  height={1080}
  key={movie.id}

  />
  </div>
}

export default MovieCard;
