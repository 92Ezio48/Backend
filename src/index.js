const http = require("http");
const fs = require("fs");
const url = require("url");
const { getUsers } = require("./modules/users");
const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const query = parsedUrl.query;

  // Обработка разных случаев
  if ("hello" in query) {
    const name = query.hello;
    if (name) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end(`Hello, ${name}.`);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("Enter a name");
    }
  } else if ("users" in query) {
    try {
      const users = getUsers();
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(users));
    } catch {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify([]));
    }
  } else if (Object.keys(query).length === 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World!");
  } else {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("");
  }
});
const PORT = process.env.PORT || 3003;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
