import { reactive } from "vue";

export const store = reactive({
 apiUrl:'https://api.themoviedb.org/3/',
 endPoint:{
    movies:'search/movie',
    series:'search/tv',
    movieCast:'movie/',
    seriesCast:'tv/',

 },
 params: {
    api_key :'c96cebdd3cf1aa616cc8c037f2623de0',
    query:'',
 },
 movieList:[],
 seriesList:[],
 popularList:[],
 mysearched:false
});