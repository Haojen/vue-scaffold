<template>
    <article class="subtopic-card-widget is-full-height is-full-width" @click="onOpenCard">
        <div class="is-full-width is-full-height use-flex is-center is-justify-between"
             :style="`background-image: url(${cover})`">
            <p v-text="name" class="no-wrap"></p>
            <button :disabled="!lockState">
                <i :class="lockState && 'unlock'"></i>
            </button>
        </div>
    </article>
</template>

<script>
  export default {
    name: "subtopic-card",
    props: {
      name: {
        type: String,
        default: () => 'Loading..'
      },
      cover: {
        type: String,
        default: () => ''
      },
      lockState: {
        type: Boolean,
        default: () => false
      }
    },
    methods: {
      onOpenCard() {
          this.$emit('opencard', {lockState: this.lockState})
      }
    }
  }
</script>

<style lang="scss">
    .subtopic-card-widget {
        > div {
            padding: 0 22px;
            background-size: cover;
            background-color: orange;
            background-repeat: no-repeat;
        }

        p {
            color: #fff;
            width: 80%;
            font-size: 22px;
        }

        button {
            width: 52px;
            height: 52px;
            overflow: hidden;
            border-radius: 50%;
            background-color: rgba(0,0,0, .5);

            i {
                display: inline-block;
                width: 100%;
                height: 100%;
                background-color: blue;

                &.unlock {
                    background-color: red;
                }
            }
        }
    }
</style>