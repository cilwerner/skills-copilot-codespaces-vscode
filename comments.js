// Create web server application
// Run: node comments.js
// Input: http://localhost:8080/comments
// Output: comments.json

// Import modules
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Set header
    res.writeHead(200, {'Content-Type': 'application/json'});
    // Read file
    fs.readFile('comments.json', 'utf8', function(err, data) {
        // Check error
        if (err) throw err;
        // Write data
        res.write(data);
        // End response
        res.end();
    });
}).listen(8080); // Set port

// Print message
console.log('Server running at http://localhost:8080/comments');