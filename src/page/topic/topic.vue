<template>
    <div class="topic-page">
        <ul class="topic-card-list">
            <li v-for="topic in topicList">
                <Topic-card :topic="{name:topic.name, level: topic.difficult, cover: topic.cover}"
                            :sub-topic="topic.progress" @opencard="onOpenCardEv"></Topic-card>
            </li>
        </ul>
    </div>
</template>

<script>
  import TopicCard from '../../component/topic-card/topic-card'
  export default {
    name: "topic",
    data() {
      return {
        // Entry data
        topicList: [],
      }
    },
    components: {
      TopicCard
    },
    methods: {
      onOpenCardEv() {
        this.$router.push({name: 'subtopic'})
      }
    },
    beforeCreate() {
      this.$fetch['topic/list']().then(res => {
        this.topicList = res.data

        this.$fetch['topic/progress']().then(res => {
          this.topicList = this.topicList.map( topicItem => {
            topicItem.progress = res.data[topicItem.id] || res.data['1']
            return topicItem
          })
        })
      })
    }
  }
</script>

<style scoped lang="scss">
    .topic-page {
        padding: 25px 16px;
        .topic-card-list {
            width: 100%;
            height: 254px;
            >li {
                height: 100%;
                margin-bottom: 26px;
            }
        }
    }
</style>