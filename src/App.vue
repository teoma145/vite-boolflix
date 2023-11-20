<template>
    <div>
      <InitPage :class="{ 'd-none': Websiteshow }" @go-website="VaiSito"/>
      <HeadComponent :class="{ 'd-none': !Websiteshow }" @search="GetMoviesAndSeries"/>
    </div>
    <div>
        <ShowPage :class="{ 'd-none': !Websiteshow }"/>
        <MainComponent :class="{ 'd-none': !Websiteshow }"/>
    </div>
</template>

<script>

import {store} from './data';
import HeadComponent from './components/HeadComponent.vue';
import InitPage from './components/InitPage.vue'
import MainComponent from './components/MainComponent.vue';
import ShowPage from './components/ShowPage.vue'
import axios from 'axios';
export default {
    name:'App',
    components:{
     HeadComponent,
     MainComponent,
     ShowPage,
     InitPage,
    },
    data () {
        

        return {
            store,
            Websiteshow:false,
        }
    },
    methods:{
          VaiSito(){
           this.Websiteshow=true
          },
          GetMoviesAndSeries(){
           const movieurl= this.store.apiUrl + this.store.endPoint.movies;
            axios.get(movieurl,{params:this.store.params}).then((response)=>{
            console.log(response.data.results);
            this.store.movieList=response.data.results;
            console.log(this.store.movieList)
           });
           const tvurl= this.store.apiUrl + this.store.endPoint.series;
           axios.get(tvurl,{params:this.store.params}).then((response)=>{
            console.log(response.data.results);
            this.store.seriesList=response.data.results;
           })
        
        }
    },
    created(){
        
    },
}
</script>

<style lang="scss" scoped>

</style>