const API_KEY="4d0a156572bf3e035dddc1745fb67089"
const requests={
    fetchUpcoming: `movie/upcoming?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,

}
export default requests
//https://api.themoviedb.org/3/movie/upcoming?api_key=4d0a156572bf3e035dddc1745fb67089