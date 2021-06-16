const http = require('http').createServer();
const io = require('socket.io')(3000);

const port = 3000
var chat_history = "";

io.on('connection', (socket) => {
    console.log('connected');
    let nick;
    socket.on('message', (data) => {
        let final_message = "";
        const mess = data.replace(/(\r\n|\n|\r)/gm, "");
        if(!nick){
            nick = mess;
            final_message = "Do chatu dołączył " + nick;
        } else {
            final_message = nick + ": " + mess;
        }
        console.log(final_message);
        chat_history += final_message + "\n";
        socket.send(chat_history);
    });

    setInterval(function(){
        socket.send(chat_history);
    }, 2500);
});

io.on('disconnect', (evt) => {
    console.log('disconnected');
})
