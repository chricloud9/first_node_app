var http = require('http');

var server = http.createServer(function(request, response){
	console.log('got a request');
  // we now want to have a response object to 
  // send back
	response.write('hi');
	response.end();
});
//you can't go higher than 65,555	
server.listen(3000)