const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with-genres=28`,
  // fetchActionMovies: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=${API_KEY}`,
  fetchCommedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with-generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?language=en-US&page=1&api_key=${API_KEY}`,
};
export default requests;