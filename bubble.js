(function(){
	//Change dimensions to fit screen
	var changeDimensions = function(){
		//Get the dimensions
		var dimensions = document.viewport.getDimensions();

		//Set the wrapper width and height
		document.getElementById('wrapper').style.height = dimensions.height + 'px';
		document.getElementById('wrapper').style.width = dimensions.width + 'px';
	}
	
	//Listen for resize changes
	window.addEventListener('resize', changeDimensions, false);
	
	
}());