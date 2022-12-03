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
  <link rel="stylesheet" href="./dist/style.css" />
  <title>Document</title>
</head>
<header class="header">Team Profile Generator</header>
<body class="body">
 <div class="row row-cols-1 row-cols-lg-2 g-4">${body}
  </div>
</body>
</html>`;

const generateManager = ({ name, id, email, officeNumber }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Manager</h5> 
    <h5 class="card-title">Name: ${name}</h5>
    <div class="card-body">
    <img src= "assets/images/icons8-businessman-skin-type-1-100.png" alt="manager"/>
        <p class="card-text badge">ID: ${id}</p>
        <div><a href= "mailto: ${email}">${email}</a></div>
        <div>Office Number: ${officeNumber}</div>
      </div>
     </div>
    </div>`;

const generateEngineer = ({ name, id, email, gitHub }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Engineer</h5> 
    <h5 class="card-title">Name: ${name}</h5>
    <div class="card-body">
    <img src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/null/external-engineer-labour-day-nawicon-outline-color-nawicon.png" alt="engieer" class="img"/>
        <p class="card-text badge">ID: ${id}</p>
        <div><a href= "mailto: ${email}">${email}</a></div>
        <div><a href="https://github.com/${gitHub}" target="_blank">Github</a></div>
      </div>
     </div>
    </div>`;

const generateIntern = ({ name, id, email, school }) =>
    `<div class="col">
    <div class="card">
    <h5 class="card-title">Intern</h5> 
    <h5 class="card-title">Name: ${name}</h5>
    <div class="card-body">
    <img src="https://img.icons8.com/ios-filled/50/null/internship.png" alt="intern" class="img"/>
        <p class="card-text badge">ID: ${id}</p>
        <div><a href= "mailto: ${email}">${email}</a></div>
        <div>School: ${school}</div>
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
    //added optionsArr so user can select what they'd like to do next
    const optionsArr = [
        {
            name: "add an Engineer"
        },
        {
            name: "add an Intern"

        },
        {
            name: "Complete the team"
        }];

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'proceed',
                message: "Would you like to do?",
                //added choices and changed to list type, name:proceed
                choices: optionsArr
            }
        ])
        //added .then statement to send user to proper function based on input
        .then((data) => {
            if (data.proceed === "add an Engineer") {
                addEngineer();
            }
            if (data.proceed === "add an Intern") {
                addIntern();
            }
            if (data.proceed === "Complete the team") {
                buildTeam();
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
                message: "What is your engineer's Git-Hub username?",
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

};

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
    };

    const htmlPageContent = mainTemplate(employeeContent);
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created team profile index.html!')

    )
};
