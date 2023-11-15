<template>
    <div class="maincolor">
      <div class="container">
         <div class="row">
            <h1>Film</h1>
            <div class="col-12 col-md-3" v-for="(movie,index) in store.movieList" :key=movie.id>
                {{ movie.title }}
                <img :src="'https://image.tmdb.org/t/p/w342' +movie.backdrop_path" alt="">
            </div>
         </div>
         <div class="row">
            <h1>Serie tv</h1>
            <div class="col-6 col-md-3 mb-5 p-2" v-for="(serie,index) in store.seriesList" :key=serie.id>
                {{ serie.name }}
                <img :src="'https://image.tmdb.org/t/p/w342' +serie.backdrop_path" alt="">
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
</style>