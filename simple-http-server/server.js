//ECHO is on.
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api') {
        // Set response headers
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // Send JSON response
        res.end(JSON.stringify({ message: 'Hello from the API!' }));
    } else {
        // Handle invalid routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
