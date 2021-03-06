'use strict';
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  LaunchRequest: function() {
    this.emit('SayHello');
  },
  HelloWorldIntent: function() {
    this.emit('SayHello');
  },
  SayHello: function() {
    this.emit(':tell', 'Hello Fullstack 1,702!');
  }
};
