(function(){
	var a, b, g;
	
	setInterval(function(){
		process(a, b, g);
	}, 100);
	
	//Change dimensions to fit screen
	var changeDimensions = function(){
		//Get the dimensions
		var dimensions = document.viewport.getDimensions();

		//Set the wrapper width and height
		document.getElementById('wrapper').style.height = dimensions.height + 'px';
		document.getElementById('wrapper').style.width = dimensions.width + 'px';
		document.getElementById('notSupportedBackground').style.height = dimensions.height + 'px';
		document.getElementById('notSupportedBackground').style.width = dimensions.width + 'px';
		document.getElementById('notSupported').style.width = (dimensions.width - 90) + 'px';
		document.getElementById('vertical').style.height = dimensions.height - 150 + 'px';
	}
	
	//Round
	var round = function(number, decimalPlaces) {
		return Math.round(number*Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
	}
	
	//Process orientation
	var process = function(a, b, g) {
		var horizontal = round(g,1);
		if (horizontal < -20) {horizontal = -20}
		if (horizontal > 20) {horizontal = 20}
		horizontal = 100 - (horizontal * 2.29 + 50);
		document.getElementById('horizontalMarker').style.left = horizontal + '%';
		
		var vertical = round(b,2);
		if (vertical < -20) {vertical = -20}
		if (vertical > 20) {vertical = 20}
		vertical = 100 - (vertical * 2.29 + 50);
		document.getElementById('verticalMarker').style.top = vertical + '%';
	}
	
	
	
	//Listen for resize changes
	window.addEventListener('resize', changeDimensions, false);
	
	//Start the dimension
	changeDimensions();
	
	//Check for support
	window.addEventListener('load', function(){
		if (!window.isMotionSupported()) {
			document.getElementById('notSupportedBackground').style.display = '';
			document.getElementById('notSupported').style.display = '';
		}
	}, false);
	
	//Supported
	document.getElementById('supported').style.display = '';
	window.addEventListener("deviceorientation", function(event) {
		a = event.alpha;
		b = event.beta;
		g = event.gamma;
	}, false);
	
	// Check if a new cache is available on page load.
	window.addEventListener('load', function(e) {
		window.applicationCache.addEventListener('updateready', function(e) {
			if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
				// Browser downloaded a new app cache.
				// Swap it in and reload the page to get the new hotness.
				window.applicationCache.swapCache();
				if (confirm('A new version of this site is available. Load it?')) {
					window.location.reload();
				}
			} else {
				// Manifest didn't changed. Nothing new to server.
			}
		}, false);
	}, false);
	
	
}());