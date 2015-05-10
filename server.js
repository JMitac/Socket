// Setup basic express server
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
//Estamos creando un nuevo puerto(puerto 3000)
var port = process.env.PORT || 3000;

//Cuenado se prende el servidor se ejecuta esto
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// handle Sockets
//Para que se inicie una nueva conexion
io.on('connection', function (socket) {
  	// when the client emits 'new message', this listens and executes
  	console.log("Entro una nueva Rata");
  	//socket.emit estoy enviando un mensaje al cliente o al servidor
  	//socket.on estoy recibiendo un mensaje al cliente o al servidor
	socket.emit('new message', {
		message: "hola rata"
	});


	socket.on("ratita", function (data) {
		console.log(data);	
	});

	/*-----*/
	socket.on("suma",function (data){
		var sum = parseInt(data.numu) + parseInt(data.numa);
		console.log(sum);
		socket.emit('aqui',{
			resultado: sum      	
		});
	});

	
	

});