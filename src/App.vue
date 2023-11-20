<template>
    <div>
      <HeadComponent @search="GetMoviesAndSeries"/>
    </div>
    <div>
        <ShowPage/>
        <MainComponent/>
    </div>
</template>

<script>

import {store} from './data';
import HeadComponent from './components/HeadComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ShowPage from './components/ShowPage.vue'
import axios from 'axios';
export default {
    name:'App',
    components:{
     HeadComponent,
     MainComponent,
     ShowPage,
    },
    data () {
        

        return {
            store,
        }
    },
    methods:{
        
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