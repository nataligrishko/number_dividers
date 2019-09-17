
function Check(){
	var num = document.getElementById("num").value;
	if (isNaN(num)) alert("It must be a number");
	else if (num <= 0) alert("Program works only with positive numbers");
	else if(num - Math.ceil(num) != 0) alert("Program works only with integer numbers");
	else Process(num);
}

function Process(num){
	let div = [];
	div[0] = 1;
	let k = 1; 
	alert("Processing is started!");
	for (let i = 2; i<num-1; i++){
		if (num%i == 0){
			div[k] = i;
			k++;
		}
	}
	div[div.length] = num;
	document.write("Dividers of number " + num + " are: " + div);
}

