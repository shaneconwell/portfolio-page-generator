const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'FirstName LastName',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live?',
        default: 'Planet Earth',
      },
      {
        type: 'input',
        name: 'bio',
        message: 'Describe yourself:',
        default: "(I'm going to procrastinate and write this later) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
                        
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your linkedIn URL?',
        default: 'https://www.linkedin.com/'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github URL?',
        default: 'https://github.com/'
      },
      {
        type: 'input',
        name: 'portfolio',
        message: 'What is you portfolio URL?',
        default: 'https://github.com/topics/portfolio'
      },
      
  ])
  .then((data) => {
    fs.writeFile('./generatePortfolio/index.html', generateHTML(data), (err) =>
      err ? console.log(err) : console.log('Generating Portfolio...')
    );

  });

