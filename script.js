var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function randomGradient () {
	var letters1 = '0123456789ABCDEF';
	var letters2 = '0123456789ABCDEF';
  	var colora = '#';
  	var colorb = '#';
  	for (var i = 0; i < 6; i++) {
    	colora += letters1[Math.floor(Math.random() * 16)];
    	colorb += letters2[Math.floor(Math.random() * 16)];
  	}
  	
  	color1.value = colora;
  	color2.value = colorb;
  	console.log(colora, colorb);
  	setGradient();
	
}


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";

	css.textContent = body.style.background + ";";
}


btn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

