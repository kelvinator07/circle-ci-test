const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello Kelvin, welcome to AWS Cloud!");
});
server.listen(3030);
