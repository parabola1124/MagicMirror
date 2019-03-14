/* Magic Mirror Module: MMM-Fish
 * Version: 1.0.0
 *
 * By Nigel Daniels https://github.com/nigel-daniels/
 * MIT Licensed.
 */

Module.register('MMM-Fish', {


    defaults: {
      fish:   [
                {'id':'anchovy','name':''},
      
                ],
        interval:   3600000*24 // Every 60 mins
        },


        // Define required scripts.
    	getScripts: function() {
    		return ["moment.js"];
    	},

        getStyles: function() {
            return ['fish.css', 'font-awesome.css'];
            },

    	// Define start sequence.
    	start: function() {
    		Log.info("Starting module: " + this.name);

    		this.lastFish = -1;

            var date = new Date;
            this.day = date.getDay();

    		// Schedule update timer.
    		var that = this;
    		setInterval(function() {that.fishOfTheDay();}, this.config.interval);
    	},


    	randomFish: function() {
            var that = this;

    		var generate = function() {
    			return Math.floor(Math.random() * that.config.fish.length);
    		};

    		var fishIndex = generate();

    		while (fishIndex === this.lastFish) {
    			fishIndex = generate();
    		}

    		this.lastFish = fishIndex;

    		return this.config.fish[fishIndex];
    	},


    	fishOfTheDay: function(that) {
            var date = new Date;
            var day = date.getDay();

            console.log('day: ' + day + ', this.day:' + this.day);
            if (day !== this.day) {
                this.day = day;
                this.updateDom(4000);
            }
    	},

    	// Override dom generator.
    	getDom: function() {

    		var fish = this.randomFish();

    		var id = fish.id;
            var fishName = fish.name;

    		var wrapper = document.createElement('div');
    		wrapper.className = "bright fishTank";

			var fishDiv = document.createElement('div');
			fishDiv.className = "fish";

            var image = document.createElement('img');
            image.className = 'fishPic';
            image.src = './modules/MMM-Fish/images/' + id + '.png';

            var name = document.createElement('span');
            name.className = 'fishName';
            name.innerHTML = fishName;
            
            
            var image = document.createElement('img');
            image.className = 'fishsize';
            image.src = './modules/MMM-Fish/images/' + id + '.png';


            fishDiv.appendChild(image);
    		fishDiv.appendChild(name);

			wrapper.appendChild(fishDiv);

    		return wrapper;
    	}
    });
