// IdleTimer
// FlowFabric
// based on http://jeviathon.com/2009/09/21/session-inactivity-timeout-with-dojo/
// Chris de Gelder
// 1-3-2012

dojo.declare("Monitor", null, {
	_events : [[window, 'scroll'], [window, 'resize'], [document, 'mousemove'], [document, 'keydown']],
	_idleTime : null,
	_timers : null,
	idleTime : null,

	constructor : function (time, timers) {
		Monitor.prototype.time = time;
		this._timers = timers;
		this.initObservers();
		this.setTimer();
	},
	initObservers : function () {
		dojo.forEach(this._events, function (e) {
			dojo.connect(e[0], e[1], function (event) {
				Monitor.prototype.onInterrupt();
			});
		});
	},
	onInterrupt : function () {
		this.idleTime = new Date() - this._idleTime;
		dojo.publish("state:active", [this.idleTime]);
		this.setTimer();
	},
	setTimer : function () {
		var oj = Monitor.prototype;
		this.clearTimers();
		this._idleTime = new Date();

		this._timers.push(setTimeout(function () {
				dojo.publish("state:idle", null);
			}, oj.time));

	},
	clearTimers : function () {
		var i;
		if (this._timers) {
			for (i = 0; i < this._timers.length; i=i+1) {
				clearTimeout(this._timers[i]);
			}
		}
		this._timers = [];
	}
});



define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event"

], function (declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent ) {
    "use strict";

    // Declare widget's prototype.
    return declare("idletimer.widget.IdleTimer", [ _WidgetBase], {
		timeout : 0,
		timeoutmicroflow : '',
		userentity : '',
		timeunit : '',
		started : false,
		monitor : null,
		timerArray : null,

		constructor : function () {
		},
		postCreate: function () {

			if (!this.started) {
				var atimeout = this.timeout * 1000; //parameter value from mendix is in seconds, internal msec.
				if (this.timeunit == "min") {
					atimeout = atimeout * 60;
				}
				if (this.timeunit == "hrs") {
					atimeout = atimeout * 60 * 60;
				}
				this.timerArray = [];
				this.monitor = new Monitor(atimeout, this.timerArray);

				dojo.subscribe("state:active", null, dojoLang.hitch(this, this.onActive));
				dojo.subscribe("state:idle", null, dojoLang.hitch(this, this.onIdle));

				this.domNode.removeAttribute("tabindex");
				this.started = true;
			}
		},
		onActive : function (args) {
			this.monitor.clearTimers();
		},
		onIdle : function () {
			if (this.timeoutmicroflow !== "") {
				mx.data.action({
					params: {
						applyto: "selection",
						actionname: this.timeoutmicroflow,
						guids: [ mx.session.getUserId()]
					},
					callback: function (obj) {
					},
					error: dojoLang.hitch(this, function (error) {
						logger.error(this.id + ": An error occurred while executing microflow: " + error.description);
					})
				}, this);			
			}
		}
    });
});

require(["idletimer/widget/IdleTimer"]);
