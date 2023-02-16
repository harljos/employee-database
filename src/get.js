// gets all departments and puts them in an array
const getDepartments = (db) => {
    db.query("SELECT name FROM department", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            const departments = results.map(deparmtent => deparmtent.name);
            return departments;
        }
    });
}

// gets all roles and puts them in an array
const getRoles = (db) => {
    db.query("SELECT title FROM role", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            const roles = results.map(role => role.title);
            console.log(roles);
            return roles;
        }
    });
}

// gets all departments and puts them in an array
const getEmployees = (db) => {
    db.query("SELECT first_name, last_name FROM employee", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            const employees = results.map(employee => {
                return `${employee.first_name} ${employee.last_name}`;
            });
            return employees;
        }
    });
}

// gets index of department name
const getIndexDepartment = (db, deparmtent) => {
    const deparmtents = getDepartments(db);
    for (let i = 0; deparmtents.length; i++) {
        if (deparmtents[i] = deparmtent) {
            return i;
        }
    }
}

// gets index of role title
const getIndexRole = (db, role) => {
    const roles = getRoles(db);
    for (let i = 0; roles.length; i++) {
        if (roles[i] = role) {
            return i;
        }
    }
}

// gets index of employee
const getIndexEmployee = (db, employee) => {
    const employees = getEmployees(db);
    for (let i = 0; employees.length; i++) {
        if (employees[i] = employee) {
            return i;
        }
    }
    return null;
}

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    getIndexDepartment,
    getIndexRole,
    getIndexEmployee
}