(this["webpackJsonpionic-realtime-pixelart"]=this["webpackJsonpionic-realtime-pixelart"]||[]).push([[58],{130:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_menu",(function(){return h})),i.d(e,"ion_menu_button",(function(){return v})),i.d(e,"ion_menu_toggle",(function(){return y}));var n=i(0),o=i(32),r=i(5),s=i(20),a=(i(19),i(41)),c=i(40),d=i(42),u=i(175),h=function(){function t(t){Object(o.k)(this,t),this.lastOnEnd=0,this.blocker=c.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(o.d)(this),this.easing="ios"===this.mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",this.easingReverse="ios"===this.mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(o.e)(this,"ionWillOpen",7),this.ionWillClose=Object(o.e)(this,"ionWillClose",7),this.ionDidOpen=Object(o.e)(this,"ionDidOpen",7),this.ionDidClose=Object(o.e)(this,"ionDidClose",7),this.ionMenuChange=Object(o.e)(this,"ionMenuChange",7)}return t.prototype.typeChanged=function(t,e){var i=this.contentEl;i&&(void 0!==e&&i.classList.remove("menu-content-"+e),i.classList.add("menu-content-"+t),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(s.h)(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e,o,s,a=this;return Object(n.d)(this,(function(n){switch(n.label){case 0:return void 0===this.type&&(this.type=r.b.get("menuType","overlay")),t=this.el,e=t.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),(o=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))&&o.tagName?(this.contentEl=o,o.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),d.a._register(this),s=this,[4,Promise.resolve().then(i.bind(null,40))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 1:return s.gesture=n.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return a.canStart(t)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(t){return a.onMove(t)},onEnd:function(t){return a.onEnd(t)}}),this.updateState(),[2]}}))}))},t.prototype.componentDidLoad=function(){return Object(n.b)(this,void 0,void 0,(function(){return Object(n.d)(this,(function(t){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]}))}))},t.prototype.disconnectedCallback=function(){this.blocker.destroy(),d.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&(!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close()))},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),d.a._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),Object(n.b)(this,void 0,void 0,(function(){return Object(n.d)(this,(function(i){switch(i.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return i.sent(),[4,this.startAnimation(t,e)];case 2:return i.sent(),this.afterAnimation(t),[2,!0]}}))}))},t.prototype.loadAnimation=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,d.a._createAnimation(this.type,this)]);case 1:return e.animation=i.sent(),r.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}}))}))},t.prototype.startAnimation=function(t,e){return Object(n.b)(this,void 0,void 0,(function(){var i,o;return Object(n.d)(this,(function(n){switch(n.label){case 0:return i=!t,o=this.animation.direction(i?"reverse":"normal").easing(i?this.easingReverse:this.easing).onFinish((function(){"reverse"===o.getDirection()&&o.direction("normal")})),e?[4,o.play()]:[3,2];case 1:return n.sent(),[3,3];case 2:o.play({sync:!0}),n.label=3;case 3:return[2]}}))}))},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!d.a._getOpenSync()&&p(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(s.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=l(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(s.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var i=this._isOpen,n=this.isEndSide,o=l(t.deltaX,i,n),r=this.width,c=o/r,d=t.velocityX,u=r/2,h=d>=0&&(d>.2||t.deltaX>u),p=d<=0&&(d<-.2||t.deltaX<-u),b=i?n?h:p:n?p:h,m=!i&&b;i&&!b&&(m=!0),this.lastOnEnd=t.currentTime;var f=b?.001:-.001,g=c<0?.01:c;f+=Object(a.a)([0,0],[.4,0],[.6,1],[1,1],Object(s.c)(0,g,.9999))[0]||0;var v=this._isOpen?!b:b;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-f:f,300)}else Object(s.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(s.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(b),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(s.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(f),this.ionDidOpen.emit()):(this.el.classList.remove(b),this.contentEl&&this.contentEl.classList.remove(f),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||d.a._setActiveMenu(this),Object(s.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(s.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)},t.prototype.render=function(){var t,e=this,i=this,n=i.isEndSide,r=i.type,s=i.disabled,a=i.mode,c=i.isPaneVisible;return Object(o.i)(o.a,{role:"navigation",class:(t={},t[a]=!0,t["menu-type-"+r]=!0,t["menu-enabled"]=!s,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=c,t)},Object(o.i)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(o.i)("slot",null)),Object(o.i)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0 16px rgba(0,0,0,.18);box-shadow:4px 0 16px rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),l=function(t,e,i){return Math.max(0,e!==i?-t:t)},p=function(t,e,i,n){return i?e>=t.innerWidth-n:e<=n},b="show-menu",m="show-backdrop",f="menu-content-open",g=function(t){return Object(n.b)(void 0,void 0,void 0,(function(){var e,i;return Object(n.d)(this,(function(n){switch(n.label){case 0:return[4,d.a.get(t)];case 1:return e=n.sent(),(i=e)?[4,e.isActive()]:[3,3];case 2:i=n.sent(),n.label=3;case 3:return[2,!!i]}}))}))},v=function(){function t(t){var e=this;Object(o.k)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=function(){return Object(n.b)(e,void 0,void 0,(function(){return Object(n.d)(this,(function(t){return[2,d.a.toggle(this.menu)]}))}))}}return t.prototype.componentDidLoad=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return Object(n.b)(this,void 0,void 0,(function(){var t;return Object(n.d)(this,(function(e){switch(e.label){case 0:return t=this,[4,g(this.menu)];case 1:return t.visible=e.sent(),[2]}}))}))},t.prototype.render=function(){var t,e=this.color,i=this.disabled,n=Object(o.d)(this),s=r.b.get("menuIcon","ios"===n?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,c={type:this.type};return Object(o.i)(o.a,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign((t={},t[n]=!0,t),Object(u.a)(e)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":i,"in-toolbar":Object(u.c)("ion-toolbar",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(o.i)("button",Object.assign({},c,{disabled:i,class:"button-native"}),Object(o.i)("span",{class:"button-inner"},Object(o.i)("slot",null,Object(o.i)("ion-icon",{icon:s,mode:n,lazy:!1}))),"md"===n&&Object(o.i)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused):after{background:var(--ion-color-base)}@media (any-hover:hover){:host(.ion-color:hover) .button-native:after{background:var(--ion-color-base)}}'},enumerable:!0,configurable:!0}),t}(),y=function(){function t(t){var e=this;Object(o.k)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return d.a.toggle(e.menu)}}return t.prototype.connectedCallback=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return Object(n.b)(this,void 0,void 0,(function(){var t;return Object(n.d)(this,(function(e){switch(e.label){case 0:return t=this,[4,g(this.menu)];case 1:return t.visible=e.sent(),[2]}}))}))},t.prototype.render=function(){var t,e=Object(o.d)(this),i=this.autoHide&&!this.visible;return Object(o.i)(o.a,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(t={},t[e]=!0,t["menu-toggle-hidden"]=i,t)},Object(o.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}()},175:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var n=i(0),o=function(t,e){return null!==e.closest(t)},r=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},s=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,i){return Object(n.b)(void 0,void 0,void 0,(function(){var o;return Object(n.d)(this,(function(n){return null!=t&&"#"!==t[0]&&!a.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=58.7fbae8d2.chunk.js.map