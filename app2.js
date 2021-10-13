//web server with Express

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const user = [
    {
      nama: "Bambang",
      email: "bambang@gmail.com",
    },
    {
      nama: "Pamungkas",
      email: "pamungkas@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Bambang",
    user,
    layout: "layout/main-layout",
    title: "Ini Home",
  });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {
    title: "Ini Halaman About",
    layout: "layout/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Ini Halaman Contact",
    layout: "layout/main-layout",
  });
});

app.use("", (req, res) => {
  res.status(404);
  res.send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
