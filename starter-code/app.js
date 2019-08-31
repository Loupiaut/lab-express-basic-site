const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname,"/views/partials"));

app.get("/",(req, res) => {
  res.render("index")
})

app.get("/gallery", (req, res) => {
  res.render("gallery")
})

app.get("/about", (req, res) => {
  res.render("about")
})

const listener = app.listen(4000, () => {
  console.log(`server running @ http://localhost:${listener.address().port}`)
})