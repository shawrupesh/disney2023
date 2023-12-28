export default function getImagePath(imagePath: string, fullSize?: boolean) {
  const base_url = "https://image.tmdb.org/t/p/";
  return imagePath
    ? base_url + `${fullSize ? "original" : "w500"}` + imagePath
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1e_7xFIrdV9nt_rCzn-osMQK0t9PYbrOedARyPIO1Q&s";
}
