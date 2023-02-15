const inquirer = require("inquirer");
const get = require("./get");

// prompts the user for input to add department
const addDepartmentPrompt = [
    {
        type: "input",
        message: "What is the name of the department:",
        name: "name"
    }
];

// // prompts the user for input to add role
// const addRolePromts = [
//     {
//         type: "input",
//         message: "What is the role title:",
//         name: "title"
//     },
//     {
//         type: "input",
//         message: "What is the role salary:",
//         name: "salary"
//     },
//     {
//         type: "list",
//         message: "Select the department the role is apart of:",
//         name: "department",
//         choices: get.getDepartments(db)
//     }
// ];

// adds the department input by user to database
const addDepartment = (db) => {
    inquirer.prompt(addDepartmentPrompt).then((data) => {
        db.query(`INSERT INTO department (name) VALUES (?)`, data.name).then(() => {
            console.log(`Added ${data.name} to database`);
        })
    });
}

// adds a role to the database
const addRole = (db) => {
    // prompts the user for input to add role
    const addRolePromts = [
        {
            type: "input",
            message: "What is the role title:",
            name: "title"
        },
        {
            type: "input",
            message: "What is the role salary:",
            name: "salary"
        },
        {
            type: "list",
            message: "Select the department the role is apart of:",
            name: "department",
            choices: get.getDepartments(db)
        }
    ];
    
    inquirer.prompt(addRolePromts).then((data) => {
        const department = get.getIndexDepartment(db, data.department);
        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, data.title, data.salary, department).then(() => {
            console.log(`Added ${data.title} to database`);
        })
    });
}

module.exports = {
    addDepartment,
    addRole
}