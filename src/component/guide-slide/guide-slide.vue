<template>
    <div class="guide-slide-widget is-full-height debug">
        <ul v-gesture.swipe="onSwipeEv" class="is-full-height">
            <li v-for="slide in data" class="is-full-height">
                <div class="is-full-height"
                     :style="`background-image: url(${slide.imageUrl})`"></div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "guide-slide",
    props: {
      data: {
        type: Array,
        default: () => []
      },
      delay: {
        type: Number,
        default: () => 0,
      }
    },
    methods: {
      onSwipeEv(ev) {
        if (ev.direction === "DIRECTION_LEFT") {
          this.$emit('swipeleft')
          return
        }

        if (ev.direction === 'DIRECTION_RIGHT') {
          this.$emit('swiperight')
        }
      },
    }
  }
</script>

<style scoped lang="scss">
    .guide-slide-widget {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>