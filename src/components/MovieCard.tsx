import Image from "next/image";
import getImagePath from "@/lib/GetImagePath";

function MovieCard({ movie,isVertical }: any) {
  const { title, poster_path, popularity, name, backdrop_path, overview } = movie;
  const url = getImagePath(poster_path);

  return (
    <div className="relative flex cursor-pointer flex-shrink-0 transform hover:scale-105 transition duration-200 ease-out">
      <div className=" absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-500  z-20 dark:to-[black]" />
      <h1 className="absolute z-20 bottom-5 left-3 ">{title ? title : name}</h1>
    
      <Image
        className="w-fit lg:min-w-[400px] object-cover h-56 object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getImagePath(poster_path || backdrop_path)}
        alt="movie"
        width={1920}
        height={1080}
        key={movie.id}
      />
      {isVertical&&<p className="m-2">{overview}</p> }  
    </div>
  );
}

export default MovieCard;
