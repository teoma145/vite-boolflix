<template>
    <div class="maincolor">
      <div class="container">
         <div class="row mb-4">
            <h1>Film</h1>
            <div class="col-12 col-md-3 mb-4" v-for="(movie,index) in store.movieList" :key=index>
                
                <img :src="'https://image.tmdb.org/t/p/w342' +movie.backdrop_path" alt="">
                {{ movie.title }}<br>
                <img :src="GetFlagmovie(index)" alt="" class="bandiere"><br>
                titolo originale:{{ movie.original_title }}<br>
                <i v-for="(n,starindex) in 5" :key="starindex" class="fa-star" :class="(n <= getVotefilm(index)) ? 'fa-solid' : 'fa-regular'"></i>
                Voto:{{ movie.vote_average }}
            </div>
         </div>
         <div class="row">
            <h1>Serie tv</h1>
            <div class="col-12 col-md-3 mb-5 p-2" v-for="(serie,index) in store.seriesList" :key=index>
                
                <img :src="'https://image.tmdb.org/t/p/w342' +serie.backdrop_path" alt="">
                {{ serie.name }}<br>
                lingua:{{ serie.original_language }}<br>
                <img :src="GetFlagseries(index)" alt="" class="bandiere"><br>
                <i v-for="(a,star2index) in 5" :key="star2index" class="fa-star" :class="(a <= getVoteseries(index)) ? 'fa-solid' : 'fa-regular'"></i>
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
            flags:[
                'cn',
                'it',
                'en',
                'ru',
                'te',
                'kr',
                'fr',
                'ja',
                'ca',
            ]
        }
    },
    methods:{
        GetFlagmovie(index){
        let flag=`/images/${this.store.movieList[index].original_language}.svg`;
        if (!this.flags.includes(this.store.movieList[index].original_language)){
            flag=`/images/globe.svg`;
        }
        return flag;
      },
      GetFlagseries(index){
        let flag=`/images/${this.store.seriesList[index].original_language}.svg`;
        if (!this.flags.includes(this.store.seriesList[index].original_language)){
            flag=`/images/globe.svg`;
        }
        return flag;
      },
      getVotefilm(index){
        return Math.ceil(this.store.movieList[index].vote_average /2);
       },
       getVoteseries(index){
        return Math.ceil(this.store.seriesList[index].vote_average /2);
       }
    },
    computed:{
       
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