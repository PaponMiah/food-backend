const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Food Backend is running");
});

server.listen(5000, () => {
    console.log("Food Backend Started");
    console.log("Server is actually listening on port 5000");
});
