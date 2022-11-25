const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">My Id is: ${id}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My Email is ${email}</li>
      <li class="list-group-item">Office Number: ${officeNumber}</li>
    </ul>
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

