
/*Code By Donovan Wright, 
This is some client side code (the website), hopefully it should help you get started! Yay!
*/

//Creating An Instance Of The WebSocket
var ws = new WebSocket("ws://192.168.1.130:8080/");

//When The Server Sends A Message
ws.onmessage = function (evt) { 
	var msg = evt.data;
	if (msg.slice(0,4) === '0001'){
		console.log('Ball Starts Here');
	}

	else if(msg.slice(0,4) === '0002'){
		console.log('Game Starting On Other screen')
	}
	else{
  		console.log('Message From Server: '+msg);
  	}
}

//When A Connection Is Established To The WebSocket
ws.onopen = function(){
	console.log('Connected To WebSocket!');
}

//When The Connection Is Closed
ws.onclose = function(){
	console.log('Disconnected From WebSocket!');
}
