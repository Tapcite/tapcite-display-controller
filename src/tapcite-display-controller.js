'use strict';

var XD = require('./postmessage.js');
var EventEmitter = require('events').EventEmitter;

var Tapcite = function() {
    EventEmitter.call(this);

    var self = this;
    XD.receiveMessage(function(event) {
        if(event.data === 'slide:start' || event.data === 'slide:stop' || typeof event.data !== 'object' || !event.data.event) {
            return false;
        }

        self.emit(event.data.event, event.data.data);
    });
};
Tapcite.prototype = new EventEmitter();

global.Tapcite = new Tapcite();