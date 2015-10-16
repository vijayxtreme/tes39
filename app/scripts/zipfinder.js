"use strict";

var Ziphelp = function(element){

	var $ = angular.element;
	var self = this;

	this.zf = element[0];
	this.par = this.zf.parentNode;
	this.input = $(this.par).find('input');
	this.close = $(this.par).find('.close')[0];

	//ZipFinder clicked?
	this.zf.isClicked = false;

	this.close.addEventListener('click', function(){
		this.zf.style.display="none";
		this.zf.isClicked = false;

	}.bind(this));

	$(document).mouseup(function (e) {
	    var container = $(self.zf);

	    if (!container.is(e.target) && container.has(e.target).length === 0){
	        container.hide();
	        self.zf.isClicked = false;

	    }
	});

};


Ziphelp.prototype.close = function(){
	this.zf.style.display="none";
	this.zf.isClicked = false;


};


Ziphelp.prototype.toggle = function(){
	  if(this.zf.isClicked) {
	      this.zf.style.display = 'none';
	      this.zf.isClicked = false;
	    }else {
	      this.zf.style.display = 'block';
	      this.zf.isClicked = true;
	      this.input.focus();
	    }
};

Ziphelp.prototype.getValue = function(){
	return this.input.val();
};

Ziphelp.prototype.setValue = function(value){
	this.input.val(value);
};

