var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
app.get('/', function(req, res) {
    res.send('Hello');
});
app.post('/numbers', (req, res) => {
    const { first, second } = req.body;
    console.log(req.body);
    if (!isNaN(Number(first)) && !isNaN(Number(second))) {
        var sum = +first + +second;
        res.send({ sum });
    } else {
        res.status(400).send({ error: 'Wrong input' });
    }
});
app.listen(3012, function() {
    console.log('Listening port: 3012');
});
