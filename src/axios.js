import axios from "axios";

const networkService = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
});

export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default networkService;

//https://api.themoviedb.org/3/movie/upcoming?api_key=4d0a156572bf3e035dddc1745fb67089
//`https://image.tmdb.org/t/p/original${movies?movies.poster_path:""}`