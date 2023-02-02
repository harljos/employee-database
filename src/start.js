const startPrompts = [
    {
        type: "list",
        message: "Select an option:",
        name: "option",
        choices: ["View all departments", "View all roles", "View all employees", "Add a role", "Add an employee", "Update an employee role"]
    }
]

module.exports = {startPrompts}