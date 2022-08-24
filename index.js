const express = require('express');
const app = express();
const PORT = process.env.PORT || 5151;
// const compression = require('compression');
// require('dotenv').config();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require('socket.io');
// const io = new Server(server);
const fetch = require('node-fetch');

fetch('http://localhost:5151/test.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/overmij', (req, res) => {
    res.render('about');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.use((req, res) => {
    res.status(404).send('Sorry, could not find the page you were looking for.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});