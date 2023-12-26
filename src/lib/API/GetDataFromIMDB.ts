async function fetchDataFromIMDB(url:string) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.MOVIE_API_TOKEN} `
        },
        next:{
           revalidate:60*60*24
        }
      };

    const response= await fetch(url,options)
    const data= await response.json()
    // console.log(data);
    
    return data

}
export async function getGenreData(){
    const data= await fetchDataFromIMDB('https://api.themoviedb.org/3/genre/movie/list?language=en')
    return data
}