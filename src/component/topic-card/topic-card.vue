<template>
    <article class="topic-card-widget is-full-height is-full-width">
        <div>
            <header>
                <i></i>
            </header>
            <section>
                <img class="cover" :src="topic.cover">
            </section>
            <footer class="use-flex is-justify-between">
                <div style="overflow: hidden">
                    <p class="topic no-wrap" v-text="topic.name"></p>
                    <div class="subtopic">
                        <span class="total">共{{subTopic.total}}集</span>
                        <span class="progress">完成度: {{subTopic.completed}}</span>
                    </div>
                </div>
                <div class="debug1">
                    <button @click="onCheckEv">查看详情</button>
                </div>
            </footer>
        </div>
    </article>
</template>

<script>
  export default {
    name: "topic-card",
    props: {
      topic: {
        type: Object,
        default: () => ({
          name: '..',
          level: '..',
          cover: '',
        })
      },
      subTopic: {
        type: Object,
        default: () => ({total: '..', completed: '..'})
      }
    },
    methods: {
      onCheckEv() {
        this.$emit('opencard')
      }
    }
  }
</script>

<style lang="scss">
    /*@import "topic-card";*/
    .topic-card-widget {
        min-width: 50px;
        min-height: 50px;

        overflow: hidden;
        border-radius: 18px;
        box-shadow: 0 10px 30px rgba(0,0,0,.1);

        section {
            width: 100%;
            height: 186px;

            .cover {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }

        footer {
            padding: 15px;
            height: 66px;
            background-color: #fff;

            .topic {
                font-size: 18px;
                margin-bottom: 5px;
            }

            .subtopic {
                font-size: 12px;
            }

            button {
                width: 94px;
                height: 38px;
                color: #fff;
                border-radius: 25px;
                background-color: orangered;
            }
        }
    }
</style>