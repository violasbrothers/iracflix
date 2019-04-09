var http = require("http");

const PORT = process.env.PORT || 8080;

var express = require('express');
var file = express();
file.use(express.static(__dirname));
var app = http.createServer(file).listen(PORT);
