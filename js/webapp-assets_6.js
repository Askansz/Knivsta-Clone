AppRegistry.registerBundle({applicationId:'search-list|1.0.5',bundle: {"en":{},"sv":{}}});
AppRegistry.registerModule({applicationId:'search-list|1.0.5',path:'/template/partials/message',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h1>PLACEHOLDER TEXT!</h1>';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'search-list|1.0.5',path:'/template/main',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div id="'+
((__t=( appContext.getWebAppNamespace('app') ))==null?'':__t)+
'">\r\n	<!-- Up the quality of your app by server render placeholders to later seamlessly be replaced by the VUE instance! -->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n<!--SCRIPT_TAG_TO_JS_FILE--><script src="'+
((__t=( getResourceUrl('vue/app.92a73e98.js') ))==null?'':__t)+
'"></script>\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'search-list|1.0.5',path:'/main',module:function(define){'use strict';define(function(require) {
	'use strict';

	var _ = require('underscore');
	var Component = require('Component');
	const router = require('router');
	var template = require('/template/main');

	return Component.extend({
		template: template,
		// Initialize the VUE app!
		onAttached: function() {
			var appId = this._templateFunctions().appContext.getWebAppNamespace(
				'app'
			);
			// A bugg in SiteVision crashes the browser tab if big Vue apps are rendered in edit mode. 
			// This prevents the vue client to be rendered in edit mode.
			if(!this.state.isEditMode) {
				window.b6ba3fa693be74edd814caa32931ca468(document.querySelector('#' + appId), this.state);
			}
		},
		filterState: function(state) {
			return Object.assign({}, state, {
				config: Object.assign({}, state.config, {
					searchUrl: router.getUrl('/search')
				})
			});
		},
		templateFunctions: function() {
			var _this = this;

			return {
				renderPartial: function(partialName, data) {
					var template = require('/template/partials/' + partialName);
					if (template) {
						if (data) {
							return _this.renderTemplate(template, {
								data: data
							});
						} else {
							return _this.renderTemplate(template, _this.state);
						}
					} else {
						return 'No partial template found';
					}
				}
			};
		}
	});
});
}});