const { createServer } = require("http");
const { parse } = require("url");

const server = createServer((req, res) => {
  const pathname = parse(req.url, true).pathname;

  if (pathname === "/") {
    res.end("Hello World!");
  } else if (pathname === "/test") {
    res.end("Test!");
  } else {
    res.end("URL Not Found!");
  }
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
