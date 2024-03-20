(()=>{var t={776:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466),i=n(422),r=n(102);return n(975).extend(e.extend({init:function(t){this.$el=i("#"+t.htmlElementId),this.portletId=t.portletId,this.route=t.route,this.locale=t.locale,this.defaultLocale=t.defaultLocale,this.webAppId=t.webAppId,this.webAppVersion=t.webAppVersion,this.webAppAopId=t.webAppAopId,this.webAppImportTime=t.webAppImportTime,this.childComponentStateExtractionStrategy=t.childComponentStateExtractionStrategy}},r))}.call(e,n,e,t))||(t.exports=i)},577:(t,e,n)=>{var i;i=function(t){"use strict";var e=n(466),i=n(60),r=window.AppRegistry;return{start:function(t){t=t||r.getRegistry(),r.setAppStarter(this),e.each(t,(function(t){e.each(t.instances,(function(n){var o=new i(n,t.bundle,r.getBootstrapData(n.portletId));e.each(t.modules,(function(t,e){t.module(o.createDefine(e))})),o.start()}))}))}}}.call(e,n,e,t),void 0===i||(t.exports=i)},916:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466),i=n(422),r=n(975),o=n(102),s=/^(\S+)\s*(.*)$/,a=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}();function c(t,n,i){t&&e.each(t,(function(t,e){var r=e.match(s);n.call(i,r[1],r[2],t)}))}function u(t,n,i){t&&e.each(t,(function(t,e){i.listenTo(n,e,i[t])}))}function h(t,n,i){t&&e.each(t,(function(t,e){i.stopListening(n,e,i[t])}))}function d(t){t.forEach((function(t){t._unbindEvents(),t._subComponents&&t._subComponents.length&&d(t._subComponents)}))}var l=function(){var t=/(^|:)(\w)/gi;function n(t,e,n){return n.toUpperCase()}return function(i,r,o){var s=arguments.length<3;s&&(r=(o=r)[0]);var a,c=i["on"+r.replace(t,n)];return e.isFunction(c)&&(a=c.apply(i,s?e.rest(o):o)),e.isFunction(i.trigger)&&(s+o.length>1?i.trigger.apply(i,s?o:[r].concat(e.drop(o,0))):i.trigger(r)),a}}();return{create:function(t,n,s,p,f,v,m){return r.extend(e.extend({tagName:"div",isRendered:!1,init:function(t,e){var n;if(e?(this.$el=e.$el,this.cid=e.cid,n=e.serverRendered,this.options=e.options):e={},this.cid||(this.cid=a()),this._bindEvents(),this.state=t,this._subComponents=[],this.listenToOnce(s,"components:loaded",(function(t){var n=e.subComponents;n&&(this._subComponents=n.map((function(e){return t[e]})))})),this.on("attached",this._bindDOMEvents),this.triggerMethod("init"),n){var i={serverRendered:n};this.triggerMethod("rendered",i),this.triggerMethod("attached",i)}},filterState:function(){return{}},$:function(t){return this.$el.find(t)},_bindEvents:function(){this.events&&(u(this.events.app,s,this),u(this.events.router,p,this),u(this.events.global,v,this),function(t,n,i){t&&(i._unsubscribe=n.subscribe(function(){var i=this.filterState(n.getState(),this.options);e.isEqual(this.state,i)||this[t](i)}.bind(i)))}(this.events.store,m,this),function(t,n){t&&e.each(t,(function(t,e){n.on(e,n[t])}))}(this.events.self,this))},_bindDOMEvents:function(){this.events&&c(this.events.dom,(function(t,e,n){this.$el.off(t,e,this[n]).on(t,e,i.proxy(this[n],this))}),this)},_unbindEvents:function(){this.events&&(h(this.events.app,s,this),h(this.events.router,p,this),function(t,n){t&&e.each(t,(function(t,e){n.off(e,n[t])}))}(this.events.self,this),function(t){t._unsubscribe&&t._unsubscribe()}(this),c(this.events.dom,(function(t,e,n){this.$el.off(t,e,this[n])}),this))},_templateFunctions:function(){var i=e.bind(this.renderTemplate,this),r=this;return{renderer:{renderPartial:function(t,e){var r=n(t);return i(r,e)},renderComponent:function(t,i){var o=n("/component/"+t),s=o.prototype.filterState(m.getState(),i),a=new o(s,{options:i});r._subComponents.push(a),r.renderedSubComponents[a.cid]=a;var c=e.escape(e.result(a,"tagName"));return"<"+c+' data-cid="'+a.cid+'"></'+c+">"}.bind(this)},getUrl:e.bind(p.getUrl,p),getStandaloneUrl:e.bind(p.getStandaloneUrl,p),getResourceUrl:function(t){return"/"===t.charAt(0)&&(t=t.substring(1)),"/webapp-files/"+window.sv.PageContext.pageId+"/"+s.webAppAopId+"/"+s.webAppImportTime+"/"+t},i18n:f,appContext:{getWebAppNamespace:function(e){return e+t.portletId.replace(".","_")}}}},_ensureEl:function(){this.$el||(this.$el=i("<"+e.escape(e.result(this,"tagName"))+"/>").data("cid",this.cid))},getTemplate:function(){return this.template},renderTemplate:function(t,n){return t(e.extend(this._templateFunctions(),e.result(this,"templateFunctions"),n))},render:function(){var t,n;return this.renderedSubComponents={},d(this._subComponents),this._subComponents=[],this._ensureEl(),(n=e.escape(e.result(this,"className")))&&this.$el.addClass(n),(t=e.result(this,"attributes"))&&this.$el.attr(t),this.$el.html(this.renderTemplate(this.getTemplate(),this.state)),this.isRendered=!0,this.triggerMethod("rendered"),e.each(this.renderedSubComponents,(function(t,e){this.$el.find('[data-cid="'+e+'"]').replaceWith(t.render().$el)}),this),this.triggerMethod("attached"),this},destroy:function(){this.triggerMethod("destroy"),this._unbindEvents(),d(this._subComponents),this.$el&&this.$el.remove()},setState:function(t,n,i){var r,o={};"object"==typeof t?(r=t,i=n):(r={})[t]=n,i||(i={}),e.each(r,(function(t,e){this.state[e]!==t&&(this.state[e]=t,o[e]=t)}),this),e.each(o,(function(t,e){this.triggerMethod("state:changed:"+e,t,i)}),this),this.triggerMethod("state:changed",o,i)},triggerMethod:function(){l(this,arguments)}},o))}}}.call(e,n,e,t))||(t.exports=i)},326:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(422),i=n(466);function r(t){t.forEach((function(t){t._unbindEvents(),t._subComponents&&t._subComponents.length&&r(t._subComponents)}))}return{create:function(t,n,o){return t.extend({addItem:function(t,e){var n=this._createChildComponent(t,e&&e.options);this.$el[e&&e.prepend?"prepend":"append"](n.render().$el)},_createChildComponent:function(t,e){if(!this.childComponentPath)throw new Error("No child component specified");this.ChildComponent||(this.ChildComponent=n("/component/"+this.childComponentPath)),e=i.extend({},e,{id:t.id}),t=i.extend(t,this.ChildComponent.prototype.filterState(o.getState(),e));var r=new this.ChildComponent(t,{options:e});return this._subComponents.push(r),r},triggerChildren:function(t,e){i.each(this._subComponents,(function(n){n.trigger(t,e)}))},getChildAt:function(t){return this._subComponents[t]},getChildById:function(t){return i.find(this._subComponents,(function(e){return e.state.id===t}))},removeChildById:function(t){var e=this.getChildById(t);e&&(this._subComponents=i.filter(this._subComponents,(function(t){return t!==e})),e.destroy())},render:function(){var t=e("<div></div>"),n=i.result(this,"className"),o=i.result(this,"attributes"),s=i.result(this,"childOptions",{});return r(this._subComponents),this._subComponents=[],this._ensureEl(),this.$el.removeClass(),n&&this.$el.addClass(n),o&&this.$el.attr(o),i.each(this.state[this.childProperty],(function(e){t.append(this._createChildComponent(e,s).render().$el)}),this),this.$el.html("").append(t.children()),this.isRendered=!0,this.triggerMethod("rendered"),this.triggerMethod("attached"),this}})}}}.call(e,n,e,t))||(t.exports=i)},310:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466),i=n(975),r=n(102);function o(t,n){var i=[];return e.each(n,(function(e,n){t[n]!==e&&i.push(n)})),e.each(t,(function(t,e){Object.hasOwn(n,e)||i.push(e)})),i}function s(t,n){var i=t.length?t.slice(1).split("&"):[],r={};return i.forEach((function(t){t=t.split("="),r[t[0]]=decodeURIComponent(t[1]||"")})),e.omit(r,"sv.target",n)}function a(t,n){var i=t.substring(t.indexOf("?")+1).split("&"),r=e.find(i,(function(t){return 0===t.indexOf(n)})),o=r?r.split("=")[1]:"/";return decodeURIComponent(o)}return i.extend(e.extend({init:function(t){this.history=window.history,this.location=window.location,this.portletId=t.portletId,this.pathParameterName="sv."+this.portletId+".route",this.currentQueryString=this.location.search,this.currentPath=a(this.location.href,this.pathParameterName),window.addEventListener("popstate",this._handleRouteChange.bind(this),!1)},_handleRouteChange:function(){var t=a(this.location.href,this.pathParameterName),n=s(this.location.search,this.pathParameterName),i=o(s(this.currentQueryString,this.pathParameterName),n);if(t!==this.currentPath&&(this.currentPath=t,this.trigger("path:changed",{path:t,url:this.location.search})),this.currentQueryString=this.location.search,i.length){var r={queryParams:n,url:this.location.search};e.each(i,(function(t){this.trigger("query:changed:"+t,r)}),this),i.length&&this.trigger("query:changed",r)}},getUrl:function(t,n){var i=e.isEmpty(t)?a(this.location.search,this.pathParameterName):t,r="?sv.target="+this.portletId+"&"+this.pathParameterName+"="+i;return e.each(n,(function(t,e){r+="&"+(!0===t?encodeURIComponent(e):encodeURIComponent(e)+"="+encodeURIComponent(t))})),r},getStandaloneUrl:function(t,n){var i=window.sv.PageContext.pageId;if(!i)return"/";var r,o,s,a=window.sv.PageContext.dashboardId;return r=a?"/edit-dashboard/"+i+"/"+a+"/"+this.portletId+t:"/appresource/"+i+"/"+this.portletId+t,n&&(r+="?"+(o=n,s=[],e.each(o,(function(t,e){s.push(encodeURIComponent(e)+"="+encodeURIComponent(t))})),s.join("&"))),r},parseQueryString:function(){return s(this.location.search,this.pathParameterName)},navigate:function(t,n){var i=e.isEmpty(t)?a(this.location.href,this.pathParameterName):a(t,this.pathParameterName),r=n&&n.queryParams,c=n&&n.replace,u=this.getUrl(i,r),h=s(u,this.pathParameterName),d=o(s(this.location.search,this.pathParameterName),h);if(this.history[c?"replaceState":"pushState"]({},document.title,u),i!==this.currentPath&&(this.currentPath=i,this.trigger("path:changed",{path:i,url:u})),this.currentQueryString=u,d.length){var l={queryParams:h,url:u};e.each(d,(function(t){this.trigger("query:changed:"+t,l)}),this),this.trigger("query:changed",l)}}},r))}.call(e,n,e,t))||(t.exports=i)},60:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466),i=n(422),r=n(975),o=n(102),s=n(916),a=n(326),c=n(453),u=n(310),h=n(411),d=n(776),l=n(508),p=n(406),f=n(106),v=window.AppRegistry,m=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,g=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,b=/^(react|react-dom)$/,y=e.extend({},o),_=function(t){return t},w=function(t){var e=t.split("."),n=e[0],i=e[1];return window.sv.UNSAFE_MAY_CHANGE_AT_ANY_GIVEN_TIME_webAppExternals["react_"+n+"_"+i]};return r.extend({init:function(t,n,r){this.requiredLibs=t.requiredLibs,this.app=new d(t),this.router=new u(t);var o=new h(t.locale,t.defaultLocale,n);this.i18n=e.bind(o.get,o),this.i18n.get=e.bind(o.get,o),this.initialState=v.getInitialState(this.app.portletId),this.store=f.createStore(_,this.initialState),this.agnosticRender=r&&r.AGNOSTIC_RENDERER;var m=s.create(t,e.bind(this.require,this),this.app,this.router,this.i18n,y,this.store);this.bootstrapData=r,this.modules={app:this.app,requester:c,router:this.router,i18n:this.i18n,events:y,toasts:l,security:p,url:{get:this.router.getUrl.bind(this.router)}},this.agnosticRender||e.extend(this.modules,{underscore:e,jquery:i,Component:m,ListComponent:a.create(m,e.bind(this.require,this),this.store),redux:f,store:this.store}),this.definitions={},this.definitionQue=[]},start:function(){if(this.startModules(),this.agnosticRender){var t=this.require("/main"),n=document.querySelector('[data-cid="'+this.app.portletId+'"]');t.default?t.default(this.initialState,n):e.isFunction(t)&&t(this.initialState,n)}else this.setUpReducer(),this.setUpComponents()},setUpReducer:function(){var t=this.require("/reducer");t&&this.modules.store.replaceReducer(t)},setUpComponents:function(){var t={},n=this.modules.store.getState(),r=this.app.childComponentStateExtractionStrategy;e.each(this.bootstrapData,(function(o,s){var a;if(a="main"===s?this.require("/"+s):this.require("/component/"+s)){var c=0;e.each(o,(function(o,s){var u=i('[data-cid="'+s+'"]'),h=a.prototype.filterState(n,o.options);if("BY_PARENT_PROPERTY"===r&&o.options&&o.options._parentProperty){var d=n[o.options._parentProperty];d&&e.extend(h,d[c++])}t[s]=new a(h,{$el:u,serverRendered:!0,cid:s,subComponents:o.subComponents,options:o.options})}))}else window.console.error("Error in: "+this.app.webAppId+". Could not load component with name "+s)}),this),this.app.trigger("components:loaded",t)},require:function(t){return this.requiredLibs.react&&b.test(t)?w(this.requiredLibs.react)[t]:this.modules[t]},define:function(t,n,i){var r=!1;i||(i=n,n=void 0,r=!0),!n&&e.isFunction(i)&&(n=[],i.length&&i.toString().replace(g,"").replace(m,(function(t,e){n.push(e)}))),this.definitions[t]={path:t,callback:i,deps:n,usesRequireFunction:r},this.definitionQue.push({path:t,deps:n,callback:i,usesRequireFunction:r})},startModule:function(t){this.modules[t.path]||(t.deps.forEach((function(e){-1===Object.keys(this.modules).indexOf(e)&&(b.test(e)||(this.definitions[e]?this.startModule(this.definitions[e]):window.console.error("Error in: "+this.app.webAppId+'. Missing dependency "'+e+'" in module '+t.path)))}),this),t.usesRequireFunction?this.modules[t.path]=t.callback(this.require.bind(this)):this.modules[t.path]=t.callback.apply(null,t.deps.map(function(t){return this.requiredLibs.react&&b.test(t)?w(this.requiredLibs.react)[t]:this.modules[t]}.bind(this))))},startModules:function(){this.definitionQue.forEach(this.startModule,this)},createDefine:function(t){return e.extend(this.define.bind(this,t),{amd:{jQuery:!0}})}})}.call(e,n,e,t))||(t.exports=i)},411:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466);function i(t){return t.split("-")[0]}return n(975).extend({init:function(t,n,r){this.bundle=function(t,n,r){var o=e.extend({},r[n]);if(t===n)return o;var s,a=i(t).toLowerCase();return e.find(e.keys(r),(function(e){var n=i(e).toLowerCase();if(a===n&&(s=r[e],t===e))return!0})),s&&e.extend(o,s),o}(t,n,r)},get:function(t){if(1===arguments.length)return this.bundle[t]||t;for(var e=Array.prototype.slice.call(arguments,1),n=this.bundle[t],i=0;i<e.length;i++){var r=new RegExp("\\{"+i+"\\}","gm");n=n.replace(r,e[i])}return n||t}})}.call(e,n,e,t))||(t.exports=i)},220:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";n(577).start()}.call(e,n,e,t))||(t.exports=i)},453:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(422),i=n(466),r=n(406);function o(t){var n=!1;if(t.fileUpload&&/put|post|patch/i.test(t.type)?(t.processData=!1,t.contentType=!1):t.data&&!i.isObject(t.data)||(n=!0,t.data=t.data||{},t.data.svAjaxReqParam="ajax"),!/get/i.test(t.type)&&n&&!1!==t.processData&&(t.processData=!1,t.data=JSON.stringify(t.data)),/put|post|patch|delete/i.test(t.type)){var o=r.csrf.getToken();o&&(t.headers=t.headers||{},t.headers[r.csrf.getHeaderName()]=o)}return e.ajax(t)}var s={type:"get",dataType:"json"},a=i.extend({},{contentType:"application/json; charset=utf-8"},s),c={get:i.clone(s),put:i.extend({},a,{type:"put"}),post:i.extend({},a,{type:"post"}),delete:i.extend({},a,{type:"delete"}),patch:i.extend({},a,{type:"patch"})};return{doGet:function(t){return o(i.extend({},c.get,t))},doPut:function(t){return o(i.extend({},c.put,t))},doPost:function(t){return o(i.extend({},c.post,t))},doDelete:function(t){return o(i.extend({},c.delete,t))},doPatch:function(t){return o(i.extend({},c.patch,t))}}}.call(e,n,e,t))||(t.exports=i)},406:(t,e,n)=>{var i;void 0===(i=function(){"use strict";return{csrf:{getToken:function(){return window.sv.PageContext.csrfToken||null},getParameterName:function(){return"sv.csrfToken"},getHeaderName:function(){return"X-CSRF-Token"}}}}.call(e,n,e,t))||(t.exports=i)},508:(t,e,n)=>{var i;void 0===(i=function(){"use strict";const t=n(466),e=window.sv.i18n,i={type:""},r=function(){const t={delay:4,showCheckmark:!1,classes:{base:"sv-toast__container",prefix:"env-toast--",toast:"env-toast",bottomLeft:"sv-bottom-left",visible:"env-toast--visible",hidden:"env-toast--hide",close:"env-toast__close"}};var n,i=[],o=t.classes,s=o.base;function a(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function c(t,e){t.className+=" "+e}const u=function(){var t,e,n=!1,i={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==document.documentElement.style[t]){e=i[t],n=!0;break}return{type:e,supported:n}}(),h=function(t,e,n){t.removeEventListener(e,n)};function d(e){e.__internal||(e.__internal={delay:t.delay},(n=document.createElement("DIV")).className=s,c(n,o.bottomLeft)),n.parentNode!==document.body&&document.body.appendChild(n)}function l(t,s){function d(t,e){"close"===t.target.getAttribute("data-dismiss")&&e.dismiss(!0)}function l(t,e){h(e.element,u.type,l),n.removeChild(e.element)}function p(t,e){return function(){if(arguments.length>0){const i=[];for(var n=0;n<arguments.length;n+=1)i.push(arguments[n]);return i.push(t),e.apply(t,i)}return e.apply(t,[null,t])}}function f(t){clearTimeout(t.__internal.timer),clearTimeout(t.__internal.transitionTimeout)}return v={element:t,push:function(t,e,r){if(!this.__internal.pushed){var s,a;switch((l=this).__internal.pushed=!0,i.push(l),f(this),arguments.length){case 0:a=this.__internal.delay;break;case 1:"number"==typeof t?a=t:(s=t,a=this.__internal.delay);break;case 2:s=t,a=e;break;case 3:s=t,a=e,this.__internal.showCheckmark=r}return void 0!==s&&this.setContent(s),n.appendChild(this.element),function(t){void 0===t&&(t=document.documentElement),t.offsetHeight}(this.element),c(this.element,o.visible),u=this.element,h="click",d=this.__internal.clickHandler,u.addEventListener(h,d),this.delay(a)}var u,h,d,l;return this},ondismiss:function(){},callback:s,dismiss:function(t){var e;return this.__internal.pushed&&(f(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(h(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===n&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,u.supported?1e3:100),c(this.element,o.hidden),"function"==typeof this.callback&&this.callback.call(this,t)),e=this,i.splice(i.indexOf(e),1),e.__internal.pushed=!1)),this},delay:function(t){if(f(this),this.__internal.delay=void 0===t||isNaN(+t)?r.__internal.delay:+t,this.__internal.delay>0){var e=this;this.__internal.timer=setTimeout((function(){e.dismiss()}),1e3*this.__internal.delay)}return this},setContent:function(t){const n=document.createElement("div");c(n,"env-toast__content"),"string"==typeof t?(a(this.element),n.innerHTML=t):t instanceof window.HTMLElement&&n.firstChild!==t&&(a(this.element),n.appendChild(t)),this.element.appendChild(n),this.element.setAttribute("role","status"),this.element.setAttribute("aria-live","polite"),this.__internal.showCheckmark&&this.element.insertAdjacentHTML("afterbegin",'<div class="sv-toast-checkmark env-m-left--medium"><svg class="env-icon env-icon--small">\n            <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>\n         </svg></div>');const i=document.createElement("button");return c(i,o.close),i.insertAdjacentHTML("beforeend",'<svg data-dismiss="close" class="env-icon env-icon--small">\n         <use data-dismiss="close" xlink:href="/sitevision/envision-icons.svg#icon-delete"></use>\n      </svg>'),i.setAttribute("aria-label",e.getText("common","close")),i.setAttribute("data-dismiss","close"),this.element.appendChild(i),this}},v.__internal||(v.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0,showCheckmark:void 0},v.__internal.clickHandler=p(v,d),v.__internal.transitionEndHandler=p(v,l)),v;var v}return{create:function(t,e){d(this);const n=document.createElement("div");return n.className=o.toast+("string"==typeof t&&""!==t?" "+o.prefix+t:""),l(n,e)}}}();return document.addEventListener("sv-publish-toast",(t=>{const e=t.detail;var n,i;e.heading&&(e.message=(n=e.heading,i=e.message,"<strong>"+n+"</strong> "+i)),r.create(e.type,e.callback).push(e.message,e.ttl,e.checkmark)})),{publish:function(e){try{const n=new CustomEvent("sv-publish-toast",{detail:t.extend({},i,e)});document.dispatchEvent(n)}catch(t){window.console.log("Something went wrong! Failed to create Toast!")}}}}.call(e,n,e,t))||(t.exports=i)},102:(t,e,n)=>{var i;void 0===(i=function(t){"use strict";var e=n(466),i={},r=/\s+/,o=function(t,n,i,s,a){var c,u=0;if(i&&"object"==typeof i){void 0!==s&&"context"in a&&void 0===a.context&&(a.context=s);for(c=e.keys(i);u<c.length;u++)n=o(t,n,c[u],i[c[u]],a)}else if(i&&r.test(i))for(c=i.split(r);u<c.length;u++)n=t(n,c[u],s,a);else n=t(n,i,s,a);return n};i.on=function(t,e,n){return s(this,t,e,n)};var s=function(t,e,n,i,r){(t._events=o(a,t._events||{},e,n,{context:i,ctx:t,listening:r}),r)&&((t._listeners||(t._listeners={}))[r.id]=r);return t};i.listenTo=function(t,n,i){if(!t)return this;var r=t._listenId||(t._listenId=e.uniqueId("l")),o=this._listeningTo||(this._listeningTo={}),a=o[r];if(!a){var c=this._listenId||(this._listenId=e.uniqueId("l"));a=o[r]={obj:t,objId:r,id:c,listeningTo:o,count:0}}return s(t,n,i,this,a),this};var a=function(t,e,n,i){if(n){var r=t[e]||(t[e]=[]),o=i.context,s=i.ctx,a=i.listening;a&&a.count++,r.push({callback:n,context:o,ctx:o||s,listening:a})}return t};i.off=function(t,e,n){return this._events?(this._events=o(c,this._events,t,e,{context:n,listeners:this._listeners}),this):this},i.stopListening=function(t,n,i){var r=this._listeningTo;if(!r)return this;for(var o=t?[t._listenId]:e.keys(r),s=0;s<o.length;s++){var a=r[o[s]];if(!a)break;a.obj.off(n,i,this)}return this};var c=function(t,n,i,r){if(t){var o,s=0,a=r.context,c=r.listeners;if(n||i||a){for(var u=n?[n]:e.keys(t);s<u.length;s++){var h=t[n=u[s]];if(!h)break;for(var d=[],l=0;l<h.length;l++){var p=h[l];i&&i!==p.callback&&i!==p.callback._callback||a&&a!==p.context?d.push(p):(o=p.listening)&&0==--o.count&&(delete c[o.id],delete o.listeningTo[o.objId])}d.length?t[n]=d:delete t[n]}return t}for(var f=e.keys(c);s<f.length;s++)delete c[(o=c[f[s]]).id],delete o.listeningTo[o.objId]}};i.once=function(t,n,i){var r=o(u,{},t,n,e.bind(this.off,this));return"string"==typeof t&&null==i&&(n=void 0),this.on(r,n,i)},i.listenToOnce=function(t,n,i){var r=o(u,{},n,i,e.bind(this.stopListening,this,t));return this.listenTo(t,r)};var u=function(t,n,i,r){if(i){var o=t[n]=e.once((function(){r(n,o),i.apply(this,arguments)}));o._callback=i}return t};i.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),n=Array(e),i=0;i<e;i++)n[i]=arguments[i+1];return o(h,this._events,t,void 0,n),this};var h=function(t,e,n,i){if(t){var r=t[e],o=t.all;r&&o&&(o=o.slice()),r&&d(r,i),o&&d(o,[e].concat(i))}return t},d=function(t,e){var n,i=-1,r=t.length,o=e[0],s=e[1],a=e[2];switch(e.length){case 0:for(;++i<r;)(n=t[i]).callback.call(n.ctx);return;case 1:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o);return;case 2:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s);return;case 3:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s,a);return;default:for(;++i<r;)(n=t[i]).callback.apply(n.ctx,e);return}};return i}.call(e,n,e,t))||(t.exports=i)},422:(t,e,n)=>{var i;void 0===(i=function(){"use strict";return window.$svjq}.call(e,n,e,t))||(t.exports=i)},466:(t,e,n)=>{var i;void 0===(i=function(){"use strict";return window._sv}.call(e,n,e,t))||(t.exports=i)},975:t=>{!function(){var e=!1,n=/xyz/.test((function(){xyz}))?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(t,i){null==i&&(i=t,t="Class");var r=this.prototype;e=!0;var o=new this;for(var s in e=!1,i)o[s]="function"==typeof i[s]&&"function"==typeof r[s]&&n.test(i[s])?function(t,e){return function(){var n=this._super;this._super=r[t];var i=e.apply(this,arguments);return this._super=n,i}}(s,i[s]):i[s];function a(){!e&&this.init&&this.init.apply(this,arguments)}a.prototype=o;var c=new Function("return function "+t+"(){ }")();return a.prototype.constructor=c,a.extend=arguments.callee,a},t.exports=Class}()},106:(t,e,n)=>{"use strict";n.r(e),n.d(e,{__DO_NOT_USE__ActionTypes:()=>o,applyMiddleware:()=>f,bindActionCreators:()=>d,combineReducers:()=>u,compose:()=>p,createStore:()=>a});var i=n(81),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function s(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,n){var r;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,u=e,h=[],d=h,l=!1;function p(){d===h&&(d=h.slice())}function f(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function v(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return p(),d.push(t),function(){if(e){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,p();var n=d.indexOf(t);d.splice(n,1)}}}function m(t){if(!s(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,u=c(u,t)}finally{l=!1}for(var e=h=d,n=0;n<e.length;n++){(0,e[n])()}return t}return m({type:o.INIT}),(r={dispatch:m,subscribe:v,getState:f,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,m({type:o.REPLACE})}})[i.Z]=function(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(f())}return n(),{unsubscribe:e(n)}}})[i.Z]=function(){return this},t},r}function c(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];0,"function"==typeof t[r]&&(n[r]=t[r])}var s,a=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(t){s=t}return function(t,e){if(void 0===t&&(t={}),s)throw s;for(var i=!1,r={},o=0;o<a.length;o++){var u=a[o],h=n[u],d=t[u],l=h(d,e);if(void 0===l){var p=c(u,e);throw new Error(p)}r[u]=l,i=i||l!==d}return i?r:t}}function h(t,e){return function(){return e(t.apply(this,arguments))}}function d(t,e){if("function"==typeof t)return h(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),i={},r=0;r<n.length;r++){var o=n[r],s=t[o];"function"==typeof s&&(i[o]=h(s,e))}return i}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),i=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:n.getState,dispatch:function(){return i.apply(void 0,arguments)}},o=e.map((function(t){return t(r)}));return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){l(t,e,n[e])}))}return t}({},n,{dispatch:i=p.apply(void 0,o)(n.dispatch)})}}}},81:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i}),t=n.hmd(t);const i=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:t)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i](o,o.exports,n),o.loaded=!0,o.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};n(220)})();
//# sourceMappingURL=webapp_sdk-min.js.map