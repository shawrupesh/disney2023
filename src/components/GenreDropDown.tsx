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
  const {genres}= await getGenreData()
  console.log(genres);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genres.map((genre:any)=>{
          return(
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
              </Link>
            </DropdownMenuItem>

          )
        })}
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
