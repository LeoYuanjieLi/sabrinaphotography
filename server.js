const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(port, ()=>`App listening on port ${port}!`);