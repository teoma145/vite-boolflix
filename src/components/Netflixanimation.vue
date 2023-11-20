<template>
    <div>
        <video autoplay muted width="1400" class="myvideo">
        <source src="../assets/style/videos/netflixintro.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
    </div>
</template>

<script>
export default {
    name:'Netflixanimation',
    data () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.myvideo{
    margin: 0;
    width: 100%;
}
</style>