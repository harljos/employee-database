// displays deparmtents on a table
const displayDepartments = (db) => {
    db.query("SELECT * FROM department", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.table(results);
        }
    });
}

// displays all roles on a table
const displayRoles = (db) => {
    db.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON department.id = role.department_id", function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.table(results);
        }
    })
}


module.exports = {
    displayDepartments,
    displayRoles
}