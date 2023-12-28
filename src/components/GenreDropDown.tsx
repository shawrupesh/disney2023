import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getGenreData } from "@/lib/API/GetDataFromIMDB";
import Link from "next/link";

export default async function GenreDropDown() {
  const data= await getGenreData()
  
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="font-bold  dark:bg-black overflow-y-scroll h-96 ">
        <DropdownMenuLabel>Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((genre:any)=>{
          return(
            <DropdownMenuItem key={genre.id}>
              <Link className="" href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
              </Link>
            </DropdownMenuItem>

          )
        })}
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
