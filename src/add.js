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
            message: "What is the role title?:",
            name: "title"
        },
        {
            type: "input",
            message: "What is the role salary?:",
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

// adds an employee to the database
const addEmployee = (db) => {
    // prompts the user for input to add an employee
    const employees = get.getEmployees(db);
    employees.push("doesn't have manager");
    const addEmployeePromts = [
        {
            type: "input",
            message: "What is the employee's first name?:",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is their last name?:",
            name: "last_name"
        },
        {
            type: "list",
            message: "Select the role the employee has:",
            name: "role",
            choices: get.getRoles(db)
        },
        {
            type: "list",
            message: "Who is their manager:",
            name: "manager",
            choices: employees
        }
    ];
    
    inquirer.prompt(addEmployeePromts).then((data) => {
        const role = get.getIndexRole(db, data.role);
        const manager = get.getIndexEmployee(db, data.manager);
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, data.title, data.salary, role, manager).then(() => {
            console.log(`Added ${data.first_name} ${data.last_name} to database`);
        })
    });
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}