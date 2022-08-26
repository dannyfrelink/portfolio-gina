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

const fetchPortfolioImages = () => {
    return fetch('http://localhost:5151/portfolio-images.json')
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
    const portfolioImages = await fetchPortfolioImages();
    const shuffledPortfolioImages = await shuffleArray(portfolioImages);
    console.log(shuffledPortfolioImages)
    res.render('portfolio', { shuffledPortfolioImages });
});

app.use((req, res) => {
    res.status(404).send('Sorry, could not find the page you were looking for.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});