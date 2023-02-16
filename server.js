const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const start = require("./src/start");
const display = require("./src/display");
const add = require("./src/add");
const update = require("./src/update");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employee_db"
  },
  console.log("connected to the db")
);

// prompts display when app is initialized
const init = () => {
    inquirer
        .prompt(start.startPrompts)
        .then((data) => {
          switch (data.option) {
              case "View all departments":
                display.displayDepartments(db);
                break;
              case "View all roles":
                display.displayRoles(db);
                break;
              case "View all employees":
                display.displayEmployees(db);
                break;
              case "Add a department":
                add.addDepartment(db);
                break;
              case "Add a role":
                add.addRole(db);
                break;
              case "Add an employee":
                add.addEmployee(db);
                break;
              case "Update an employee role":
                update.updateEmployee(db);
                break;
            }
        })
        // .then(() => {
        //   init();
        // })
}

// init();

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});