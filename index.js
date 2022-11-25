const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
var employeeArr = [];

const generateManager = ({ name, id, email, officeNumber }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
 <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
    <h5 class="card-title"> Manager </h5> 
    <h5 class="card-title">${name}</h5>
    <div class="card-body">
    <img src= "assets/images/icons8-businessman-skin-type-1-100.png" alt="manager"/>
        <p class="card-text">${id}</p>
        <div>${email}</div>
        <div>${officeNumber}</div>
      </div>
     </div>
    </div>
  </div>
</body>
</html>`;

inquirer
    .prompt([
        {
            // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            type: 'input',
            name: 'name',
            message: 'What is your manager Name?',
        },
        {
            // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            type: 'input',
            name: 'id',
            message: 'What is your manager Id?',
        },
        {
            // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            type: 'input',
            name: 'email',
            message: 'What is your manager Email?',
        },
        {
            // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            type: 'input',
            name: 'officeNumber',
            message: 'What is your manager Office Number?',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateManager(answers);
        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully added manager to index.html!')
        );
    });

