/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "http://p10-calendars.icloud.com/holiday/CN_zh.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
			{
			module: "helloworld",
			position: "center"
		},
		{
			module: 'MMM-NOAA3',
			position: 'top_right',
			config: {
			provider: "accuweather",   
			apiKey: "Yq5eLglt45T2RFwDQaEZZNfIs3ZV1wPK",
			airKey: "jP75Bxy8dM6Hd3fRg",
			css: "NOAA3",                 // THIS MUST CONTAIN A CSS STYLE NAME 
			userlat: "39.917",
			userlon: "116.407",  //MUST HAVE BOTH
			zip: "101924" //MUST have valid zip Code
			}
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
				{
				title: "国内热点",
				url: "http://www.people.com.cn/rss/politics.xml",
				encoding: "UTF-8" //ISO-8859-1
				}
				],
				showSourceTitle: false,
				showPublishDate: false
			}
		},
	{
			module: 'MMM-Events',
			position: 'top_center',
			config: {
			city: "Beijing",	           // Your City
			eventType: "book,music", // One or more, seperated by commas. Choose from Events List below
			when: "Future",                 // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name, e.g. "October"
			mode: "noFrame",                   // "Frame" or "noFrame" (around picture)
			apikey: "gw89dmbQzwVckCSj",
			rotateInterval: 5 * 60 * 1000,     // New Event Appears every 5 minutes
			useHeader: false,	           // Set to true if you want a header
			header: "",
			animationSpeed: 3000,              // Event fades in and out
			picture: true,                     // true, false = no image
		}
		},  
		
		{
    module:		'MMM-Fish',
    header:		'schedule',
    position:	'center'
}, 
	{
			module: 'voicecontrol',
			position: 'bottom_left',
			config: {
				models: [
					{
						keyword: "公主",   // keyword 
						description: "9:55-11:30 自动控制理论（机电106）",
						file: "公主.pmdl", // trained model file name
						message: "HIDE_MMM-Events"   // notification message that's broadcast in the MagicMirror app
					},
					/*{
						keyword: "stopMusic",
						description: "Say 'Stop Music' to stop playing",
						file: "stopMusic.pmdl",
						message: "STOP_MUSIC"
					},*/
				]
			}
		}
	
		]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
