// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
    {
        type: "input",
        name: "header",
        message: "?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    {
        console.log(initNote);
    
        inq.prompt(questions).then((answers) =>
        {
            # ${userAnswers.projectTitle}

            ## Description
            ${userAnswers.description}
            
            ## Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [Questions](#questions)
            
            ## Installation
            ${userAnswers.installation}
            
            ## Usage
            ${userAnswers.usage}
            
            ## License
            ${userAnswers.license}
            
            ## Contributing
            ${userAnswers.contributing}
            
            ## Tests
            ${userAnswers.tests}
            
            ## Questions
            GitHub: [${userAnswers.githubUsername}](https://github.com/${userAnswers.githubUsername})
            Email: ${userAnswers.email}
            ;
    
         
    


}

// Function call to initialize app
init();
