USE employeeTracker_db;

-- Insert data into the department table
INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Customer Service");

-- Insert data into the role table

INSERT INTO role (title, salary, department_id)
VALUES ("Director of Marketing", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Social Media Specialist", 60000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Director of Sales", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Account Executive", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Egineering Manager", 100000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Full Stack Developer", "90000", 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Manager", "100000", 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Specialist", "50000", 4);


-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harry", "Potter", "1", null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ron", "Weasley", "2", "1");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hermione", "Granger", "3", null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sirius", "Black", "4", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luna", "Lovegood", "5", null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Fred", "Weasley", "6", "5");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("George", "Weasley", "7", null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Neville", "Longbottom", "8", "7");
