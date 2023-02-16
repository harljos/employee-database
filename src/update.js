const inquirer = require("inquirer");
const get = require("./get");

// updates an employee's role
const updateEmployee = (db) => {
    // prompts the user for input to update an employee's role
    const updateEmployeePrompts = [
        {
            type: "list",
            message: "Select the employee:",
            name: "employee",
            choices: get.getEmployees(db)
        },
        {
            type: "list",
            message: "What is their updated role?",
            name: "role",
            choices: get.getRoles(db)
        }
    ];
    
    inquirer.prompt(updateEmployeePrompts).then((data) => {
        const employee = get.getIndexEmployee(db, data.employee);
        const role = get.getIndexRole(db, data.role);
        db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, role, employee).then(() => {
            console.log(`Updated ${data.employee}`);
        })
    });
}

module.exports = {updateEmployee}
