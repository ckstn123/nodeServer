var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(3000, function () {
    console.log("start!! port 3000")
});

console.log("비동기라 내가 먼저 출력!");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//url mapping
app.get('/', function (req,res) {
    console.log("test");
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', function (req,res) {
    console.log(req.body.email);
    res.send("<h1> Welcome " + req.body.email + "</h1>");

});