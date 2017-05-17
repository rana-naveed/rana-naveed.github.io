var scroller = null;
var marginY = 0;
var speed = 10;
var destination = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	marginY = marginY + speed;
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);
	if(marginY >= destination){
		clearTimeout(scroller);
	}
	
	window.scroll(0,marginY);
}

function toTop(){
	marginY = marginY - speed;
	scroller = setTimeout(function(){
		toTop();
	}, 1);
	if(marginY <= 0){
		clearTimeout(scroller);
	}
	window.scroll(0,marginY);
}


    
