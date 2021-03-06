var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/cgpa', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cgpa.html'));
});

app.get('/ui/javascriptfile.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'javascriptfile.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/styled.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styled.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/prof.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prof.jpg'));
});
var counter=0;
app.get('/ui/counter', function (req, res) {
    counter =counter+1;
  res.send(counter.toString());
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
