const http = require("http");
const fs = require("fs");

const port = 3000;
const renderPage = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      console.log(url);
      renderPage("./about.html", res);
    } else {
      renderPage("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`server running in port ${port}...`);
  });

// const server = http.createServer((req, res) => {
//   res.writeHead("Hello gaes");
//   res.end();
// });

// server.listen(8000);
