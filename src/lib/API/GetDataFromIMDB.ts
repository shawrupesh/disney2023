async function fetchDataFromIMDB(url: URL) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_TOKEN} `,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.results;
}
export async function getGenreData() {
  const url=new URL("https://api.themoviedb.org/3/genre/movie/list?language=en")
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_TOKEN} `,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function getTopRatedMovies() {
  const url=new URL("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1")
  const data = await fetchDataFromIMDB(url);
  return data;
}
export async function getUpcomingMovies() {
  const url=new URL("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1")

  const data = await fetchDataFromIMDB(url);
  return data;
}

export async function getPopularMovies() {
  const url=new URL( "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1")
  const data = await fetchDataFromIMDB(url);
  return data;
}

export async function getAiringMovies() {
  const url=new URL( "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1")
  const data = await fetchDataFromIMDB(url);
  return data;
}
export async function getsearchedMovies(query:string) {
  const url=new URL( `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
  const data = await fetchDataFromIMDB(url);
  return data;
}
export async function getsearchedMoviesById(query:string) {
  const url=new URL( `https://api.themoviedb.org/3/movie/${query}/similar?language=en-US&page=1&include_adult=false`)
  const data = await fetchDataFromIMDB(url);
  return data;
}

//https://api.themoviedb.org/3/search/movie?query=star&include_adult=false&language=en-US&page=1' 