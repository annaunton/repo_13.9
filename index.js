
var http = require('http');
var fs = require('fs');

var server = http.createServer();


server.on('request', function(request, response) {

response.setHeader("Content-Type", "text/html; charset = utf-8");	

if (request.url === '/') {


	fs.readFile('./index.js', 'utf-8', function(err, data) { 
		if(err) throw err;
		response.write(data);
		response.end();

	});

} else {
	 	
	fs.readFile('./error.png', function(err, content) { 
		if(err) throw err;
		//response.setHeader("Content-Type", "image/png");
		response.writeHead(200,{'Content-type':'image/png'});
		responce.write(content);
        response.end();

	});
}

});

server.listen(9000);


/*var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {

	response.write('Hello world');
	response.end();

});

server.listen(9000);*/

/*var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {

	response.setHeader("Content-Type", "text/html; charset = utf-8");

	if (request.method === 'GET' && request.url === '/hello') {
		response.write('<h1>Hello world!</h1>');
		response.end();

	} else {
		response.statusCode = 404;
		response.write('<h1>Zła ścieżka</h1>');
		response.end();
	}


});

server.listen(8080);*/


