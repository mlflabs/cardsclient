(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"1rpr":function(t,e,i){"use strict";i.r(e),i.d(e,"IonItem",function(){return l}),i.d(e,"IonItemDivider",function(){return s}),i.d(e,"IonItemGroup",function(){return a}),i.d(e,"IonLabel",function(){return c}),i.d(e,"IonList",function(){return d}),i.d(e,"IonListHeader",function(){return h}),i.d(e,"IonNote",function(){return b}),i.d(e,"IonSkeletonText",function(){return p});var o=i("B5Ai"),n=i("cBjU"),r=i("HHlg"),l=function(){function t(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}return t.prototype.itemStyle=function(t){t.stopPropagation();var e=t.target.tagName,i=t.detail,o={},n=this.itemStyles.get(e)||{},r=!1;Object.keys(i).forEach(function(t){var e="item-"+t,l=i[t];l!==n[e]&&(r=!0),l&&(o[e]=!0)}),r&&(this.itemStyles.set(e,o),this.el.forceUpdate())},t.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(t){t.size||(t.size="small")});var t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1},t.prototype.isClickable=function(){return void 0!==this.href||this.button},t.prototype.hostData=function(){var t,e={};return this.itemStyles.forEach(function(t){Object.assign(e,t)}),{"ion-activatable":this.isClickable(),class:Object.assign({},e,Object(r.h)(this.color),(t={},t["item-lines-"+this.lines]=!!this.lines,t["item-disabled"]=this.disabled,t["in-list"]=Object(r.j)("ion-list",this.el),t.item=!0,t["item-multiple-inputs"]=this.multipleInputs,t))}},t.prototype.render=function(){var t=this,e=t.href,i=t.detail,o=t.mode,l=t.win,s=t.detailIcon,a=t.routerDirection,c=t.type,d=this.isClickable(),h=d?void 0===e?"button":"a":"div",b=void 0!==i?i:"ios"===o&&d;return[Object(n.b)(h,Object.assign({},"button"===h?{type:c}:{href:e},{class:"item-native",onClick:function(t){return Object(r.i)(l,e,t,a)}}),Object(n.b)("slot",{name:"start"}),Object(n.b)("div",{class:"item-inner"},Object(n.b)("div",{class:"input-wrapper"},Object(n.b)("slot",null)),Object(n.b)("slot",{name:"end"}),b&&Object(n.b)("ion-icon",{icon:s,lazy:!1,class:"item-detail-icon"}),Object(n.b)("div",{class:"item-inner-highlight"})),d&&"md"===o&&Object(n.b)("ion-ripple-effect",null)),Object(n.b)("div",{class:"item-highlight"})]},Object.defineProperty(t,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--min-height:44px;--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.activated) .item-native{background:var(--background-activated)}:host(.ion-color.activated) .item-native{background:var(--ion-color-tint)}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused);--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,#d9d9d9);--border-color:var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}:host(.activated){--transition:none}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted(:not(.interactive)[slot=start]){margin:2px 16px 2px 0}::slotted(:not(.interactive)[slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;--height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(t){t.size||(t.size="small")})},t.prototype.hostData=function(){return{class:Object.assign({},Object(r.h)(this.color),{item:!0})}},t.prototype.render=function(){return[Object(n.b)("slot",{name:"start"}),Object(n.b)("div",{class:"item-divider-inner"},Object(n.b)("div",{class:"item-divider-wrapper"},Object(n.b)("slot",null)),Object(n.b)("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-item-divider"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right, 0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host([sticky]){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0;min-height:inherit;border:0}.item-divider-inner,.item-divider-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;overflow:hidden}.item-divider-wrapper{text-overflow:ellipsis}:host{--background:var(--ion-background-color-step-50,#f2f2f2);--color:var(--ion-text-color-step-150,#262626);--padding-start:16px;border-radius:0;position:relative;font-size:17px}.item-divider-inner{padding-right:8px}:host([slot=start]){margin:2px 16px 2px 0}:host([slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}::slotted(h1){font-size:24px}::slotted(h1),::slotted(h2){margin:0 0 2px;font-weight:400}::slotted(h2){font-size:17px}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}::slotted(p){margin:0 0 2px;color:var(--ion-text-color-step-600,#999);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){}return t.prototype.hostData=function(){return{class:Object.assign({},Object(r.k)(this.mode,"item-group"),{item:!0})}},Object.defineProperty(t,"is",{get:function(){return"ion-item-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-group{display:block}.item-group-ios ion-item-sliding:last-child .item,.item-group-ios ion-item:last-child{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.noAnimate=!1}return t.prototype.componentWillLoad=function(){this.noAnimate="floating"===this.position,this.emitStyle()},t.prototype.componentDidLoad=function(){var t=this;this.noAnimate&&setTimeout(function(){t.noAnimate=!1},1e3)},t.prototype.positionChanged=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t,e=this.position;this.ionStyle.emit(((t={label:!0})["label-"+e]=!!e,t))},t.prototype.hostData=function(){var t,e=this.position;return{class:Object.assign({},Object(r.h)(this.color),(t={},t["label-"+e]=!!e,t["label-no-animate"]=this.noAnimate,t))}},Object.defineProperty(t,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".item.sc-ion-label-ios-h, .item   .sc-ion-label-ios-h{--color:initial;margin:0;display:block;-ms-flex:1;flex:1;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h, .item-interactive-disabled   .sc-ion-label-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-ios-h, .item-input   .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus   .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value   .label-floating.sc-ion-label-ios-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.item.sc-ion-label-ios-h, .item   .sc-ion-label-ios-h{margin:10px 8px 10px 0}[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:13.6px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.sc-ion-label-ios-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-ios-s  h2 {margin:0 0 2px;font-size:17px;font-weight:400}.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6 {margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-ios-s  p {margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s > p{color:var(--ion-text-color-step-600,#999)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p{color:inherit}.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child {margin-bottom:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(){this.inset=!1}return t.prototype.closeSlidingItems=function(){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(e){return(t=this.el.querySelector("ion-item-sliding"))&&t.closeOpened?[2,t.closeOpened()]:[2,!1]})})},t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(r.k)(this.mode,"list"),(t={},t["list-lines-"+this.lines]=!!this.lines,t["list-inset"]=this.inset,t["list-"+this.mode+"-lines-"+this.lines]=!!this.lines,t))}},Object.defineProperty(t,"is",{get:function(){return"ion-list"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-list{margin:0;padding:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{margin:-1px 0 32px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-ios:not(.list-inset):not(.list-ios-lines-none) .item:last-child{--inner-border-width:0;--border-width:0 0 0.55px 0}.list-ios.list-inset{margin:16px;border-radius:4px}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios-lines-full .item,.list-ios .item-lines-full{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios-lines-inset .item,.list-ios .item-lines-inset{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(r.h)(this.color)}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-list-header"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-text-color-step-150,#262626);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),b=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(r.h)(this.color)}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color-step-650,#a6a6a6)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){this.width="100%"}return t.prototype.render=function(){return Object(n.b)("span",{style:{width:this.width}},"\xa0")},Object.defineProperty(t,"is",{get:function(){return"ion-skeleton-text"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host,span{display:inline-block}span{font-size:8px}:host{--background:var(--ion-text-color,#000)}span{background:var(--background);opacity:.1}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}()}}]);