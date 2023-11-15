<template>
    <div class="maincolor">
      <div class="container">
         <div class="row">
            <div class="col-6 col-md-3" v-for="(movie,index) in store.movieList" :key=movie.id>
                a
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
</style>