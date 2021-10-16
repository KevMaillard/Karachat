const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;

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


server.listen(PORT, "localhost", () => {
     console.log('Server Start port 8080')
})