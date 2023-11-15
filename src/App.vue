<template>
    <div>
      <HeadComponent/>
    </div>
    <div>
        <MainComponent/>
    </div>
</template>

<script>

import {store} from './data';
import HeadComponent from './components/HeadComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
export default {
    name:'App',
    components:{
     HeadComponent,
     MainComponent,
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
           });
           const tvurl= this.store.apiUrl + this.store.endPoint.series;
           axios.get(tvurl,{params:this.store.params}).then((response)=>{
            console.log(response.data.results);
            this.store.seriesList=response.data.results;
           })
        
        }
    },
    created(){
        this.GetMoviesAndSeries()
    },
}
</script>

<style lang="scss" scoped>

</style>