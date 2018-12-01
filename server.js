const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendfile(__dirname + '/index.html');
});

app.listen(port, ()=>`App listening on port ${port}!`);