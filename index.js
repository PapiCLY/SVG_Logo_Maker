//modules import
const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([
    {
    type: 'list',
    name: 'ChooseShape',
    message: 'choose shape',
    choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'list',
        name: 'ChooseColor',
        message: 'choose color',
        choices: ['pink', 'blue', 'green']
    },
    {
        type: 'input',
        name: 'lettersForLogo',
        message: 'input 1-3 letters',
        validate: (input)=>{
            if(input.length >= 1 && input.length <=3){
                return true; 
            } else{
                return 'up to 3 letters only, please!'
            }
        },
    }
])

inquirer.prompt(questions).then((answers) => {
    const { lettersForLogo, ChooseColor, ChooseShape } = answers;
    const shape = ChooseShape;
    let svg = '';
    
    shape.setColor(ChooseColor);
    
    if (shape === 'triangle') {
        svg = triangle(lettersForLogo);
    } else if (shape === 'circle') {
        svg = circle(lettersForLogo);
    } else if (shape === 'square') {
        svg = square(lettersForLogo);
    }   
    fs.writeFile('logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })

});
    