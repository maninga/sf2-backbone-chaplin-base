var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['chaplin', 'models/base/model'], function(Chaplin, Model) {
  'use strict';
  var HelloWorld;
  return HelloWorld = (function(_super) {

    __extends(HelloWorld, _super);

    function HelloWorld() {
      HelloWorld.__super__.constructor.apply(this, arguments);
    }

    HelloWorld.prototype.defaults = {
      message: 'Hello World!'
    };

    return HelloWorld;

  })(Model);
});
