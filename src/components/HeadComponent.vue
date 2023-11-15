<template>
    <div class="d-flex justify-content-between text-bg-dark">
        <div>
            <h1 class="text-danger ">BOOFLIX</h1>
        </div>
        <div class="mt-2 me-2">
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
        this.store.query=this.textsearch;
        console.log(this.store.query)
        this.$emit('search',)
        }
      },
      
    }
}
</script>

<style lang="scss" scoped>

</style>