<template>
  <div
    :style="trackStyle"
    class="vue-scroller-container_track"
    ref="track"
    @click="handleTrackClick"
    @wheel="handleTrackScroll"
  >
    <div
      :style="slideStyle"
      class="vue-scroller-container_slidex vue-scroller-container_slide"
      @mousedown="startDrag"
    ></div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'HorizontalScrollbar',
  props: {
    move: Number,
    slide: Number, // slide width
    size: Number,
    hide: Boolean,
    throttle: Number
  },
  data() {
    return {
      top: 0,

      trackPosition: {
        x: 0,
        y: 0
      },

      trackWidth: 0,
      draging: false
    }
  },
  computed: {
    trackStyle() {
      return {
        borderRadius: `${this.size / 2}px`,
        height: `${this.size}px`,
        opacity: this.hide && !this.draging ? 0 : 1
      }
    },
    slideStyle() {
      return {
        borderRadius: `${this.size / 2}px`,
        height: '100%',
        width: `${this.slide}px`,
        transform: `translateX(${this.move}px)`
      }
    }
  },
  methods: {
    handleTrackClick(event) {
      let offset = event.clientX - this.trackPosition.x
      this.$emit('change', this.calculate(offset))
    },
    calculate(offset) {
      if (offset < this.slide / 2) {
        offset = 0
      } else if (offset > this.trackWidth - this.slide / 2) {
        offset = this.trackWidth - this.slide
      } else {
        offset = offset - this.slide / 2
      }
      return offset
    },
    // handleTrackScroll: throttle(function (event) {
    //   this.$emit('change', this.move + event.deltaX)
    // }, this.throttle),
    handleDragSlide(event) {
      if (!this.draging) return
      const offset = this.calculate(event.clientX - this.trackPosition.x)

      this.$emit('change', offset)
      event.preventDefault()
      event.stopPropagation()
    },
    startDrag() {
      this.draging = true

      document.addEventListener('mousemove', this.handleDragSlide)
      document.addEventListener('touchmove', this.handleDragSlide)
      document.addEventListener('mouseup', this.stopDrag)
      document.addEventListener('touchend', this.stopDrag)
    },
    stopDrag() {
      this.draging = false
      document.removeEventListener('mousemove', this.handleDragSlide)
      document.removeEventListener('touchmove', this.handleDragSlide)
      document.removeEventListener('mouseup', this.stopDrag)
      document.removeEventListener('touchend', this.stopDrag)
    }
  },
  created() {
    this.handleTrackScroll = throttle(event => {
      this.$emit('change', this.move + event.deltaY)
    }, this.throttle)
  },
  mounted() {
    const { x, y } = this.$refs.track.getBoundingClientRect()

    this.trackPosition.x = x
    this.trackPosition.y = y

    this.trackWidth = this.$el.offsetWidth
  }
}
</script>

<style scoped lang="scss">
.vue-scroller-container_track {
  background-color: rgba(130, 130, 130, 0.65);
  transition: opacity 0.5s;
}
.vue-scroller-container_slide {
  background-color: rgba(130, 130, 130, 0.65);
}
.vue-scroller-container_slidex {
  height: 100%;
}
</style>
