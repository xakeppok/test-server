var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json()) 
app.get("/", function(req, res) {
  res.send("Hello");
});
app.post("/numbers", (req, res) => {
    console.log("req", req.body);
    const {first, second} = req.body;
  var sum = +first + +second;
  console.log(first);
  res.send({sum});
});

app.listen(3012, function() {
  console.log("Start");
});
