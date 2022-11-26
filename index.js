const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var employeeArr = [];

const mainTemplate = (body) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<header>Team Profile Generator</header>
<body>
 <div class="row row-cols-1 row-cols-md-2 g-4">${body}
  </div>
</body>
</html>`;

const generateManager = ({ name, id, email, officeNumber }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Manager</h5> 
    <h5 class="card-title">${name}</h5>
    <div class="card-body">
    <img src= "assets/images/icons8-businessman-skin-type-1-100.png" alt="manager"/>
        <p class="card-text">${id}</p>
        <div>${email}</div>
        <div>${officeNumber}</div>
      </div>
     </div>
    </div>`;

const generateEngineer = ({ name, id, email, gitHub }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Engineer</h5> 
    <h5 class="card-title">${name}</h5>
    <div class="card-body">
    <img src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/null/external-engineer-labour-day-nawicon-outline-color-nawicon.png" alt="engieer"/>
        <p class="card-text">${id}</p>
        <div>${email}</div>
        <div>${gitHub}</div>
      </div>
     </div>
    </div>`;

const generateIntern = ({ name, id, email, school }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Engineer</h5> 
    <h5 class="card-title">${name}</h5>
    <div class="card-body">
    <img src="https://img.icons8.com/ios-filled/50/null/internship.png" alt="intern"/>
        <p class="card-text">${id}</p>
        <div>${email}</div>
        <div>${school}</div>
      </div>
     </div>
    </div>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Manager's Name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Manager's Id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Manager's Email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's office number?",
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArr.push(manager);
        createTeam();
    });

function createTeam() {
    //inquire prompt asking what memebers to add to the team 
    //build, add, or done
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer',
                message: "Would you like to add an Engineer?",
                //if yes call addEngineer function
                //if no move below
            },
            {
                type: 'input',
                name: 'intern',
                message: "Would you like to add an Intern?",
                //if yes call addIntern function
                //if no move below
            },
            {
                type: 'input',
                name: 'complete',
                message: "Would you like to complete the team?",
                //if yes call buildTeam function
                //if no re-call createTeam function
            },
        ])
        .then((answers) => {
            if (answers.prompt(engineer) === "yes") {
                addEngineer();
            } else if (answers.prompt(intern) === "yes") {
                addIntern();
            } else if (answers.prompt(complete) === "yes") {
                buildTeam();
            } else {
                createTeam();
            }
        })
};


function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's Name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Engineer's Id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Engineer's Email?",
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is your engineer's Git-Hub profile url?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            employeeArr.push(engineer);
            createTeam();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Intern's Name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Intern's Id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Intern's Email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your Intern's School?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArr.push(intern);
            createTeam();
        });

}

function buildTeam() {

    let employeeContent = "";
    for (let index = 0; index < employeeArr.length; index++) {
        const employee = employeeArr[index];
        if (employee.getRole() === "Manager") {
            employeeContent += generateManager(employee);
        }
        if (employee.getRole() === "Engineer") {
            employeeContent += generateEngineer(employee);
        }
        if (employee.getRole() === "Intern") {
            employeeContent += generateIntern(employee);
        }
        else return;
    };

    const htmlPageContent = mainTemplate(employeeContent);
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created team profile index.html!')
    );
}