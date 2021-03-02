// Dependencies 
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const mysql = require("mysql");
require("console.table");

//Create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jeffmx480",
    database: "employeeTracker_db"
});

//initiat connection with mysql
connection.connect(function(err) {
    if (err) throw err;
    displayLogo();
    promptUser();
});

//Display Logo
function displayLogo(){
    const logoText = logo(
        {
            name: "Employee Tracker",
            lineChars: 20,
            padding: 2,
            margin: 2,
            borderColor: 'blue',
            logoColor: 'bold-green',
        }
    ).render();
console.log(logoText);
}

//Prompting the User
function promptUser(){
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "what would you like to do?",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add an Employee",
            "Add a Role",
            "Update an Employee's Role",
            "Remove an Employee",
            "Exit Application"
        ]
    })
    .then((answer) => {
        switch(answer.action) {
  
          case "View All Employees":
          viewAllEmployees();
          break;
  
          case "View All Departments":
          viewAllDepts();
          break;
  
          case "View All Roles":
          viewAllRoles();
          break;
  
          case "Add an Employee":
          addEmployee();
          break;
  
          case "Add a Department":
          addDepartment();
          break;
  
          case "Add a Role":
          addRole();
          break;
  
          case "Update an Employee's Role":
          updateRole();
          break;
  
          case "Remove an Employee":
          removeEmployee();
          break;
  
          case "Exit Application":
          connection.end();
          console.log("Thank you. You are now exiting the application.");
          process.exit();
          break;
        }
      });
    }
  
// A FUNCTION TO DISPLAY ALL EMPLOYEES
function viewAllEmployees() {
    // SQL query to get all of the employees from the database
  const query = `
  SELECT employee.id AS ID, employee.first_name AS 'FIRST NAME', employee.last_name AS 'LAST NAME', role.title AS ROLE, department.name AS DEPARTMENT, role.salary AS SALARY, CONCAT(manager.first_name, ' ', manager.last_name) AS MANAGER 
  FROM employee LEFT JOIN role on employee.role_id = role.id 
  LEFT JOIN department on role.department_id = department.id 
  LEFT JOIN employee manager on manager.id = employee.manager_id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table("\n", res, "\n");
        promptUser();
    });
  };
  
// A FUNCTION TO DISPLAY ALL DEPARTMENTS
function viewAllDepts() {
    // SQL query to get all of the departments from the database
  const query  = `SELECT id AS ID, name as DEPARTMENT FROM department;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table("\n", res, "\n");
    promptUser();
});
};
