
var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spoon"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected");
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node!');
}).listen(8080);