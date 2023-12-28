import Image from "next/image";
import Link from "next/link"
import { ThemeToggle } from "./ToggleTheme";
import GenreDropDown from "./GenreDropDown";
import Search from "./Search";



export default function Header() {
  return (
    <header className="fixed mt-2 items-center w-full flex justify-between z-50"> 
      <Link  href='/'>
      <Image 
      src='https://assets.stickpng.com/images/58428d79a6515b1e0ad75ab2.png'
      width={100}
      height={100}
      alt="Disney Logo"
      className="invert:0 dark:invert"
      />
      </Link>
 
<div className="flex font-bold mr-2 space-x-4">
  <GenreDropDown />
  <Search />
  <ThemeToggle />
</div>
    </header>

  );
}
