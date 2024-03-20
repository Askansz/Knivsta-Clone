AppRegistry.registerBundle({applicationId:'text-icon|0.4.6',bundle: {"en":{},"sv":{}}});
AppRegistry.registerModule({applicationId:'text-icon|0.4.6',path:'/template/asLink',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<a\r\n  href="'+
((__t=( link ))==null?'':_.escape(__t))+
'"\r\n  title="'+
((__t=( text ))==null?'':_.escape(__t))+
'"\r\n  class="kniv-text-icon kniv-text-icon--'+
((__t=( orientation ))==null?'':_.escape(__t))+
'"\r\n>\r\n  <span\r\n    class="kniv-icon '+
((__t=( icon ))==null?'':__t)+
' kniv-text-icon__icon '+
((__t=( isWhite ))==null?'':_.escape(__t))+
'"\r\n    aria-hidden="true"\r\n  ></span>\r\n  ';
 if (orientation === 'vertical') { 
__p+='\r\n  <h2 class="kniv-text-icon__text '+
((__t=( isWhite ))==null?'':_.escape(__t))+
'">'+
((__t=( text ))==null?'':__t)+
'</h2>\r\n  ';
 } else { 
__p+='\r\n  <span class="kniv-text-icon__text '+
((__t=( isWhite ))==null?'':_.escape(__t))+
'">'+
((__t=( text ))==null?'':__t)+
'</span>\r\n  ';
 } 
__p+='\r\n</a>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'text-icon|0.4.6',path:'/template/partials/message',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h1>'+
((__t=( message ))==null?'':__t)+
'</h1>';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'text-icon|0.4.6',path:'/template/asText',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="kniv-text-icon kniv-text-icon--'+
((__t=( orientation ))==null?'':_.escape(__t))+
'">\r\n	<span class="kniv-icon '+
((__t=( icon ))==null?'':__t)+
' kniv-text-icon__icon '+
((__t=( isWhite ))==null?'':_.escape(__t))+
'" aria-hidden="true"></span>\r\n	<span class="kniv-text-icon__text '+
((__t=( isWhite ))==null?'':_.escape(__t))+
'">'+
((__t=( text ))==null?'':__t)+
'</span>\r\n</div>';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'text-icon|0.4.6',path:'/main',module:function(define){'use strict';define(function(require) {
	'use strict';
 
	var _          = require('underscore');
	var Component  = require('Component');
	var linkTemplate   = require('/template/asLink');
	var textTemplate   = require('/template/asText');
 
	return Component.extend({
	   getTemplate: function(){
		   if(this.state.linkType !== 'none') {
			   return linkTemplate;
		   } else {
			   return textTemplate;
		   }
	   },
 
	   filterState: function(state) {
		  return _.extend({}, state);
	   },
	   templateFunctions: function() {
			var _this = this;

			return {
				// Functions allows rendering of sub views, with optional data to be pushed into the renderer. If no data the whole state will be present
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
			}
		}
	});
 });}});