const express = require("express");
//creating app const
const app = express();

//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Cart app listening at http://localhost:${port}");
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for signup
app.get("/register", (req, res) => {
  res.render("register");
});
//route for signin
app.get("/login", (req, res) => {
  res.render("login");
});

//pass requests to the router middleware
const router = require("./routes/apis");
app.use(router);
