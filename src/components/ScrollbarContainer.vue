<template>
  <div
    class="scroll-container"
    ref="container"
    @mouseenter="() => (focus = true)"
    @mouseleave="() => (focus = false)"
  >
    <div class="scroll-area" ref="wrap" @scroll="onAreaScroll">
      <slot></slot>
    </div>

    <VerticalScrollbar
      v-if="showScrollY"
      class="vue-scroller-container_y"
      :style="scrollbarYStyle"
      :slide="verticalSlideHeight"
      :size="trackSize"
      :move="moveY"
      :hide="hideScrollbar"
      :throttle="throttle"
      @change="onSlideYChange"
    />

    <HorizontalScrollbar
      v-if="showScrollX"
      class="vue-scroller-container_x"
      :style="scrollbarXStyle"
      :slide="horizontalSlideWidth"
      :size="trackSize"
      :move="moveX"
      :hide="hideScrollbar"
      :throttle="throttle"
      @change="onSlideXChange"
    />
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import ElementResizeDetectorMaker from 'element-resize-detector'
import VerticalScrollbar from './VerticalScrollbar'
import HorizontalScrollbar from './HorizontalScrollbar'

export default {
  name: 'ScrollContainer',
  components: { VerticalScrollbar, HorizontalScrollbar },
  props: {
    size: {
      type: [Number, String],
      default: 'normal',
      validator(value) {
        return (
          ['thick', 'normal', 'thin'].includes(value) ||
          typeof value === 'number'
        )
      }
    },
    autoHide: Boolean,
    hideVertical: Boolean,
    hideHorizontal: Boolean,
    throttle: {
      type: [Number],
      default: 16
    }
  },
  data() {
    return {
      focus: false,

      top: 0,
      left: 0,

      containerHeight: 0, // 容器高度
      containerWidth: 0, // 容器宽度
      scrollAreaWidth: 0, // 滚动列表宽度
      scrollAreaHeight: 0 // 滚动列表高度
    }
  },
  computed: {
    showScrollY() {
      return (
        this.scrollAreaHeight > this.containerHeight + 15 && !this.hideVertical
      )
    },
    showScrollX() {
      return (
        this.scrollAreaWidth > this.containerWidth + 15 && !this.hideHorizontal
      )
    },
    scrollbarYStyle() {
      if (this.scrollAreaWidth < this.containerWidth + 15) {
        return {
          left: `${this.scrollAreaWidth - this.trackSize}px`
        }
      }
      return { right: 0 }
    },
    scrollbarXStyle() {
      if (this.scrollAreaHeight < this.containerHeight + 15) {
        return {
          top: `${this.scrollAreaHeight - this.trackSize}px`
        }
      }
      return {
        bottom: 0
      }
    },
    hideScrollbar() {
      return this.autoHide && !this.focus
    },
    verticalSlideHeight() {
      // this.top / this.maxTop = scrollerYTop / this.scrollerYSpace
      // scrollerYHeight / containerHeight = containerHeight / scrollAreaHeight
      return Math.max(
        (this.containerHeight * this.containerHeight) / this.scrollAreaHeight,
        this.trackSize
      )
    },
    horizontalSlideWidth() {
      // scrollerXWidth / containerWidth = containerWidth / scrollAreaWidth
      return Math.max(
        (this.containerWidth * this.containerWidth) / this.scrollAreaWidth,
        this.trackSize
      )
    },
    moveY() {
      // this.top / this.maxTop = scrollerYTop / this.scrollerYSpace
      // scrollerYHeight / containerHeight = containerHeight / scrollAreaHeight
      return (
        (this.top * (this.containerHeight - this.verticalSlideHeight)) /
        this.maxTop
      )
    },
    moveX() {
      // this.left / this.maxLeft = scrollLeft / this.scrollerXSpace
      return (
        (this.left * (this.containerWidth - this.horizontalSlideWidth)) /
        this.maxLeft
      )
    },
    trackSize() {
      if (['thick', 'normal', 'thin'].includes(this.size)) {
        return {
          thick: 20,
          normal: 15,
          thin: 10
        }[this.size]
      }
      return this.size
    },
    maxTop() {
      return this.scrollAreaHeight - this.containerHeight
    },
    maxLeft() {
      return this.scrollAreaWidth - this.containerWidth
    }
  },
  methods: {
    onAreaScroll: throttle(function(event) {
      const el = event.target
      this.top = el.scrollTop
      this.left = el.scrollLeft
    }, 16),
    onSlideYChange(offset) {
      // offset / this.maxTop = this.top / (this.scrollHeight - this.containerHeight)
      const top =
        (offset * (this.scrollAreaHeight - this.containerHeight)) /
        (this.containerHeight - this.verticalSlideHeight)
      this.scrollTo(this.left, top)
    },
    onSlideXChange(offset) {
      // offset / this.maxLeft = this.left / this.scrollWidth - this.containerWidth
      const left =
        (offset * (this.scrollAreaWidth - this.containerWidth)) /
        (this.containerWidth - this.horizontalSlideWidth)
      this.scrollTo(left, this.top)
    },
    // can be called by parent
    scrollTo(left, top) {
      const { left: newLeft, top: newTop } = this.getSafePosition(left, top)
      this._safeScrollTo(newLeft, newTop)
    },
    // can be called by parent
    scrollBy(left, top) {
      const { left: newLeft, top: newTop } = this.getSafePosition(
        this.left + left,
        this.top + top
      )
      this._safeScrollTo(newLeft, newTop)
    },
    _safeScrollTo(left, top) {
      this.left = left
      this.top = top
      this.$refs.wrap.scrollTop = top
      this.$refs.wrap.scrollLeft = left
    },
    getSafePosition(left, top) {
      if (top < 0) {
        top = 0
      } else if (top > this.maxTop) {
        top = this.maxTop
      }
      if (left < 0) {
        left = 0
      } else if (left > this.maxLeft) {
        left = this.maxLeft
      }
      return {
        left,
        top
      }
    },
    getDomSize() {
      const wrapEl = this.$refs.wrap
      const listEl = wrapEl.firstElementChild

      const {
        height: containerHeight,
        width: containerWidth
      } = this.$el.getBoundingClientRect()
      const {
        height: scrollAreaHeight,
        width: scrollAreaWidth
      } = listEl.getBoundingClientRect()

      this.containerHeight = containerHeight
      this.containerWidth = containerWidth
      this.scrollAreaHeight = scrollAreaHeight
      this.scrollAreaWidth = scrollAreaWidth
    },
    setupResizeObserver(ele) {
      const erd = ElementResizeDetectorMaker()
      erd.listenTo(ele, () => {
        this.getDomSize()
      })
    }
  },
  mounted() {
    const el = this.$slots.default[0].elm
    this.setupResizeObserver(el)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.scroll-area {
  height: calc(100% + 15px);
  width: calc(100% + 15px);
  overflow-y: scroll;
  overflow-x: scroll;
}
.vue-scroller-container_y {
  position: absolute;
  top: 0;
  bottom: 0;
}
.vue-scroller-container_x {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
