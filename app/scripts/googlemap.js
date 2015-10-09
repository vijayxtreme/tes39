var GoogleMap = function(element, scope){
	$ = angular.element;

	var start = scope.formData1.from_zip;
	var end = scope.formData2.to_zip;

	if(start === undefined || start === null || end === undefined || end === null) {
		var start = '90802';
		var end = '90036';
	}
		
	var initializeMap = function(){
		var mapOptions = {
			zoom:8,
			scrollwheel:true,
			navigationControl:true,
			mapTypeControl:true,
			scaleControl:true,
			draggable:true,
			disableDoubleClickZoom:true,
			disableDefaultUI:true,
			mapTypeId: google.maps.MapTypeId.DEFAULT
		};

		//Create new map object
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
		//Calculate distance between two points, add in options 
		var service = new google.maps.DistanceMatrixService();
		service.getDistanceMatrix({
			origins:[start],
			destinations:[end],
			travelMode:   google.maps.TravelMode.DRIVING,
	        unitSystem:   google.maps.UnitSystem.IMPERIAL	
		}, function(response, status){
			if (status == google.maps.DistanceMatrixStatus.OK) {
				//console.log(response);		
			} else {
				//console.log("Failed to calculate distance");
			}
		});
		
		//Render map object
		var directionsDisplay = new google.maps.DirectionsRenderer();
		
		var directionsOptions = {
			markerOptions:{clickable:false}
		};
		
		directionsDisplay.setMap(map);
		directionsDisplay.setOptions(directionsOptions)
		
		var directionsService = new google.maps.DirectionsService();
		
		var request = {
			origin:start,
			destination:end,
			optimizeWaypoints:true,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				var route = response.routes[0];
			}
		});
	};

	initializeMap();
};
