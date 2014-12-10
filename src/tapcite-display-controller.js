'use strict';

var XD = require('./postmessage.js');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Tapcite = function() {
    EventEmitter.call(this);

    var self = this;
    var parent_url;
    var id;

    XD.receiveMessage(function(event) {
        if(event.data === 'slide:start' || event.data === 'slide:stop' || typeof event.data !== 'object' || !event.data.event) {
            return false;
        }

        parent_url = event.origin;
        id = event.data.id;
        self.emit(event.data.event, event.data.data);
    });

    this.send = function(eventName,data) {
        XD.postMessage({
            event: eventName,
            id: id,
            data: data
        }, parent_url, window.parent);
    };

    this.text = function(key,value) {
        this.send('text',{
            key: key,
            value: value
        });
    };

    this.data = function(key,value) {
        this.send('data',{
            key: key,
            value: value
        });
    };

    this.go = function(target) {
        this.send('go',{
            target: target
        });
    };

};
util.inherits(Tapcite, EventEmitter);

global.Tapcite = new Tapcite();