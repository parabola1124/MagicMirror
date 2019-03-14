/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
			anytime: [
				"asd",
				"",
				""
			],
			Monday: [
				"09:55-11;30 热工学（教403）",
				"",
				""
			],
			Tuesday: [
				"15:20-16:55 经济学基础（逸205）",
				"",
				""
			],
			Wednesday: [
				"09:55-11;30 热工学（教403）",
				"",
				"",
			]
			Thursday: [
				"17:10-18:45 经济学基础（逸205）",
				"",
				"",
			]
			Friday: [
				"09:55-11;30 热工学（教403）",
				"",
				"",
			]
			Saturday: [
				"JUST HAVE A REST!",
			]
			Sunday: [
				"ADUJST YOURSELF!",
			]
			
	},

	getTemplate: function () {
		return "helloworld.njk"
	},

	getTemplateData: function () {
		return this.config
	}
});
