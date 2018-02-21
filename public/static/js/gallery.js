$(document).ready(function() {

	var instFeedMore = $("#instFeedMore");
	var instFeedNoMore = $("#instFeedNoMore");

	var feed = new Instafeed({
		get: 'user',
		userId: '3212988450',
		clientId: '930894d108a841d59a364a2615464656',
		accessToken: '3212988450.1677ed0.88ced7c8edd04693a828081c12592161',
		target: 'instagram-feed',
		limit: '8',
		sortBy: 'most-recent',
		resolution: 'standard_resolution',
		template: '<a class="image" href="{{link}}" target="_blank"><p><span class="like">{{likes}}</span><span class="text">{{caption}}</span></p><img src="{{image}}"></a>',
		filter: function(image) {
    		return image.type === 'image';
		},
		after: function () {
			var images = $("#instagram-feed").find('img');
				if (images.length > 8) {
					$(images.slice(8, images.length)).remove();
			}
		},

		filter: function (instDate) {
		// * create new date object and pass in image date
		var date = new Date(instDate.created_time * 1000);
		// * create months array
		var months = new Array(12);
		months[0] = 'January';
		months[1] = 'February';
		months[2] = 'March';
		months[3] = 'April';
		months[4] = 'May';
		months[5] = 'June';
		months[6] = 'July';
		months[7] = 'August';
		months[8] = 'September';
		months[9] = 'October';
		months[10] = 'November';
		months[11] = 'December';
		// * parse month, day and year
		month = date.getMonth();
		day = date.getDate();
		year = date.getFullYear();
		// * concatenate and assign time
		var time = day +'. '+ months[month] + ' ' + year;
		instDate.created_time = time;
		// * end function execution
		return true;
		},

		after: function() {
			if (!this.hasNext()) {
				instFeedMore.hide();
				instFeedNoMore.show();
			} else {
				instFeedMore.show();
				instFeedNoMore.hide();
			}
		},
	});

	// pagination binding
   instFeedMore.on('click', function () {
        feed.next();
    });

	// initialize feed
    feed.run();
});


