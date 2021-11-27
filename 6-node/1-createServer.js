const http = require("http");
const fs = require("fs");

const PORT = "9001";

const server = http.createServer(function (req, res) {
  let url = req.url;

  if (req.url === "/") {
    url = "/1-createServer.html";
  }
  if (req.url === "/favicon.ico") {
    return res.writeHead(404);
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(fs.readFileSync(__dirname + url));
});

server.listen(PORT);

console.warn("\x1b[32m", `server is listening at localhost:${PORT}...`);
