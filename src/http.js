const http = require('http');

let server = http.createServer(function (req, res) {
        res.setHeader("Content-type", "text/html");
           

      res.write(`<h1>Hello World</h1> </br> <p> This is Purusottam kumar </p>`); 
      res.end(); 
    });

    server.listen(5050, () => console.log("The server is running on port 5050")); 