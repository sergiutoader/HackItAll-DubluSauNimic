const http = require('http');
var express = require('express');
const pug = require('pug');
const fs = require('fs');
var app = express();

app.set('view engine', 'pug')

var html=pug.compileFile('profile.pug',{ pretty: true});

fs.writeFile('profile.html',html(),(err) => { 
  if (err) 
    console.log(err); 
});

html=pug.compileFile('index.pug',{ pretty: true});
fs.writeFile('index.html',html(),(err) => { 
  if (err) 
    console.log(err); 
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  var path = req.url;

  console.log(path);

  if(path==="/"){

	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/html');
		res.write(fs.readFileSync(__dirname + '\\index.html', 'utf8'));
	  res.end();
	}
	else
	{
		if(path.endsWith(".css"))
		{
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(fs.readFileSync(__dirname + path, 'utf8'));
      res.end();
		}
		if(path.endsWith(".js"))
		{
		
			res.writeHead(200, {'Content-Type': 'text/js'});
			res.write(fs.readFileSync(__dirname + path, 'utf8'));
      res.end();
		}
		if(path.endsWith(".html"))
		{		
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(fs.readFileSync(__dirname + path, 'utf8'));
      res.end();
		}
		if(path.endsWith(".png"))
		{		
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(fs.readFileSync(__dirname + path, 'utf8'));
      res.end();
		}

	}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}