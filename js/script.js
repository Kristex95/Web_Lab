var currentImage = 0;
var interval = setInterval(()=>{
	changeImage(1);
}, 5000);

function changeImage(n){
	clearInterval(interval);
	var items = document.getElementsByClassName("item");
	items[currentImage].classList.add("d-none");
	currentImage += n;
	if(currentImage+1 > items.length){
		currentImage = 0;
	}
	else if(currentImage < 0){
		currentImage = items.length - 1;
	}
	items[currentImage].classList.remove("d-none");
	interval = setInterval(()=>{
		changeImage(1);
	}, 5000);
}