var ws = new WebSocket("ws://192.168.1.130:8080/");
game = false;
//When The Server Sends A Message
ws.onmessage = function (evt) { 
  var msg = evt.data;
  if (msg.slice(0,4) === '0001'){
    console.log('Ball Starts Here');
    $('#ball').css({display: 'block'});
    game = true
    player = 'p1';
  }

  else if(msg.slice(0,4) === '0002'){
    console.log('Game Starting On Other screen');
    game = true;
    player = 'p2';
  }

  else if(msg.slice(0,4) === '0003'){
    console.log('X: '+msg.slice(5,6)+'\nY: '+msg.slice(7,8));

    $('#ball').css({'top':+msg.slice(7,8)+'px'})
    $('#ball').css({'left':+msg.slice(5,6)+'px'})
  }
  else{
      ob = JSON.parse(msg);
      if (ob.type === 'cords'){
        if (ob.screen === player){
          $('#ball').css({display: 'block'});
          $('#ball').css({'top':+ob.y+'px'});
          $('#ball').css({'left':+ob.x+'px'});
        }
        else{
          $('#ball').css({display: 'none'});
        }
      }
  }
}

//When A Connection Is Established To The WebSocket
ws.onopen = function(){
  console.log('Connected To WebSocket!');
}
//test = {'type':'login','message':'p1'};
//ws.send(JSON.stringify(test))

//When The Connection Is Closed
ws.onclose = function(){
  console.log('Disconnected From WebSocket!');
}

function sendMsg(msg,type){
  amsg = {
    'type':type,
    'message':msg
  };
  ws.send(JSON.stringify(amsg));
}
