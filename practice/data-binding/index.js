import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>'
  },
  // template: `
  //   <div :id="main" v-on:click="handleClick">
  //     {{isActive ? 'active' : 'not active'}} => {{arr.join(' ')}}
  //     {{ html }}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  // template: `
  //   <div :class="{active:!isActive}">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  // template: `
  //   <div :class="[isActive?'active':'']">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="[{'active-a': !isActive}]">
      <p :class="className" v-html="html"></p>
    </div>
  `,
  methods: {
    handleClick () {
      alert('click') // eslint-disable-line 
    }
  },
  computed: {
    className () {
      return !this.isActive ? 'abc' : ''
    }
  }
})
