//Acceptance Criteria
// GIVEN a command - line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// WHEN I select the engineer option
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

inquirer
    .prompt([
        {
            // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
        },
        {
            // WHEN I decide to finish building my team
            // THEN I exit the application, and the HTML is generated
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

