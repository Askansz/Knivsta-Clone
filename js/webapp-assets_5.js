AppRegistry.registerBundle({applicationId:'Puff|0.1.26',bundle: {"en":{},"sv":{}}});
AppRegistry.registerModule({applicationId:'Puff|0.1.26',path:'/template/page',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 if(image) { 
__p+='\r\n<div class="kniv-puff-image" style="background-image: url('+
((__t=( image ))==null?'':__t)+
')"></div>\r\n';
 } 
__p+='\r\n<div class="kniv-puff-content">\r\n  <div class="kniv-puff-upper">\r\n    ';
 if(section) { 
__p+='\r\n    <div class="kniv-puff-section">\r\n      <span class="kniv-icon '+
((__t=( icon ))==null?'':__t)+
'"></span>\r\n      <p class="kniv-puff-category">'+
((__t=( section ))==null?'':__t)+
'</p>\r\n    </div>\r\n    ';
 } 
__p+='\r\n    <h2 class="kniv-puff-header">'+
((__t=( title ))==null?'':_.escape(__t))+
'</h2>\r\n  </div>\r\n  <div class="kniv-puff-lower-content">\r\n    <p class="kniv-puff-preamble">'+
((__t=( preamble ))==null?'':__t)+
'</p>\r\n  </div>\r\n  <div class="kniv-puff-lower">\r\n    <div class="kniv-puff-button"></div>\r\n  </div>\r\n</div>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'Puff|0.1.26',path:'/template/training',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 if(image) { 
__p+='\r\n<div class="kniv-puff-image" style="background-image: url('+
((__t=( image ))==null?'':__t)+
')"></div>\r\n';
 } 
__p+='\r\n<div class="kniv-puff-content">\r\n	<div class="kniv-puff-upper">\r\n		<h3 class="kniv-puff-header">'+
((__t=( title ))==null?'':_.escape(__t))+
'</h3>\r\n	</div>\r\n	<div class="kniv-puff-lower-content">\r\n		<small class="kniv-puff-preamble kniv-puff-preamble--small">'+
((__t=( targetGroup ))==null?'':_.escape(__t))+
'</small>\r\n	</div>\r\n	<div class="kniv-puff-lower">\r\n		<div class="kniv-puff-button"></div>\r\n	</div>\r\n</div>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'Puff|0.1.26',path:'/template/building',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 if(image) { 
__p+='\r\n<div class="kniv-puff-image" style="background-image: url('+
((__t=( image ))==null?'':__t)+
')"></div>\r\n';
 } 
__p+='\r\n<div class="kniv-puff-content">\r\n	<div class="kniv-puff-upper">\r\n		<h3 class="kniv-puff-header">'+
((__t=( title ))==null?'':_.escape(__t))+
'</h3>\r\n	</div>\r\n	<div class="kniv-puff-lower-content">\r\n		<small class="kniv-puff-preamble kniv-puff-preamble--small">'+
((__t=( finished ))==null?'':_.escape(__t))+
'</small>\r\n		<small class="kniv-puff-preamble kniv-puff-preamble--small">Status: '+
((__t=( status ))==null?'':_.escape(__t))+
'</small>\r\n		<p class="kniv-puff-preamble">'+
((__t=( preamble ))==null?'':__t)+
'</p>\r\n	</div>\r\n	<div class="kniv-puff-lower">\r\n		<div class="kniv-puff-button"></div>\r\n	</div>\r\n</div>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'Puff|0.1.26',path:'/template/storytelling',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 if(image) { 
__p+='\r\n<div class="kniv-puff-image" style="background-image: url('+
((__t=( image ))==null?'':__t)+
')"></div>\r\n';
 } 
__p+='\r\n<div class="kniv-puff-content">\r\n	<div class="kniv-puff-upper">\r\n		<div class="kniv-puff-section">\r\n			<span class="kniv-icon kniv-icon-storytelling"></span>\r\n			<p class="kniv-puff-category">Storytelling</p>\r\n		</div>\r\n		<h3 class="kniv-puff-header">'+
((__t=( title ))==null?'':_.escape(__t))+
'</h3>\r\n	</div>\r\n	<div class="kniv-puff-lower-content">\r\n		<small class="kniv-puff-preamble kniv-puff-preamble--small">'+
((__t=( date ))==null?'':_.escape(__t))+
'</small>\r\n		<small class="kniv-puff-preamble kniv-puff-preamble--small">'+
((__t=( person ))==null?'':_.escape(__t))+
'</small>\r\n	</div>\r\n	<div class="kniv-puff-lower">\r\n		<div class="kniv-puff-button"></div> <!-- What is this for? -->\r\n	</div>\r\n</div>\r\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'Puff|0.1.26',path:'/main',module:function(define){'use strict';define(function(require) {
	'use strict';
 
	var _          = require('underscore');
	var Component  = require('Component');
	var pageTemplate   = require('/template/page');
	var buildingTemplate = require('/template/building');
	var trainingTemplate = require('/template/training');
	var storytellingTemplate = require('/template/storytelling');
 
	return Component.extend({
		tagName: 'a',
		attributes: function(){
			var base = {
				class: 'kniv-puff kniv-puff--' + this.state.color + ' kniv-puff--' + this.state.showAs + (this.state.image ? '' : ' no-image'),
				href: this.state.target,
				title: this.state.title
			}
			if(this.state.newTab) {
				Object.assign(base, {
					rel: 'external'
				})
			}
			return base;
		},
	   getTemplate: function(){
			switch(this.state.showAs){
				case 'storytelling':
					return storytellingTemplate;
				case 'building':
					return buildingTemplate;
				case 'training':
					return trainingTemplate;
				case 'page':
				default:
					return pageTemplate;
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