const http = require("http");

http
  .createServer((req, res) => {
    res.write("halo gaes");
    res.end();
  })
  .listen(3000, () => {
    console.log("server running in port 3000");
  });

// const server = http.createServer((req, res) => {
//   res.writeHead("Hello gaes");
//   res.end();
// });

// server.listen(8000);
