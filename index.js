const express = require('express');
const app = express();
const PORT = process.env.PORT || 5151;
const fetch = require('node-fetch');
const compression = require('compression');

// Vervangen met https://www.ginatenhoope.com/
const fetchPortfolioImages = (url) => {
    return fetch(`${url}/json/portfolio-images.json`)
        .then(res => res.json())
        .then(data => Object.values(data))
        .catch(err => console.log(err));
}

// let portfolioImages;
// fetchPortfolioImages()
//     .then(img => portfolioImages = img);

app.use(compression());
app.use(express.static('static'));
app.set('view engine', 'ejs');

// Dutch routes
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

    res.render('portfolio', { portfolioImages });
});

app.get('/tarieven', (req, res) => {
    res.render('prices');
});

app.get('/tarieven/:pakket', (req, res) => {
    const package = req.params.pakket.split('-').join(' ');
    res.render('prices-package', { package });
});

app.get('/bedankt', (req, res) => {
    res.render('thanks');
});

// English routes
app.get('/en', (req, res) => {
    res.render('en/home');
});

app.get('/en/overmij', (req, res) => {
    res.render('en/about');
});

app.get('/en/portfolio', async (req, res) => {
    const protocol = req.protocol;
    const host = req.headers.host;
    const url = `${protocol}://${host}`;
    const portfolioImages = await fetchPortfolioImages(url);

    res.render('en/portfolio', { portfolioImages });
});

app.get('/en/tarieven', (req, res) => {
    res.render('en/prices');
});

app.get('/en/tarieven/:pakket', (req, res) => {
    const package = req.params.pakket.split('-').join(' ');
    res.render('en/prices-package', { package });
});

app.get('/en/bedankt', (req, res) => {
    res.render('en/thanks');
});

app.use((req, res) => {
    res.status(404).send('Sorry, could not find the page you were looking for.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});