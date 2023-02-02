const startPrompts = [
    {
        type: "list",
        message: "Select an option:",
        name: "option",
        choices: ["view all departments", "view all roles", "view all employees", , "add a role", "add an employee", "update an employee role"]
    }
]

module.exports = {startPrompts}