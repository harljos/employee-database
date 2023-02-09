const inquirer = require("inquirer");

// prompts the user for input to add department
const addDepartmentPrompt = [
    {
        type: "input",
        message: "What is the name of the department:",
        name: "name"
    }
];

// adds the department input by user to database
const addDepartment = (db) => {
    inquirer.prompt(addDepartmentPrompt).then((data) => {
        db.promise().query(`INSERT INTO department (name) VALUES (?)`, data.name).then(() => {
            console.log(`Added ${data.name} to database`);
        })
    })
}

module.exports = {
    addDepartment,
}