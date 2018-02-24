var http=require('http');

http.createServer(function(request,response){
    response.end("This is hello world");
}).listen(3000);
