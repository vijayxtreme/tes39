"use strict";

var GoogleSearch = function(element, scope){
	this.$ = angular.element;
	this.elem = element[0];  //the input
	this.placeSearch; 
	this.place;
	this.scope = scope;
	this.autocomplete;
	this.ziphelp = this.elem.parentNode.parentNode; //ziphelp
	this.input = $('.step input[type="tel"]'); //fix later to be a class
	this.inputId = $(this.input).attr('id');

	this.componentForm = {
	  street_number: 'short_name',
	  route: 'long_name',
	  locality: 'long_name',
	  administrative_area_level_1: 'short_name',
	  country: 'long_name',
	  postal_code: 'short_name'
	};

	this.autocomplete = new google.maps.places.Autocomplete((this.elem), {type: ['geocode']});
	
	var self = this; 

	//remember to bind shit or things will get outta place
	this.$(this.elem).keypress(function(e){
		 if (e.which == 13) {
			google.maps.event.addListener(self.autocomplete, 'place_changed', function() {
		      self.fillInAddress();
			 });
    		return false;
		}
	});
};

GoogleSearch.prototype.fillInAddress = function(){
	this.place = this.autocomplete.getPlace();

	var self = this;
   	
	var array = [];
	
	try {

		for (var i = 0; i < this.place.address_components.length; i++) {
	   		var addressType = this.place.address_components[i].types[0];
	    	if (this.componentForm[addressType]) { 
	    		//postal code prop found?
	      		var val = this.place.address_components[i][this.componentForm[addressType]]; //to get zip
	      		array[addressType] = val; //array postal code = zip
	    	}
	  	}
				
		if(array['postal_code'] != null){
			var zip = array['postal_code'];

			self.input.val("");
			self.input.val(array['postal_code']);
			$(self.input).validate();
    		$(self.ziphelp).hide();
    		self.scope.formData[self.inputId] = zip;
            self.scope.$apply();
    		// scope.formData[gs.inputId] = gs.input[0].value;
     		// scope.$apply();
    		
		} else {
		    var formdata = { 
	    	  'city': array['locality'],
	    	  'state': array['administrative_area_level_1']
	    	};

	    	var url = "http://www.omdbapi.com/";
		    	var payload = {
		    		't':'Game of Thrones',
		    		'Season':'1',
		    		'Episode':'1'
		    	};
			$promise(url)
		    	.get(payload)
		    	.then(function(data){
		    		console.log(data);
		    		$(self.ziphelp).hide();
		    	}, function(error){
		    		console.log(error);
		    	});

	  	}
	}
	catch(e){
		//
	}




};

