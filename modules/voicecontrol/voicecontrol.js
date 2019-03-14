
'use strict';
/* Magic Mirror
 * Module: voicecontrol
 *
 * By Alex Yakhnin
 * MIT Licensed.
 */

Module.register("voicecontrol", {

	// Default module config.

    defaults: {
		models: [
					{
						keyword: "关闭事件",
						description: "Say '关闭事件' to hide enenvs",
						file: "关闭.pmdl",
						message: "HIDE_MMM-Events"
					},
					{
						keyword: "Hide Camera",
						description: "Say 'Hide Camera' to hide camera",
						file: "hideCamera.pmdl",
						message: "HIDE_CAMERA"
					},
					{
						keyword: "Selfie",
						description: "Say 'Selfie' when camera is visible",
						file: "selfie.pmdl",
						message: "SELFIE"
					},    */
				]
	},

    start: function() { 

        this.sendSocketNotification("CONNECT", this.config);

    },

    getStyles: function() {
		return ['voicecontrol.css'];
	},

    socketNotificationReceived: function(notification, payload,关闭事件){
        if (notification === "关闭事件"){
            //Broadcast the message
            this.MMM-Events.hide(payload.message, {type: "notification"});
        }
	},

    getDom: function() {
        var wrapper = document.createElement("div");
        var header = document.createElement("header");
        header.innerHTML = "schedule";
        wrapper.appendChild(header);
        var models = this.config.models;

        models.forEach(function(model) {
            var command = document.createElement("div");
            command.innerHTML = model.description;
            command.className = "small dimmed top";
            wrapper.appendChild(command);
        }, this);

        return wrapper;
    }

});
