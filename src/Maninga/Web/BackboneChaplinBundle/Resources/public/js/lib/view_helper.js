var __slice = Array.prototype.slice;

define(['handlebars', 'chaplin', 'lib/utils'], function(Handlebars, Chaplin, utils) {
  'use strict';  Handlebars.registerHelper('url', function() {
    var params, routeName, url;
    routeName = arguments[0], params = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    url = null;
    Chaplin.mediator.publish('!router:reverse', routeName, params, function(result) {
      return url = result;
    });
    return "/" + url;
  });
  return null;
});
