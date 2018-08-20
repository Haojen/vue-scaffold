export default {
  topic: [
    {
      name: 'list',
      method: 'GET',
      desc: 'topic 列表',
      path: '',
      mockPath: '/topiclist',
      params: {
        foo: {
          type: Object,
          required: true
        },
      }
    },
    {
      name: 'progress',
      method: 'POST',
      desc: 'topic 进度',
      path: '',
      mockPath: '/topicprogress',
      params: {
        bar: Object,
        required: true
      }
    }
  ],
  subtopic: [
    {
      name: 'list',
      method: 'GET',
      desc: 'subtopic 列表',
      path: '',
      mockPath: '/subtopiclist',
      params: {
        foo: {
          type: Object,
          required: true
        },
      }
    }
  ],
  practice: [
    {
      name: 'guide',
      method: 'GET',
      desc: '引导页',
      path: '',
      mockPath: '/introduction',
      params: {
        foo: {
          type: Object,
          required: true
        },
      }
    }
  ]
}