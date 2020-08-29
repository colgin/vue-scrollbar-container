<template>
  <div id="app">
    <div class="operator">
      <div class="button-group">
        <span>add / remove data</span>
        <button @click="addTen">add ten</button>
        <button @click="delTen">del ten</button>
      </div>
      <div class="button-group">
        <span>change list width</span>
        <button @click="addWidth">add width</button>
        <button @click="reduceWidth">reduce width</button>
      </div>
    </div>
    <div class="area">
      <ScrollbarContainer>
        <ul :style="ulStyle">
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </ScrollbarContainer>
    </div>
  </div>
</template>

<script>
import ScrollbarContainer from './components/ScrollbarContainer'

// ascii code of a-z A-Z
const charCode = [
  ...new Array(26).fill(0).map((_, i) => i + 65),
  ...new Array(26).fill(0).map((_, i) => i + 97)
]

export default {
  name: 'App',
  components: {
    ScrollbarContainer
  },
  data() {
    return {
      list: new Array(50).fill(0).map((_, i) => i),
      width: 415
    }
  },
  computed: {
    ulStyle() {
      return { width: `${this.width}px` }
    }
  },
  methods: {
    addTen() {
      this.list = this.list.concat(new Array(9).fill(0).map(this.getRandomChar))
    },
    delTen() {
      this.list.splice(-10)
    },
    addWidth() {
      this.width += 10
    },
    reduceWidth() {
      this.width -= 10
    },
    getRandomChar() {
      return String.fromCharCode(charCode[Math.floor(Math.random() * 52)])
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  padding: 0;
  margin: 0;
}
.operator {
  margin-bottom: 1em;
  .button-group {
    margin-bottom: 1em;
    button {
      padding: 0.5em 0.75em;
      border-radius: 4px;
      margin-right: 0.5em;
    }
  }
}
.area {
  margin: 0 auto;
  width: 400px;
  height: 500px;
}
ul {
  list-style: none;
}
li {
  background-color: #ccc;
}
</style>
