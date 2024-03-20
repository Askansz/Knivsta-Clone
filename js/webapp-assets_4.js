AppRegistry.registerBundle({applicationId:'hero-image|0.0.6',bundle: {"en":{},"sv":{}}});
AppRegistry.registerModule({applicationId:'hero-image|0.0.6',path:'/template/partials/message',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'hero-image|0.0.6',path:'/template/main',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="kniv-hero">\r\n	<div class="kniv-hero__image kniv-hero__image--background">\r\n		<img src="'+
((__t=( image ))==null?'':_.escape(__t))+
'" alt="'+
((__t=( alt ))==null?'':_.escape(__t))+
'" />\r\n	</div>\r\n\r\n	<div class="kniv-hero__content">\r\n		<div class="kniv-hero__image kniv-hero__image--wave ';
 if(preamble) { 
__p+=' kniv-hero__image--padding ';
 } 
__p+='">\r\n			<img src="'+
((__t=( wave ))==null?'':_.escape(__t))+
'" alt="'+
((__t=( alt ))==null?'':_.escape(__t))+
'" />\r\n		</div>\r\n\r\n		<div class="kniv-hero__container kniv-hero__container--top sv-fluid-grid sv-grid-knivsta-grid kniv-content-padding--medium ">\r\n			<h1 class="kniv-hero__text kniv-hero__text--title kniv-hero__text--white ">'+
((__t=( titleFirst ))==null?'':__t)+
'\r\n				<span class="kniv-hero__text kniv-hero__text--title kniv-hero__text--themeColor">'+
((__t=( titleSecond ))==null?'':__t)+
'</span>\r\n			</h1>\r\n			';
 if (buttonList.length) { 
__p+=' \r\n				<ul class="kniv-hero__links kniv-hero__links--list kniv-hero__links--'+
((__t=(listClass ))==null?'':_.escape(__t))+
'">\r\n				';
 buttonList.forEach(linkButton=> { 
__p+='\r\n					';
 if (linkButton.text && linkButton.link) { 
__p+=' \r\n						<li class="kniv-hero__links kniv-hero__links--item">\r\n							<a href="'+
((__t=( linkButton.link ))==null?'':_.escape(__t))+
'" aria-label="'+
((__t=( linkButton.text ))==null?'':_.escape(__t))+
'">'+
((__t=( linkButton.text ))==null?'':_.escape(__t))+
'</a>\r\n						</li>\r\n					';
 } 
__p+='\r\n				';
 }) 
__p+='\r\n				</ul>\r\n			';
 } 
__p+='\r\n		</div>\r\n\r\n		';
 if(preamble) { 
__p+='\r\n			<p class="kniv-hero__text kniv-hero__text--preamble kniv-preamble sv-fluid-grid sv-grid-knivsta-grid kniv-content-padding--medium ">\r\n				'+
((__t=( preamble ))==null?'':__t)+
'\r\n			</p>\r\n		';
 } 
__p+='\r\n	</div>\r\n</div>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'hero-image|0.0.6',path:'/main',module:function(define){'use strict';define(function(require) {
	'use strict';
 
	var _          = require('underscore');
	var Component  = require('Component');
	var template   = require('/template/main');
 
	return Component.extend({
 
	   template: template,
 
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
							return _this.renderTemplate(template, data);
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