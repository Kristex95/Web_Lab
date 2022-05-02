var currentImage = 0;

function changeImage(n){
	var items = document.getElementsByClassName("item");
	items[currentImage].setAttribute("class", "item d-none");
	currentImage += n;
	if(currentImage+1 > items.length){
		currentImage = 0;
	}
	else if(currentImage < 0){
		currentImage = items.length - 1;
	}
	items[currentImage].setAttribute("class", "item");
}

setInterval(function(){
	changeImage(1);
}, 5000);