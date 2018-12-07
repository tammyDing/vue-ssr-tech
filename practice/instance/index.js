import Vue from 'vue'

// const div = document.createElement('div')
// document.body.appendChild(div)

// new Vue({
//   // el: div,
//   el: '#root',
//   template: '<div>this is content.</div>'
// })

// 创建vue实例
// const app = new Vue({
//   template: '<div>this is {{ text }}.</div>',
//   data: {
//     text: 'text'
//   }
// })

// app.$mount('#root')

// app.text = 'mount'

const app = new Vue({
  template: '<div ref="div">this is {{ text }}, {{ obj.a }}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(newText, oldText)
  //   }
  // }
})

app.$mount('#root')

// setInterval(() => {
//   // app.text += 1
//   // app.$options.data.text += 1
//   // app.$data.text += 1
//   // app.text 与app.$data.text相同
// }, 1000)

// let i = 0
// setInterval(() => {
//   i++
//   app.obj.a = i
//   // 强制重新渲染
//   app.$forceUpdate()
// }, 1000)

// let i = 0
// setInterval(() => {
//   i++
//   // 重新设置值
//   app.$set(app.obj, 'a', i)
// }, 1000)

/**
 * 执行5次加1
 * $nextTick
*/
// setInterval(() => {
//   app.text += 1
//   app.text += 1
//   app.text += 1
//   app.text += 1
//   app.text += 1
// }, 1000)

// 使用$nextTick()
setInterval(() => {
  app.$nextTick(() => {
    app.text += 1
  })
}, 1000)

// console.log(app.$data, app.$props)
// console.log(app.$el, app.$options)

// 重新进行渲染
// app.$options.render = (h) => {
//   return h('div', 'new render function')
// }

// console.log(app.$root === app) // true

// 组件相关
// console.log(app.$children)
// console.log(app.$slots, app.$scopedSlots)

// ref快速定位某一节点，做一些HTML操作
// console.log(app.$refs)

// 服务器端渲染
// console.log(app.$isServer)

// 监听text值变化, 与写在new Vue对象里的一样
// app.$watch('text', (newText, oldText) => {
//   console.log(`${newText}, ${oldText}`)
// })

/**
 * watch没用的时候注销掉，否则会导致内存溢出
 * 注销watch的方法
 */
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText}, ${oldText}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)

// 事件监听
// app.$on('view', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

// app.$emit('view', 1, 2)

// 每隔一秒钟执行一次
// setInterval(() => {
//   app.$emit('view', 1, 2)
// }, 1000)

// 只执行一次
// app.$once('view', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

// 使用once只执行一次
// setInterval(() => {
//   app.$emit('view', 1, 2)
// }, 1000)
