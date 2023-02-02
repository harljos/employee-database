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

module.exports = {
    displayDepartments
}