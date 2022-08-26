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

const fetchPortfolioImages = (url) => {
    return fetch(`${url}/json/portfolio-images.json`)
        .then(res => res.json())
        .then(data => Object.values(data))
        .catch(err => console.log(err));
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/overmij', (req, res) => {
    res.render('about');
});

app.get('/portfolio', async (req, res) => {
    const protocol = req.protocol;
    const host = req.headers.host;
    const url = `${protocol}://${host}`;

    const portfolioImages = await fetchPortfolioImages(url);
    const shuffledPortfolioImages = await shuffleArray(portfolioImages);

    res.render('portfolio', { shuffledPortfolioImages });
});

app.get('/tarieven', (req, res) => {
    res.render('prices');
});

app.get('/tarieven/:pakket', (req, res) => {
    const package = req.params.pakket.split('-').join(' ');
    res.render('prices-package', { package });
});

app.use((req, res) => {
    res.status(404).send('Sorry, could not find the page you were looking for.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});