<template>
  <div class="bg-black pb-2 "  v-if="store.movieList.length <= 0">
    
    <div class="videocontainer">
      <div class="bg-danger" v-if="store.movieList <= 0 && store.mysearched == true">
      La tua ricerca non ha prodotto risultati
     </div>
      <video autoplay controls width="1400" class="myvideo">
        <source src="../assets/style/videos/trailer.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
      <h1 class="mt-3 ms-4">I più popolari</h1>
      <div class="mt-5 mymargin d-flex flex-wrap">
       <div class="box ms-4 mb-5" v-for="(popularitem,index) in store.popularList " :key=index>
       <div class="box-inner">
        <div class="box-front">
          <img :src="'https://image.tmdb.org/t/p/w342' +popularitem.poster_path" alt="">
        </div>
        <div class="box-back">
          <h2>{{ popularitem.title }}</h2>
          
          <i v-for="(a,star3index) in 5" :key="star3index" class="fa-star" :class="(a <= getVotepopular(index)) ? 'fa-solid' : 'fa-regular'"></i>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import {store} from '../data';
import axios from 'axios';
export default {
    name:'ShowPage',
    data () {
        

        return {
            store,
        }
    },
    created() {
    this.PopularFilm();
    },
    methods:{
      getVotepopular(index){
        return Math.ceil(this.store.popularList[index].vote_average /2);
      },
    PopularFilm(){
      const params = {
        api_key: 'c96cebdd3cf1aa616cc8c037f2623de0',};
        axios.get(store.apiUrl+'movie/popular',{params}).then((response)=>{
            
            this.store.popularList=response.data.results;
            console.log(this.store.popularList)
            
           });
       },
       
      }
     
}
</script>

<style lang="scss" scoped>

.myvideo{
    margin: 0;
    width: 100%;
}
.mymargin{
  margin-left:0 auto;
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
        background-color:red;
        color: #eeeeee;
        transform: rotateY(180deg);
      }
      img{
        width: 100%;
      }
</style>