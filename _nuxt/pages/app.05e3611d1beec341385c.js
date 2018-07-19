webpackJsonp([0],{"+mn3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("iM5m"),a=i("IgrI"),r=!1;var s=function(t){r||i("yJ81")},n=i("VU/8")(o.a,a.a,!1,s,null,null);n.options.__file="pages/app.vue",e.default=n.exports},"6EMt":function(t,e,i){"use strict";e.a={name:"PictoAppPreview",mixins:[],extends:{},props:[],data:function(){return{}},computed:{},components:{},watch:{},methods:{accept:function(){console.log(this.$store.state.filter.active),this.$store.dispatch("log/event",{type:"upload",img:{base64:this.$refs.canvas.toDataURL(),class:this.$store.getters.filter,preset:this.$store.state.filter.active}}),this.$emit("close")},draw:function(t){this.$refs.canvas.getContext("2d").drawImage(t,0,0,720,1280)},reject:function(){this.$emit("close")},swipe:function(t){switch(t){case"L":this.$store.commit("FILTER_NEXT"),this.$store.dispatch("audio/nextPreset");break;case"R":this.$store.commit("FILTER_PREV"),this.$store.dispatch("audio/prevPreset")}}},beforeCreate:function(){},mounted:function(){}}},IgrI:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe("L")},right:function(){return t.swipe("R")}},expression:"{ left: () => swipe('L'), right: () => swipe('R') }"}],attrs:{id:"picto-app"}},[i("v-dialog",{attrs:{"max-width":"750px"},model:{value:t.preview,callback:function(e){t.preview=e},expression:"preview"}},[i("picto-app-preview",{ref:"preview",on:{close:function(e){t.preview=!1}}})],1),i("div",{class:t.$store.getters.filter},[i("video",{ref:"camera",attrs:{autoplay:"",muted:""},domProps:{muted:!0}})]),i("picto-app-controls",{attrs:{muted:t.muted},on:{capture:t.capture,mute:function(e){t.muted=!t.muted}}})],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},Nyxx:function(t,e,i){var o=i("g2SB");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("56a2dc22",o,!1,{sourceMap:!1})},O9HH:function(t,e,i){var o=i("U3zp");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("cb0e67b0",o,!1,{sourceMap:!1})},U3zp:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#picto-app-preview{height:auto}#picto-app-preview canvas{max-height:70vh;width:100%}",""])},UCmC:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#picto-app{height:100vh;overflow:hidden}#picto-app video{height:100vh;-o-object-fit:cover;object-fit:cover;width:100vw}",""])},WNKc:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe("L")},right:function(){return t.swipe("R")}},expression:"{\n  left: () => swipe('L'), \n  right: () => swipe('R') \n}"}],attrs:{id:"picto-app-preview"}},[i("v-card-text",[i("figure",{class:t.$store.getters.filter},[i("canvas",{ref:"canvas",attrs:{width:"720",height:"1280"}})]),i("v-layout",{attrs:{row:"","justify-end":""}},[i("v-flex",{attrs:{xs2:""}},[i("v-btn",{attrs:{flat:"",icon:"",color:"error"},on:{click:function(e){return e.stopPropagation(),t.reject(e)}}},[i("v-icon",[t._v("clear")])],1)],1),i("v-flex",{attrs:{xs2:""}},[i("v-btn",{attrs:{flat:"",icon:"",color:"success"},on:{click:function(e){return e.stopPropagation(),t.accept(e)}}},[i("v-icon",[t._v("check")])],1)],1)],1)],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},g2SB:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#picto-app-controls .mute{left:75vw;top:2.5%}#picto-app-controls .camera,#picto-app-controls .mute{position:absolute;right:0;margin-left:auto;margin-right:auto}#picto-app-controls .camera{left:0;bottom:5%}#picto-app-controls .fab{left:75vw;right:0}#picto-app-controls .data,#picto-app-controls .fab{position:absolute;margin-left:auto;margin-right:auto;bottom:2.5%}#picto-app-controls .data{left:0;right:75vw}",""])},iM5m:function(t,e,i){"use strict";var o=i("kRDE"),a=i("vfCu"),r=(i("hn4U"),i("vW7a"));e.a={name:"",mixins:[],extends:{},props:{},data:function(){return{constraints:{audio:!0,video:{facingMode:"environment"}},muted:!1,preview:!1,stream:null,timeoutID:0}},computed:{},components:{PictoAppControls:o.a,PictoAppPreview:a.a},watch:{muted:function(){this.muted?this.$store.dispatch("audio/mute"):this.$store.dispatch("audio/unmute")},preview:function(){this.preview?this.$refs.camera.pause():this.$refs.camera.play()}},methods:{analyse:function(){var t=this,e=Object(r.a)(document.querySelector("video"));this.$store.dispatch("audio/rgb",e),this.timeoutID=setTimeout(function(){return t.analyse()},500)},capture:function(){this.preview=!0,this.$store.dispatch("log/event",{type:"capture"}),this.$refs.preview.draw(this.$refs.camera)},swipe:function(t){switch(t){case"L":this.$store.commit("FILTER_NEXT"),this.$store.dispatch("audio/nextPreset");break;case"R":this.$store.commit("FILTER_PREV"),this.$store.dispatch("audio/prevPreset")}}},beforeCreate:function(){},mounted:function(){var t=this;this.muted=!1,this.$store.commit("FILTER_RESET"),navigator.mediaDevices.getUserMedia(this.constraints).then(function(e){t.stream=e,t.$refs.camera.srcObject=t.stream,t.timeoutID=setTimeout(function(){return t.analyse()},500),t.$store.getters.audio.isActive()?(t.$store.dispatch("audio/resetPreset"),t.$store.dispatch("audio/focus")):t.$store.dispatch("audio/init")}).catch(function(t){return console.log(t)})},beforeDestroy:function(){this.timeoutID&&clearTimeout(this.timeoutID),this.stream&&this.stream.getTracks().forEach(function(t){return t.stop()}),this.$store.getters.audio.isActive()&&this.$store.dispatch("audio/blur")}}},kRDE:function(t,e,i){"use strict";var o=i("zFq5"),a=i("nWex"),r=!1;var s=function(t){r||i("Nyxx")},n=i("VU/8")(o.a,a.a,!1,s,null,null);n.options.__file="components/PictoApp/Controls.vue",e.a=n.exports},nWex:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"picto-app-controls"}},[i("v-btn",{staticClass:"mute",attrs:{fab:""},on:{click:function(e){return e.stopPropagation(),t.mute(e)}}},[i("v-icon",[t._v(t._s(t.muted?"volume_up":"volume_off"))])],1),i("v-btn",{staticClass:"camera",attrs:{large:"",fab:""},on:{click:function(e){return e.stopPropagation(),t.capture(e)}}},[i("v-icon",{attrs:{large:""}},[t._v("camera")])],1),i("v-btn",{staticClass:"data",attrs:{fab:"",nuxt:"",to:"/data"}},[i("v-icon",[t._v("bar_chart")])],1),i("v-speed-dial",{staticClass:"fab",attrs:{direction:"top"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[i("v-btn",{staticClass:"fab-activator",attrs:{slot:"activator",fab:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[i("v-icon",[t._v("photo_library")]),i("v-icon",[t._v("close")])],1),i("v-btn",{attrs:{fab:"",nuxt:"",to:"/feed"}},[i("v-icon",[t._v("photo_album")])],1),i("v-btn",{attrs:{fab:"",nuxt:"",to:"/art"}},[i("v-icon",[t._v("brush")])],1)],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},vW7a:function(t,e,i){"use strict";e.a=function(t){var e=document.createElement("canvas"),i=e.getContext("2d"),o=e.height=1280,a=e.width=720,r={r:0,g:0,b:0,brightness:0};i.drawImage(t,0,0,a,o);for(var s=i.getImageData(0,0,a,o).data,n=0,c=0,u=0;u<s.length;u+=20)r.r+=s[u],r.g+=s[u+1],r.b+=s[u+2],c=~~((r.r+r.b+r.g)/3),n++;return r.r=~~(r.r/n||1),r.g=~~(r.g/n||1),r.b=~~(r.b/n||1),r.brightness=c/n,r}},vfCu:function(t,e,i){"use strict";var o=i("6EMt"),a=i("WNKc"),r=!1;var s=function(t){r||i("O9HH")},n=i("VU/8")(o.a,a.a,!1,s,null,null);n.options.__file="components/PictoApp/Preview.vue",e.a=n.exports},yJ81:function(t,e,i){var o=i("UCmC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("8ad12556",o,!1,{sourceMap:!1})},zFq5:function(t,e,i){"use strict";e.a={name:"PictoAppControls",mixins:[],extends:{},props:["muted"],data:function(){return{fab:!1}},computed:{},components:{},watch:{},methods:{capture:function(){this.$emit("capture")},mute:function(){this.$emit("mute")}},beforeCreate:function(){},mounted:function(){}}}});