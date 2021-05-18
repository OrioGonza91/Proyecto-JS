//Declaro variables
var calcInputA= document.getElementById("calcInputA");
var calcInputB= document.getElementById("calcInputB");
var calcInputR= document.getElementById("calcInputR");

//Declaro método o función
/*function calculadora(action) {
	if (action == "borrar") {
		calcInputR.value = "";
		calcInputA.value = "";
		calcInputB.value = "";

		return;
	}

	if (isNaN(calcInputA.value) || isNaN(calcInputB.value)) {
		calcInputR.value = "";

		return;
	}

	if (action == "sum") {
		calcInputR.value = Number(calcInputA.value) + Number(calcInputB.value);

		return;
	}

	if (action == "sub") {
		calcInputR.value = Number(calcInputA.value) - Number(calcInputB.value);

		return;
	}

	if (action == "mul") {
		calcInputR.value = Number(calcInputA.value) * Number(calcInputB.value);

		return;
	}

	if (action == "div") {
		if (Number(calcInputB.value) != 0) {
			calcInputR.value = Number(calcInputA.value) / Number(calcInputB.value);

			return;
		}

		calcInputR.value = "";
	}

}*/

function calculadora(action) {
	if (action == "borrar") {
		calcInputR.value = "";
		calcInputA.value = "";
		calcInputB.value = "";

		return;
	}	

	if (isNaN(calcInputA.value) || isNaN(calcInputB.value)) {
		calcInputR.value = "";

		return;
	}

	switch(action) {
		case "sum": 
			calcInputR.value = Number(calcInputA.value) + Number(calcInputB.value);
				break;

		case "sub":
			calcInputR.value = Number(calcInputA.value) - Number(calcInputB.value);
				break;

		case "mul":
			calcInputR.value = Number(calcInputA.value) * Number(calcInputB.value);
				break;

		case "div":
			if (Number(calcInputB.value) != 0) {
				calcInputR.value = Number(calcInputA.value) / Number(calcInputB.value);
			}
			else {
				calcInputR.value = "";
			}
				break;						
	}	

}