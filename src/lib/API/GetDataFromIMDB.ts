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
  const data = await fetchDataFromIMDB(url);
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
