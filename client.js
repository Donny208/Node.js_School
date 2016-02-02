/*Code By Donovan Wright, 
This is some client side code (the website), hopefully it should help you get started!
*/
var ws = new WebSocket("ws://PUT_YOUR_IP_HERE:8001/");

ws.onmessage = function (evt) { 
  var received_msg = evt.data;
  console.log('Message From Server: '+received_msg);
}

ws.onopen = function(){
  console.log('Connected To WebSocket!');
}

ws.onclose = function(){
  console.log('Disconnected From WebSocket!');
}
