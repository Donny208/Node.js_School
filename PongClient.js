
/*Code By Donovan Wright, 
This is some client side code (the website), hopefully it should help you get started! Yay!
*/

//Creating An Instance Of The WebSocket
var ws = new WebSocket("ws://192.168.1.130:8080/");

//When The Server Sends A Message
ws.onmessage = function (evt) { 
  var received_msg = evt.data;
  console.log('Message From Server: '+received_msg);
}

//When A Connection Is Established To The WebSocket
ws.onopen = function(){
  console.log('Connected To WebSocket!');
}

//When The Connection Is Closed
ws.onclose = function(){
  console.log('Disconnected From WebSocket!');
}
