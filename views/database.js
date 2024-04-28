const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path"); // Require the path module
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "akshita!@#",
  database: "dictionary",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.post("/submit", (req, res) => {
  const firstName = req.body["First_Name"];
  const lastName = req.body["Last_Name"];
  const email = req.body["Contact_Info"];
  const password = req.body["User_Password"];
  const dob = req.body["DOB"];
  const query =
    "INSERT INTO Users (First_Name, Last_Name, Contact_Info, User_Password, DOB) VALUES (?,?,?,?,?)";
  connection.query(
    query,
    [firstName, lastName, email, password, dob],
    (err, results) => {
      if (err) {
        console.error("Error inserting user:", err);
        return;
      }
      console.log("User inserted successfully");
      res.redirect("/");
    }
  );
});

const PORT = process.env.PORT || 3000; // Use environment variable for port if available
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
