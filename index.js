//modules import
const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([
    {
    type: 'list',
    name: 'shapeChoice',
    message: 'choose shape',
    choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'choose shape',
        choices: ['triangle', 'circle', 'square']
    }
])
.then(answers)