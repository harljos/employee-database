const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "books_db"
  },
  console.log("connected to the db")
);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});