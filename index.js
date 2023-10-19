// Modules import
const inquirer = require('inquirer');
const fs = require('fs');
const { triangle, circle, square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'ChooseShape',
      message: 'Choose a shape',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'list',
      name: 'ChooseColor',
      message: 'Choose a color',
      choices: ['pink', 'blue', 'green'],
    },
    {
      type: 'input',
      name: 'lettersForLogo',
      message: 'Input 1-3 letters',
      validate: (input) => {
        if (input.length >= 1 && input.length <= 3) {
          return true;
        } else {
          return 'Up to 3 letters only, please!';
        }
      },
    },
  ])
  .then((answers) => {
    const { lettersForLogo, ChooseColor, ChooseShape } = answers;
    let svg = '';
    const side = 100;
    const height = 100;
    const base = 100;
    const radius = 40;
    

    if (ChooseShape === 'triangle') {
      svg = triangle(lettersForLogo, ChooseColor);
    } else if (ChooseShape === 'circle') {
      svg = circle(lettersForLogo, ChooseColor);
    } else if (ChooseShape === 'square') {
      svg = square(lettersForLogo, ChooseColor);
    }

    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
