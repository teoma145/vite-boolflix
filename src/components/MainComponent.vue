<template>
    <div class="maincolor">
      <div class="container">
         <div class="row mb-4">
            <h1>Film</h1>
            <div class="col-12 col-md-3 mb-4" v-for="(movie,index) in store.movieList" :key=movie.id>
                
                <img :src="'https://image.tmdb.org/t/p/w342' +movie.backdrop_path" alt="">
                {{ movie.title }}<br>
                {{ movie.original_language }}<br>
                <img :src="'images/' + movie.original_language + '.svg'" alt="" class="bandiere"><br>
                titolo originale:{{ movie.original_title }}<br>
                Voto:{{ movie.vote_average }}
            </div>
         </div>
         <div class="row">
            <h1>Serie tv</h1>
            <div class="col-12 col-md-3 mb-5 p-2" v-for="(serie,index) in store.seriesList" :key=serie.id>
                
                <img :src="'https://image.tmdb.org/t/p/w342' +serie.backdrop_path" alt="">
                {{ serie.name }}<br>
                lingua:{{ serie.original_language }}<br>
                <img :src="'images/' + serie.original_language + '.svg'" alt="" class="bandiere"><br>
                titolo originale:{{  serie.original_name }}<br>
                Voto:{{ serie.vote_average }}
            </div>
         </div>
      </div>
    </div>
</template>

<script>
import {store} from '../data.js';
export default {
    name:'MainComponent',
    data () {
        

        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.maincolor{
    background-color: grey;
}
img{
    width:100%;
}
.bandiere{
    width: 40px;
}
</style>