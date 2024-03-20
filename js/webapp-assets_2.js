AppRegistry.registerBundle({applicationId:'vizzit-integration-0.0.6|0.0.6',bundle: {}});
AppRegistry.registerModule({applicationId:'vizzit-integration-0.0.6|0.0.6',path:'/template/index',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<script>\n  $vizzit$ = typeof $vizzit$ != "undefined" ? $vizzit$ : {};\n  $vizzit$ = {\n    keys: $vizzit$.keys || {},\n    config: $vizzit$.config || {},\n    client: $vizzit$.client || {},\n    endpoint: $vizzit$.endpoint || {},\n    page: $vizzit$.page || {},\n  };\n</script>\n\n<script>\n  $vizzit$.keys.public = \''+
((__t=( settings.keys.public ))==null?'':__t)+
'\';\n  $vizzit$.keys.private = \''+
((__t=( settings.keys.private ))==null?'':__t)+
'\';\n  $vizzit$.config.cookie = '+
((__t=( settings.config.cookie ))==null?'':__t)+
';\n  $vizzit$.config.cookie_auto = '+
((__t=( settings.config.cookie_auto ))==null?'':__t)+
';\n  $vizzit$.config.tag = '+
((__t=( settings.config.tag ))==null?'':__t)+
';\n  $vizzit$.config.tagman = '+
((__t=( settings.config.tagman ))==null?'':__t)+
';\n  $vizzit$.config.username_tag = '+
((__t=( settings.config.username_tag ))==null?'':__t)+
';\n  $vizzit$.config.username_source = \''+
((__t=( settings.config.user.currentSource ))==null?'':__t)+
'\';\n  $vizzit$.config.anonymize_ip = '+
((__t=( settings.config.anonymize_ip ))==null?'':__t)+
';\n  $vizzit$.config.ajax = '+
((__t=( settings.config.ajax ))==null?'':__t)+
';\n  $vizzit$.config.automatic_login = '+
((__t=( settings.config.automatic_login ))==null?'':__t)+
';\n  $vizzit$.page.id = sv.PageContext.pageId || null;\n\n  $vizzit$.client.plugin = {\n    enabled: true,\n    sitevision: {\n      enabled: true\n    }\n  };\n</script>\n\n';
 if (settings.custom_integration_endpoint) { 
__p+='\n<script>\n  $vizzit$.endpoint.integration = "'+
((__t=( settings.endpoint.integration ))==null?'':__t)+
'";\n</script>\n';
 } 
__p+='\n\n';
 if (settings.enable_vizzit_btn) { 
__p+='\n<script>\n  var inEditMode = '+
((__t=( inEditMode ))==null?'':__t)+
';\n  var editingPage = window.parent.document.querySelectorAll("[data-view-type=\'page\']").length;\n\n  if (inEditMode && editingPage)\n    $vizzit$.client.plugin.sitevision.edit_mode = true;\n</script>\n';
 } 
__p+='\n\n';
 if (settings.client.username) { 
__p+='\n<script>\n  $vizzit$.client.username = \''+
((__t=( settings.client.username ))==null?'':__t)+
'\';\n</script>\n';
 } 
__p+='\n\n<script src="'+
((__t=( getResourceUrl('vizzit.integration.js') ))==null?'':__t)+
'"></script>\n\n';
 if (inEditMode || !settings.disable_auto_integration) { 
__p+='\n<script>\n  $vizzit$.integration.run();\n</script>\n';
 } 
__p+='\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'vizzit-integration-0.0.6|0.0.6',path:'/main',module:function(define){'use strict';define(function (require) {
  'use strict';

  var Component = require('Component');
  var template = require('/template/index');

  /**
   * Extend Vizzit component with custom template
   */
  return Component.extend({
    template: template
  });
});}});