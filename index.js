const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected\n', "socket");

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('disconnect', (socket) => {
    console.log('user disconnected\n',"socket");
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});