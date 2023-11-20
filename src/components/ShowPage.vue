<template>
  <div class="bg-black pb-2 "  v-if="store.movieList.length <= 0">
    
    <div class="videocontainer">
      <div class="bg-danger" v-if="store.movieList <= 0 && store.mysearched == true">
      La tua ricerca non ha prodotto risultati
     </div>
      <video controls width="1400" class="myvideo">
        <source src="../assets/style/videos/trailer.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
      <div class="mt-5 ms-5">
      <h1>I più popolari</h1>
    </div>
    </div>
    
  </div>
</template>

<script>
import {store} from '../data';
export default {
    name:'ShowPage',
    data () {
        

        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

.myvideo{
    margin: 0;
    width: 100%;
}
</style>