"use strick";
window.addEventListener("load",load);

function load() {
	var socket = io();
	var rataBoton = document.getElementById("rataBoton");

	socket.on('new message', function (data) {
		console.log(data);
	});

	rataBoton.onclick = function(){
		socket.emit('ratita',{
			rata: "christian"
		});
	};

	var num1 = document.getElementById("a");
	var num2 = document.getElementById("b");
	var sum = document.getElementById("Sumar");
	var result = document.getElementById("result");
	//result = Number(num1) + Number(num2);

	sum.onclick = function(){
		console.log("data");
		socket.emit('suma',{
			numu : num1.value,
			numa : num2.value
		});
	};
	
	socket.on('aqui',function (data){
		console.log(data);
		result.value = data.resultado;
	});


}



