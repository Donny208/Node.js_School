p1r = false;
p2r = false;
x=0;
y=0;

//Module Used
var ws = require("nodejs-websocket");
var server = ws.createServer(function (conn) {
	//When Someone Connects To The WebSocket
	console.log("New connection")
	conn.on("text", function (str) {
		data = JSON.parse(str);
		console.log("Received "+data.message); //The Message A Client Sends

		//Logging Them In
		if (data.type === 'login'){
			if (data.message === 'p1'){
				p1 = conn;
				p1r = true;
				conn.sendText('You Are Donovan');
				playerCheck();
			}
			else if(data.message === 'p2'){
				p2 = conn;
				p2r = true;
				conn.sendText('You Are Jake :D!');
				playerCheck();
			}
		}
	})
	//When A Client's Connection Closes From This WebSocket
	conn.on("close", function (code, reason) {
		console.log("Connection closed");
	})
}).listen(8080)

function playerCheck(){
	if(p2r === true && p1r === true){
		console.log('IM READYYYYY -SPONGEBOB SQUAREPANTS')
		p1.sendText('0001');
		p2.sendText('0002');
		ps = 'p1';
		xdir1 = 'right';
		xdir2 = 'stop'
		current = setInterval(function(){
			//Seeing where x is
			if (x >= 2014 && ps === 'p1'){
				xdir1 = 'left';
				console.log('HIT')
			}
			else if (x < 0 && ps === 'p1'){
				xdir1 = 'stop';
				xdir2 = 'left';
				ps = 'p2';
				x = 2014;
				console.log('james')
			}
			//x direction
			if (xdir1 === 'left' && ps === 'p1'){
				x = x-12;
			}
			else if (xdir1 === 'right' && ps === 'p1'){
				x = x+12;
			}
			else if (xdir1 === 'stop' && ps === 'p1'){
				x = x;
			}

			if (x < 0 && ps === 'p2'){
				xdir2 = 'right';
			}
			else if(x > 2014 && ps === 'p2'){
				xdir2 = 'stop';
				xdir1 = 'right';
				ps = 'p1';
				x = 10;
			}

			if (xdir2 === 'stop' && ps === 'p2'){
				x = x;
			}
			else if (xdir2 === 'right' && ps === 'p2'){
				x = x + 10
			}
			else if (xdir2 === 'left' && ps === 'p2'){
				x = x - 10
			}
			console.log(x)





			stuff = {
				'type':'cords',
				'x':x,
				'y':y,
				'screen':ps
			}
			p1.sendText(JSON.stringify(stuff));
			p2.sendText(JSON.stringify(stuff));
		},10)
	}
}
