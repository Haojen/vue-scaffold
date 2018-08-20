import Hammer from 'hammerjs'
// todo 做成手势库
export default {
  inserted(el, binding) {
    console.log(binding, 'binding')
    const {swipe, left, right, top, bottom} = binding.modifiers
    const hammer = new Hammer(el)
    const Directions =  {
      1: 'DIRECTION_NONE',
      2: 'DIRECTION_LEFT',
      4: 'DIRECTION_RIGHT',
      6: 'DIRECTION_HORIZONTAL',
      8: 'DIRECTION_UP',
      16: 'DIRECTION_DOWN',
      24: 'DIRECTION_VERTICAL',
      30: 'DIRECTION_ALL'
    }
    swipe&&hammer.on('swipe', ev => {
      ev.direction = Directions[ev.direction]
      binding.value(ev)
    })
  },
}