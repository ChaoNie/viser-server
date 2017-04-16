var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/test', function(req, res) {
    var python = require('child_process').spawn('python', ['test.py']);
    var output = "";
    python.stdout.on('data', function(data) { output += data; });
    python.on('close', function(code) {
        if (code != 0) {
            console.log("Refused one...");
            return res.status(500).send(output);
        }
        console.log("Got one...");
        return res.status(200).send(output);
    });
});

app.post('/testPost', function(req, res) {
    var rawString = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
    });

    var python = require('child_process').spawn('python', ['test.py', body]);
    var output = "";
    python.stdout.on('data', function(data) { output += data; });
    python.on('close', function(code) {
        if (code != 0) {
            console.log("Refused one...");
            return res.status(500).send(output);
        }
        console.log("Got one...");
        return res.status(200).send(output);
    });
});

console.log("App started listening on 8080.......");
app.listen(8080);