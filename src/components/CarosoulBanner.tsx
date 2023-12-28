"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/GetImagePath";

Autoplay.globalOptions = {
  delay: 8000,
};
function CarosoulBanner({ movies }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <>
      <div className="overflow-hidden h-96 cursor-pointer" ref={emblaRef}>
        <div className=" flex relative">
          {movies.map((movie: any) => (
            <div key={movie.id} className="min-w-0 flex-[0_0_100%]">
              <Image
                src={getImagePath(movie.backdrop_path, true)}
                alt="movie"
                width={1920}
                height={800}
                key={movie.id}
                className="object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
              />
              <div className="hidden md:inline top-0 absolute z-50  font-bold   ">
                <h2 className="text-5xl font-bold z-20 ml-48">{movie.name}</h2>
                <p className="my-2 ml-48 ">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarosoulBanner;
