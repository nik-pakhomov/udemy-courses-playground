const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather", name: "Nikita Pakhomov" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Nikita Pakhomov" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Help is on the way!",
    title: "Help",
    name: "Nikita Pakhomov",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "It's snowing", location: "Saint-Petersburg" });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Nikita Pakhomov",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Nikita Pakhomov",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
