import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  render (h) {
    throw new TypeError('render function')
    // console.log('render function invoked.')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  activated () { // 组件章节讲解
    console.log('activated')
  },
  deactivated () { // 组件章节讲解
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
})

/**
 * 没有指定el属性，只监听到beforeCreate和created
 * beforeMount, mounted挂载到el属性上的
 * beforeCreate created周期上this.$el === undefined,即拿不到DOM节点，不能在些时进行DOM操作
 * beforeMount this.$el => <div id="root"></div>
 * mounted this.$el => <div></div> template渲染成功
 * 总结：与DOM有关的操作放到mounted里面，与数据有关的操作放到create或mounted里面
*/

app.$mount('#root')

/**
 * beforeUpdate 与 updated执行的时机，data改变时执行
 */
// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

/** 在app销毁的时候执行
 * beforeDestroy 与 destroyed执行的时机
 */
setTimeout(() => {
  app.$destroy()
}, 1000)
