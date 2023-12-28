import Image from "next/image";
import Link from "next/link"
import { ThemeToggle } from "./ToggleTheme";
import GenreDropDown from "./GenreDropDown";
import Search from "./Search";



export default function Header() {
  return (
    <header className="sticky  items-center w-full flex justify-between z-20"> 
      <Link  href='/'>
      <Image 
      src='https://cdn.worldvectorlogo.com/logos/disney.svg'
      width={100}
      height={100}
      alt="Disney Logo"
      className="invert:0 dark:invert"
      />
      </Link>
 {
  //dark Mode
  //Search Comp
  //Genre dropdown
 }
<div className="flex space-x-4">
  <GenreDropDown />
  <Search />
  <ThemeToggle />
</div>
    </header>
  );
}
