(this["webpackJsonpionic-realtime-pixelart"]=this["webpackJsonpionic-realtime-pixelart"]||[]).push([[0],{183:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return a}));var n=r(20),i=r(40),a=function(t,e,r,a,c){var o=t.ownerDocument.defaultView;return Object(i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/o.innerWidth;a(e)},onEnd:function(t){var e=t.deltaX,r=o.innerWidth,i=e/r,a=t.velocityX,u=r/2,s=a>=0&&(a>.2||t.deltaX>u),l=(s?1-i:i)*r,d=0;if(l>5){var h=l/Math.abs(a);d=Math.min(h,540)}c(s,i<=0?.01:Object(n.c)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=0.964f274d.chunk.js.map