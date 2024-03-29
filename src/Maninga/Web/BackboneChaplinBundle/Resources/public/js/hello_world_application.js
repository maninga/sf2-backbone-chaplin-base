var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['chaplin', 'views/layout', 'routes'], function(Chaplin, Layout, routes) {
  'use strict';
  var HelloWorldApplication;
  return HelloWorldApplication = (function(_super) {

    __extends(HelloWorldApplication, _super);

    function HelloWorldApplication() {
      HelloWorldApplication.__super__.constructor.apply(this, arguments);
    }

    HelloWorldApplication.prototype.title = 'Chaplin Example Application';

    HelloWorldApplication.prototype.initialize = function() {
      HelloWorldApplication.__super__.initialize.apply(this, arguments);
      this.initDispatcher();
      this.initLayout();
      this.initMediator();
      this.initControllers();
      this.initRouter(routes);
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    HelloWorldApplication.prototype.initLayout = function() {
      return this.layout = new Layout({
        title: this.title
      });
    };

    HelloWorldApplication.prototype.initControllers = function() {};

    HelloWorldApplication.prototype.initMediator = function() {
      Chaplin.mediator.user = null;
      return Chaplin.mediator.seal();
    };

    return HelloWorldApplication;

  })(Chaplin.Application);
});
