export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjJlMzE3OTBiMDFjNWRmNTY1ZmI4ZTAwNGRhZDFmZiIsIm5iZiI6MTc0NDYwMzU5Ni4xMjEsInN1YiI6IjY3ZmM4OWNjMzExMGJkODJkZmFkMWQ3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._V9ftySDlouCYvy2tD9B5FKoUXqePF-55sAkmTy4wbw'
  }
};
  
  export async function fetchMovieInfo2() {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
 
     return await res.json()  ;
  }

