# vue-scrollbar-container

![NPM](https://img.shields.io/npm/l/vue-scrollbar-container)
![npm](https://img.shields.io/npm/v/vue-scrollbar-container)

> a scroll contianer component in vue

## 特性

- 支持 自定以滚动条样式
- 支持 自动隐藏滚动条
- 支持 自动监听元素宽高变化，自动调整滚动条
- 滚动条等比适应宽高

## online demo

[demo](https://colgin.github.io/vue-scrollbar-container/)

## 安装

```bash
npm install vue-scrollbar-container
```

或者

```bash
yarn add vue-scrollbar-container
```

## 使用

```html
<template>
  <div class="area">
    <ScrollContainer>
      <!-- 放置你要滚动的元素 -->
      <ul :style="ulStyle">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </ScrollContainer>
  </div>
</template>
<script>
  import ScrollbarContainer from 'vue-scrollbar-container'

  export default {
    components: { ScrollbarContainer },
    data() {
      return {
        list: new Array(50).fill(0).map((_, i) => i),
      }
    },
  }
</script>

<style>
  .area {
    width: 300px;
    height: 400px;
  }
  ul {
    list-style: none;
  }
  li {
    background-color: #ccc;
  }
</style>
```

## props

| 参数           | 说明                                                 | 类型    | 可选值     | 默认值                                   |
| -------------- | ---------------------------------------------------- | ------- | ---------- | ---------------------------------------- |
| size           | 滚动条条的大小（垂直滚动条的宽度，水平滚动条的高度） | String  | Number     | 'thick', 'normal', 'thin', or any number | 'normal' |
| autoHide       | 鼠标不在容器里，自动隐藏滚动条                       | Boolean | true/false | false                                    |
| hideVertical   | 不显示垂直滚动条                                     | Boolean | true/false | false                                    |
| hideHorizontal | 不显示水平滚动条                                     | Boolean | true/false | false                                    |
| throttle       | 滚动事件 throttle 时间                               | Number  | Number     | 16                                       |

## Development Setup

```bash
# install deps
npm install
# serve demo
npm run serve
# build lib
npm run build:lib
# build demo
npm run build:demo
```

## Licence

[MIT](http://opensource.org/licenses/MIT)
