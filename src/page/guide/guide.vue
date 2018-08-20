<template>
    <div class="guide-page">
        <article class="guide-slide">
            <Slide :data="guideSlides" @swipeleft="onSwipeLeftEv" @swiperight="onSwipeRightEv"></Slide>
        </article>
    </div>
</template>

<script>
  import Slide from '../../component/guide-slide/guide-slide'

  export default {
    name: "guide",
    components: {Slide},
    data() {
      return {
        guideSlides: []
      }
    },
    methods: {
      onSwipeLeftEv() {
        alert(1)
      },
      onSwipeRightEv() {
        alert(2)
      }

    },
    beforeCreate() {
      this.$fetch['practice/guide']().then(res => {
        console.log(res)
        this.guideSlides = res.data
      })
    }
  }
</script>

<style scoped lang="scss">
    .guide-page {
        .guide-slide {
            width: 100vw;
            height: 100vh;
            background-color: black;
        }
    }
</style>