<template>
    <div class="maincolor">
      <div class="container">
            
            <h1>Film</h1>
            <div class="d-flex flex-wrap">
            <div class="box ms-5 mb-5" v-for="(movie,index) in store.movieList" :key=index>
              <div class="box-inner">
                <div class="box-front">
                <img :src="'https://image.tmdb.org/t/p/w342' +movie.poster_path" alt="">
                </div>
                <div class="box-back overflow-auto ">
                {{ movie.title }}<br>
                <img :src="GetFlagmovie(index)" alt="" class="bandiere"><br>
                titolo originale:{{ movie.original_title }}<br>
                <i v-for="(n,starindex) in 5" :key="starindex" class="fa-star" :class="(n <= getVotefilm(index)) ? 'fa-solid' : 'fa-regular'"></i>
                <p>Voto:{{ movie.vote_average }}</p>
                <button @click="GetCreditmovie(index)">More Info</button>
                <div class="fs-6 overflow-auto ">
                  <p>{{ cast[index] }}</p>
                </div>
                
               </div>
             </div>
             </div>
          </div>
         <div class="row">
            <h1>Serie tv</h1>
            <div class="d-flex flex-wrap">
             <div class="box ms-5 mb-5" v-for="(serie,index) in store.seriesList" :key=index>
               <div class="box-inner">
                <div class="box-front">
                 <img :src="'https://image.tmdb.org/t/p/w342' +serie.poster_path" alt="">
                </div>
                <div class="box-back">
                 {{ serie.name }}<br>
                 lingua:{{ serie.original_language }}<br>
                 <img :src="GetFlagseries(index)" alt="" class="bandiere"><br>
                 <i v-for="(a,star2index) in 5" :key="star2index" class="fa-star" :class="(a <= getVoteseries(index)) ? 'fa-solid' : 'fa-regular'"></i>
                 titolo originale:{{  serie.original_name }}<br>
                 Voto:{{ serie.vote_average }}
                 <button @click="GetCreditseries(index)">More Info</button>
                <div class="fs-6 overflow-auto ">
                  <p>{{ castseries[index] }}</p>
                </div>
                </div>
               </div> 
             </div>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
import {store} from '../data.js';
import axios from 'axios';

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
            ],
            cast: [],
            castseries:[]
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
       },
       GetCreditmovie(index){
        const movieId = this.store.movieList[index].id;
        
        const endpoint = this.store.endPoint.movieCast + movieId + '/credits'
        const params = {
          api_key:this.store.params.api_key
        };
        
        axios.get(this.store.apiUrl + endpoint,{params}).then((res)=>{
        const cast = res.data.cast.slice(0, 5).map(actor => actor.name);
        console.log(cast)
        this.cast[index] = cast;
        console.log(this.cast)
        console.log(cast)
        })
       },
       GetCreditseries(index){
        const seriesId = this.store.seriesList[index].id;
        
        const endpoint = this.store.endPoint.seriesCast + seriesId + '/credits'
        const params = {
          api_key:this.store.params.api_key
        };
        
        axios.get(this.store.apiUrl + endpoint,{params}).then((res)=>{
        const cast = res.data.cast.slice(0, 5).map(actor => actor.name);
        console.log(cast)
        this.castseries[index] = cast;
        console.log(this.cast)
        console.log(cast)
        })
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
.box {
        background-color: transparent;
        width: 200px;
        height: 300px;
        border: 1px solid #eeeeee;
        perspective: 1000px;
      }
      .box-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
      }
      .box:hover .box-inner {
        transform: rotateY(180deg);
      }
      .box-front,
      .box-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      .box-front {
        background-color: #cccccc;
        color: #111111;
      }
      .box-back {
        background-color:black;
        color: #eeeeee;
        transform: rotateY(180deg);
      }
.bandiere{
    width: 40px;
}
img{
    width:100%;
}
</style>