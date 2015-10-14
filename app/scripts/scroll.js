var Scroll = function(element){
	this.element = element;

};

Scroll.prototype.scrollLeft = function(){
	this.element.style.position = 'relative';
	
};