var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Victoria");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// color2.addEventListener("input", function() {
// 	body.style.background =
// 		"linear-gradient(to left, "
// 		+ color2.value
// 		+ ", "
// 		+ color1.value
// 		+")";
// })
