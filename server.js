/* Created By Donovan Wright
This is the server code for Node.js, hopefully it helps you get started!
*/

//Module Used
var ws = require("nodejs-websocket");
//This Will lisetn to port 8001
var server = ws.createServer(function (conn) {
	//When Someone Connects To The WebSocket
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str); //The Message A Client Sends
		conn.sendText(str.toUpperCase()+"!!!"); //Sending The Message Back In All Caps + !!!
	})
	//When A Client's Connection Closes From This WebSocket
	conn.on("close", function (code, reason) {
		console.log("Connection closed");
	})
}).listen(8001)
// ^ Listens To The Port 8001 Ex: MY_IP_HERE:8001 <--
