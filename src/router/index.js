export default [
  {
    path: '/',
    name: 'topic',
    component: () => import('../page/topic/topic')
  },
  {
    path: '/subtopic',
    name: 'subtopic',
    component: () => import('../page/subtopic/subtopic')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../page/guide/guide')
  }
]