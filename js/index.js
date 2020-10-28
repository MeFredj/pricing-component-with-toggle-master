var clicked = false;
var priceBasic = document.getElementById("price--basic");
var priceProfessional = document.getElementById("price--professional");
var priceMaster = document.getElementById("price--master");

document.getElementById("switch").onclick = function doSomething() {
	if (clicked) {
		priceBasic.innerHTML = "199.99";
		priceProfessional.innerHTML = "249.99";
		priceMaster.innerHTML = "399.99";
		clicked = false;
	} else {
		priceBasic.innerHTML = "19.99";
		priceProfessional.innerHTML = "24.99";
		priceMaster.innerHTML = "39.99";
		clicked = true;
	}
};

$(document).ready(function () {
    if ($(window).width() > 960) {
        $(".card--highlight").fadeIn(1000);
    
        $(".card--basic, .card--master").delay(500).animate({width:'toggle'}, 1000);
     }
     else {

     }
    
});
