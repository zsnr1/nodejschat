var socket = require('socket.io-client')('http://10.0.0.64:3000');
const repl = require('repl')
const chalk = require('chalk');

socket.on('disconnect', function () {
    socket.emit('disconnect')
});
socket.on('connect', () => {
    console.log(chalk.red('=== start chat ==='))
})
socket.on('message', (data) => {
    console.clear();
    console.log(chalk.green(data));
})
repl.start({
    prompt: '',
    eval: (cmd) => {
        socket.send(cmd)
    }
})