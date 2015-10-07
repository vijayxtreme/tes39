"use strict";

var Ziphelp = function(element){

	var $ = angular.element;

	this.elem = element[0];
	this.par = this.elem.parentNode;
	this.input = $(this.par).find('input');

	this.zf = document.createElement('div');
	this.zf.classList.add('zipfinder');

	//ZipFinder clicked?
	this.zf.isClicked = false;

	//Init
	this.par.appendChild(this.zf);
   
};

Ziphelp.prototype.toggle = function(){

	this.elem.addEventListener('click', function(event){
		event.preventDefault();

	    if(this.zf.isClicked) {
	      this.zf.style.display = 'none';
	      this.zf.isClicked = false;
	    }else {
	      this.zf.style.display = 'block';
	      this.zf.isClicked = true;
	    }
	}.bind(this));
};

Ziphelp.prototype.getValue = function(){
	return this.input.val();
};

Ziphelp.prototype.setValue = function(value){
	this.input.val(value);
};

