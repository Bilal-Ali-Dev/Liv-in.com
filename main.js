var i = 0; 		
var images = [];
var time = 3000;	
	 
images[0] = "all/sofa/sofa-main.png";
images[1] = "all/decor/decor-main.png";
images[2] = "all/bed/bed-main.png";
images[3] = "all/dining/dining-main.png";

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;

