// gets all departments and puts them in an array
const getDepartments = (db) => {
    db.query("SELECT name FROM department", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            const departments = results.map(deparmtent => deparmtent.name);
            console.log(departments);
            return departments;
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
            console.log(employees);
            return employees;
        }
    });
}

// gets index of department
const getIndexDepartment = (db, deparmtent) => {
    const deparmtents = getDepartments(db);
    for (let i = 0; deparmtents.length; i++) {
        if (deparmtents[i] = deparmtent) {
            return i;
        }
    }
}

module.exports = {
    getDepartments,
    getEmployees,
    getIndexDepartment
}