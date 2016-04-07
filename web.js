/* Created By Donovan Wright
This is the server code for Node.js, hopefully it helps you get started!
*/

var stdin = process.openStdin()
var ws = require("nodejs-websocket");

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("Readline: "+d);
    if (d.toString().slice(0,5) === '!send'){
    	msg = 'From Websocket: '+d.slice(6,255);
    	console.log(msg);
    	broadcast(server,msg);
    }
});
//Module Used

//This Will lisetn to port 8001
var server = ws.createServer(function (conn) {
	//When Someone Connects To The WebSocket
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str); //The Message A Client Sends
	})
	//When A Client's Connection Closes From This WebSocket
	conn.on("close", function (code, reason) {
		console.log("Connection closed");
	})
}).listen(8001)

function broadcast(server, msg) {
	server.connections.forEach(function (conn) {
		conn.sendText(msg)
	})
}
