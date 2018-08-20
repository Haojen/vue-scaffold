<template>
    <div class="subtopic-page">
        <ul>
            <li class="is-full-width" v-for="subtopic in subtopicList">
                <Subtopic-card :name="subtopic.title"
                               :cover="subtopic.cover"
                               :lock-state="subtopic.completed"
                               @opencard="onOpenCardEv">
                </Subtopic-card>
            </li>
        </ul>
    </div>
</template>

<script>
  import SubtopicCard from '../../component/subtopic-card/subtopic-card'
  export default {
    name: "subtopic",
    components: {SubtopicCard},
    data() {
      return {
        subtopicList: [],
      }
    },
    methods: {
      onOpenCardEv({lockState}) {
        // is locked
        if (lockState) {
          this.$router.push({name: 'guide'})
        }
      }
    },
    beforeCreate() {
      this.$fetch['subtopic/list']().then(res => {
        console.log(res, 'subtopiclist')
        res.data[0].completed = true // Default always is TRUE
        this.subtopicList = res.data
      })
    }
  }
</script>

<style lang="scss" scoped>
    .subtopic-page {
        padding: 25px 16px;

        li {
            height: 120px;
            overflow: hidden;
            border-radius: 6px;
            margin-bottom: 16px;
        }
    }
</style>