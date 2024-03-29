var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['chaplin', 'models/hello_world', 'views/hello_world_view'], function(Chaplin, HelloWorld, HelloWorldView) {
  'use strict';
  var HelloWorldController;
  return HelloWorldController = (function(_super) {

    __extends(HelloWorldController, _super);

    function HelloWorldController() {
      HelloWorldController.__super__.constructor.apply(this, arguments);
    }

    HelloWorldController.prototype.show = function(params) {
      this.model = new HelloWorld();
      return this.view = new HelloWorldView({
        model: this.model
      });
    };

    return HelloWorldController;

  })(Chaplin.Controller);
});
