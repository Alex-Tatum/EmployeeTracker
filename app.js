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

