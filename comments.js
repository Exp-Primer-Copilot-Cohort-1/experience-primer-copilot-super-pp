// Create web server

// Load HTTP module
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

// Create HTTP server and listen on port 8000 for requests
http
  .createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body "Hello World"
    res.write("Hello World\n");

    // Read the content of the file
    fs.readFile("index.html", function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write("Not Found!");
      } else {
        res.write(data);
      }

      // Send the response body
      res.end();
    });
  })
  .listen(8000);

// Print URL for accessing server
console.log("Server running at http://      localhost:8000/");
