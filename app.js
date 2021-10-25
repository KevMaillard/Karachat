const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;
// const host = '0.0.0.0';

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)

})

io.on('connection', (socket) => {
    console.log("Un utilisateur s'est connecté");

    socket.on('disconnect', () => {
        console.log("Un utilisateur s'est déconnecté");
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});


server.listen(PORT, () => {
     console.log('Server Start port 8080')
})

