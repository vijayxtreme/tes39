"use strict";

var Ziphelp = function(element){

	this.zf = document.createElement('div'),
	this.zf.classList.add('zipfinder'),
	this.zf.isClicked = false;

	this.elem = element[0];
	
	//Init
	this.elem.parentNode.appendChild(this.zf);
   
};

Ziphelp.prototype.toggle = function(){
	var zf = this.zf;

	this.elem.addEventListener('click', function(event){
		event.preventDefault();
	    if(zf.isClicked) {
	      zf.style.display = 'none';
	      zf.isClicked = false;
	    }else {
	      zf.style.display = 'block';
	      zf.isClicked = true;
	    }
	});
};