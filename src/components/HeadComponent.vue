<template>
    <div class="d-flex justify-content-between text-bg-dark flex-wrap">
        <div>
            <img src="../assets/style/images/netflix.svg" alt="" @click="goHome()">
        </div>
        <div class="mt-4 me-2">
            <input type="text" id="nome" name="nome" v-model="textsearch">
            <button @click="queryadd">invia</button>
        </div>
    </div>
</template>

<script>
import {store} from '../data'
export default {
    name:'HeadComponent',
    data () {
        

        return {
            store,
            textsearch:'',

        }
    },
    methods:{
        queryadd(){
        if (this.textsearch.trim() !== ''){
        this.store.params.query=this.textsearch;
        console.log(this.store.query)
        this.$emit('search',)
        setTimeout(() => {
        this.store.mysearched = true;
        }, 500);
        }
      },
      goHome(){
        this.store.movieList='',
        store.mysearched=false
      }
    }
}
</script>

<style lang="scss" scoped>
img{
    width: 200px;
    padding: 20px;
}
</style>