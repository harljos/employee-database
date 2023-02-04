SELECT *
FROM department;

SELECT role.id, role.title, department.name AS department, role.salary
FROM role
JOIN department ON department.id = role.department_id;

SELECT *
FROM employee;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department ,role.salary, employee.manager_id = employee.id AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;
