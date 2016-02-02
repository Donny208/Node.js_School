/*Code By Donovan Wright, 
This is some client side code (the website), hopefully it should help you get started!
*/

//Creating An Instance Of The WebSocket
var ws = new WebSocket("ws://PUT_YOUR_IP_HERE:PORT_HERE/");

//When The Server Sends A Message
ws.onmessage = function (evt) { 
  var received_msg = evt.data;
  console.log('Message From Server: '+received_msg);
}

//When A Connection Is Established To The WebSocket
ws.onopen = function(){
  console.log('Connected To WebSocket!');
  ws.send('Hello World!'); //Sending A Message To The Server When It Opens
}

//When The Connection Is Closed
ws.onclose = function(){
  console.log('Disconnected From WebSocket!');
}
