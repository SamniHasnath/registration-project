import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let userData; // store form data

// Show registration form
app.get("/", (req, res) => {
  res.render("register.ejs");
});

// Handle form submit
app.post("/register", (req, res) => {
  userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  res.render("success.ejs", { user: userData });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});