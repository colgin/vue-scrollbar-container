(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],r=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},n={app:0},o=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-scrollbar-container/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0554":function(t,e,i){var r=i("96a4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("17611838",r,!0,{sourceMap:!1,shadowMode:!1})},"0fe8":function(t,e,i){var r=i("7956");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("8f90387c",r,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"operator"},[i("div",{staticClass:"button-group"},[i("span",[t._v("add / remove data")]),i("button",{on:{click:t.addTen}},[t._v("add ten")]),i("button",{on:{click:t.delTen}},[t._v("del ten")])]),i("div",{staticClass:"button-group"},[i("span",[t._v("change list width")]),i("button",{on:{click:t.addWidth}},[t._v("add width")]),i("button",{on:{click:t.reduceWidth}},[t._v("reduce width")])])]),i("div",{staticClass:"area"},[i("ScrollbarContainer",[i("ul",{style:t.ulStyle},t._l(t.list,(function(e,r){return i("li",{key:r},[t._v(t._s(e))])})),0)])],1)])},o=[],a=(i("99af"),i("cb29"),i("d81d"),i("a434"),i("2909")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"scroll-container",on:{mouseenter:function(){return t.focus=!0},mouseleave:function(){return t.focus=!1}}},[i("div",{ref:"wrap",staticClass:"scroll-area",on:{scroll:t.onAreaScroll}},[t._t("default")],2),t.showScrollY?i("VerticalScrollbar",{staticClass:"vue-scroller-container_y",style:t.scrollbarYStyle,attrs:{slide:t.verticalSlideHeight,size:t.trackSize,move:t.moveY,hide:t.hideScrollbar,throttle:t.throttle},on:{change:t.onSlideYChange}}):t._e(),t.showScrollX?i("HorizontalScrollbar",{staticClass:"vue-scroller-container_x",style:t.scrollbarXStyle,attrs:{slide:t.horizontalSlideWidth,size:t.trackSize,move:t.moveX,hide:t.hideScrollbar,throttle:t.throttle},on:{change:t.onSlideXChange}}):t._e()],1)},c=[],l=(i("caad"),i("a9e3"),i("84a2")),h=i.n(l),d=i("eec4"),u=i.n(d),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"track",staticClass:"vue-scroller-container_track",style:t.trackStyle,on:{click:t.handleTrackClick,wheel:t.handleTrackScroll}},[i("div",{staticClass:"vue-scroller-container_slidey vue-scroller-container_slide",style:t.slideStyle,on:{mousedown:t.startDrag}})])},p=[],v={name:"VerticalScrollbar",props:{move:Number,slide:Number,size:Number,hide:Boolean,throttle:Number},data:function(){return{top:0,trackPosition:{x:0,y:0},trackHeight:0,draging:!1}},computed:{trackStyle:function(){return{borderRadius:"".concat(this.size/2,"px"),width:"".concat(this.size,"px"),opacity:this.hide&&!this.draging?0:1}},slideStyle:function(){return{borderRadius:"".concat(this.size/2,"px"),height:"".concat(this.slide,"px"),transform:"translateY(".concat(this.move,"px)")}}},methods:{handleTrackClick:function(t){var e=t.clientY-this.trackPosition.y;this.$emit("change",this.calculate(e))},calculate:function(t){return t<this.slide/2?t=0:t>this.trackHeight-this.slide/2?t=this.trackHeight-this.slide:t-=this.slide/2,t},handleDragSlide:function(t){if(this.draging){var e=this.calculate(t.clientY-this.trackPosition.y);this.$emit("change",e),t.preventDefault(),t.stopPropagation()}},startDrag:function(){this.draging=!0,document.addEventListener("mousemove",this.handleDragSlide),document.addEventListener("touchmove",this.handleDragSlide),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},stopDrag:function(){this.draging=!1,document.removeEventListener("mousemove",this.handleDragSlide),document.removeEventListener("touchmove",this.handleDragSlide),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}},created:function(){var t=this;this.handleTrackScroll=h()((function(e){t.$emit("change",t.move+e.deltaY)}),this.throttle)},mounted:function(){var t=this.$refs.track.getBoundingClientRect(),e=t.x,i=t.y;this.trackPosition.x=e,this.trackPosition.y=i,this.trackHeight=this.$el.offsetHeight}},g=v,m=(i("5fe5"),i("2877")),b=Object(m["a"])(g,f,p,!1,null,"45a59b86",null),S=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"track",staticClass:"vue-scroller-container_track",style:t.trackStyle,on:{click:t.handleTrackClick,wheel:t.handleTrackScroll}},[i("div",{staticClass:"vue-scroller-container_slidex vue-scroller-container_slide",style:t.slideStyle,on:{mousedown:t.startDrag}})])},k=[],x={name:"HorizontalScrollbar",props:{move:Number,slide:Number,size:Number,hide:Boolean,throttle:Number},data:function(){return{top:0,trackPosition:{x:0,y:0},trackWidth:0,draging:!1}},computed:{trackStyle:function(){return{borderRadius:"".concat(this.size/2,"px"),height:"".concat(this.size,"px"),opacity:this.hide&&!this.draging?0:1}},slideStyle:function(){return{borderRadius:"".concat(this.size/2,"px"),height:"100%",width:"".concat(this.slide,"px"),transform:"translateX(".concat(this.move,"px)")}}},methods:{handleTrackClick:function(t){var e=t.clientX-this.trackPosition.x;this.$emit("change",this.calculate(e))},calculate:function(t){return t<this.slide/2?t=0:t>this.trackWidth-this.slide/2?t=this.trackWidth-this.slide:t-=this.slide/2,t},handleDragSlide:function(t){if(this.draging){var e=this.calculate(t.clientX-this.trackPosition.x);this.$emit("change",e),t.preventDefault(),t.stopPropagation()}},startDrag:function(){this.draging=!0,document.addEventListener("mousemove",this.handleDragSlide),document.addEventListener("touchmove",this.handleDragSlide),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},stopDrag:function(){this.draging=!1,document.removeEventListener("mousemove",this.handleDragSlide),document.removeEventListener("touchmove",this.handleDragSlide),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}},created:function(){var t=this;this.handleTrackScroll=h()((function(e){t.$emit("change",t.move+e.deltaY)}),this.throttle)},mounted:function(){var t=this.$refs.track.getBoundingClientRect(),e=t.x,i=t.y;this.trackPosition.x=e,this.trackPosition.y=i,this.trackWidth=this.$el.offsetWidth}},w=x,_=(i("9c07"),Object(m["a"])(w,y,k,!1,null,"e15a4d6a",null)),z=_.exports,H={name:"ScrollContainer",components:{VerticalScrollbar:S,HorizontalScrollbar:z},props:{size:{type:[Number,String],default:"normal",validator:function(t){return["thick","normal","thin"].includes(t)||"number"===typeof t}},autoHide:Boolean,hideVertical:Boolean,hideHorizontal:Boolean,throttle:{type:[Number],default:16}},data:function(){return{focus:!1,top:0,left:0,containerHeight:0,containerWidth:0,scrollAreaWidth:0,scrollAreaHeight:0}},computed:{showScrollY:function(){return this.scrollAreaHeight>this.containerHeight+15&&!this.hideVertical},showScrollX:function(){return this.scrollAreaWidth>this.containerWidth+15&&!this.hideHorizontal},scrollbarYStyle:function(){return this.scrollAreaWidth<this.containerWidth+15?{left:"".concat(this.scrollAreaWidth-this.trackSize,"px")}:{right:0}},scrollbarXStyle:function(){return this.scrollAreaHeight<this.containerHeight+15?{top:"".concat(this.scrollAreaHeight-this.trackSize,"px")}:{bottom:0}},hideScrollbar:function(){return this.autoHide&&!this.focus},verticalSlideHeight:function(){return Math.max(this.containerHeight*this.containerHeight/this.scrollAreaHeight,this.trackSize)},horizontalSlideWidth:function(){return Math.max(this.containerWidth*this.containerWidth/this.scrollAreaWidth,this.trackSize)},moveY:function(){return this.top*(this.containerHeight-this.verticalSlideHeight)/this.maxTop},moveX:function(){return this.left*(this.containerWidth-this.horizontalSlideWidth)/this.maxLeft},trackSize:function(){return["thick","normal","thin"].includes(this.size)?{thick:20,normal:15,thin:10}[this.size]:this.size},maxTop:function(){return this.scrollAreaHeight-this.containerHeight},maxLeft:function(){return this.scrollAreaWidth-this.containerWidth}},methods:{onAreaScroll:h()((function(t){var e=t.target;this.top=e.scrollTop,this.left=e.scrollLeft}),16),onSlideYChange:function(t){var e=t*(this.scrollAreaHeight-this.containerHeight)/(this.containerHeight-this.verticalSlideHeight);this.scrollTo(this.left,e)},onSlideXChange:function(t){var e=t*(this.scrollAreaWidth-this.containerWidth)/(this.containerWidth-this.horizontalSlideWidth);this.scrollTo(e,this.top)},scrollTo:function(t,e){var i=this.getSafePosition(t,e),r=i.left,n=i.top;this._safeScrollTo(r,n)},scrollBy:function(t,e){var i=this.getSafePosition(this.left+t,this.top+e),r=i.left,n=i.top;this._safeScrollTo(r,n)},_safeScrollTo:function(t,e){this.left=t,this.top=e,this.$refs.wrap.scrollTop=e,this.$refs.wrap.scrollLeft=t},getSafePosition:function(t,e){return e<0?e=0:e>this.maxTop&&(e=this.maxTop),t<0?t=0:t>this.maxLeft&&(t=this.maxLeft),{left:t,top:e}},getDomSize:function(){var t=this.$refs.wrap,e=t.firstElementChild,i=this.$el.getBoundingClientRect(),r=i.height,n=i.width,o=e.getBoundingClientRect(),a=o.height,s=o.width;this.containerHeight=r,this.containerWidth=n,this.scrollAreaHeight=a,this.scrollAreaWidth=s},setupResizeObserver:function(t){var e=this,i=u()();i.listenTo(t,(function(){e.getDomSize()}))}},mounted:function(){var t=this.$slots.default[0].elm;this.setupResizeObserver(t)}},C=H,W=(i("bc69"),Object(m["a"])(C,s,c,!1,null,"71c47c7a",null)),D=W.exports,T=[].concat(Object(a["a"])(new Array(26).fill(0).map((function(t,e){return e+65}))),Object(a["a"])(new Array(26).fill(0).map((function(t,e){return e+97})))),A={name:"App",components:{ScrollbarContainer:D},data:function(){return{list:new Array(50).fill(0).map((function(t,e){return e})),width:415}},computed:{ulStyle:function(){return{width:"".concat(this.width,"px")}}},methods:{addTen:function(){this.list=this.list.concat(new Array(9).fill(0).map(this.getRandomChar))},delTen:function(){this.list.splice(-10)},addWidth:function(){this.width+=10},reduceWidth:function(){this.width-=10},getRandomChar:function(){return String.fromCharCode(T[Math.floor(52*Math.random())])}}},L=A,P=(i("5c0b"),Object(m["a"])(L,n,o,!1,null,null,null)),E=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var r=i("0554"),n=i.n(r);n.a},"5fe5":function(t,e,i){"use strict";var r=i("7c43"),n=i.n(r);n.a},7956:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".vue-scroller-container_track[data-v-e15a4d6a]{transition:opacity .5s}.vue-scroller-container_slide[data-v-e15a4d6a],.vue-scroller-container_track[data-v-e15a4d6a]{background-color:hsla(0,0%,51%,.65)}.vue-scroller-container_slidex[data-v-e15a4d6a]{height:100%}",""]),t.exports=e},"7c43":function(t,e,i){var r=i("8b7e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("0efb88eb",r,!0,{sourceMap:!1,shadowMode:!1})},"8b7e":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".vue-scroller-container_track[data-v-45a59b86]{transition:opacity .5s}.vue-scroller-container_slide[data-v-45a59b86],.vue-scroller-container_track[data-v-45a59b86]{background-color:hsla(0,0%,51%,.65)}.vue-scroller-container_slidey[data-v-45a59b86]{width:100%}",""]),t.exports=e},"96a4":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}*{padding:0;margin:0}.operator,.operator .button-group{margin-bottom:1em}.operator .button-group button{padding:.5em .75em;border-radius:4px;margin-right:.5em}.area{margin:0 auto;width:400px;height:500px}ul{list-style:none}li{background-color:#ccc}",""]),t.exports=e},"9c07":function(t,e,i){"use strict";var r=i("0fe8"),n=i.n(r);n.a},b25e:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".scroll-container[data-v-71c47c7a]{position:relative;height:100%;overflow:hidden}.scroll-area[data-v-71c47c7a]{height:calc(100% + 15px);width:calc(100% + 15px);overflow-y:scroll;overflow-x:scroll}.vue-scroller-container_y[data-v-71c47c7a]{position:absolute;top:0;bottom:0}.vue-scroller-container_x[data-v-71c47c7a]{position:absolute;left:0;right:0;bottom:0}",""]),t.exports=e},bc69:function(t,e,i){"use strict";var r=i("e8da"),n=i.n(r);n.a},e8da:function(t,e,i){var r=i("b25e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("5b03f40c",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.cf9114d6.js.map