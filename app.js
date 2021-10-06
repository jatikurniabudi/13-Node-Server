const http = require("http");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      console.log(url);
      res.write("Ini halaman about loh");
      res.end();
    } else {
      //   res.write("halo gaes");
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
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
