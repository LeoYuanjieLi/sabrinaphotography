const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendfile(__dirname + '/index.html');
});

app.get('/gallery', (req, res) => {
    // res.send('Hello Express');
    res.send("photo gallery");
});

app.get('/about', (req, res) => {
    // res.send('Hello Express');
    res.send("about page");
});

app.get('/contact', (req, res) => {
    // res.send('Hello Express');
    res.send("contact page");
});

app.listen(port, ()=>`App listening on port ${port}!`);