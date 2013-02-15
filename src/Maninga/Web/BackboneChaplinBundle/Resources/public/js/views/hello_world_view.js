var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['views/base/view', 'text!templates/hello_world.hbs'], function(View, template) {
  'use strict';
  var HelloWorldView;
  return HelloWorldView = (function(_super) {

    __extends(HelloWorldView, _super);

    function HelloWorldView() {
      HelloWorldView.__super__.constructor.apply(this, arguments);
    }

    HelloWorldView.prototype.autoRender = true;

    HelloWorldView.prototype.container = '#page-container';

    HelloWorldView.prototype.className = 'hello-world';

    HelloWorldView.prototype.template = template;

    template = null;

    return HelloWorldView;

  })(View);
});
