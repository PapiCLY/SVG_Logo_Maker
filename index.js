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

inquirer.prompt([questions).then((answers)=>{
    const {ChooseShape, ChooseColor, lettersForLogo} = answers;
    const shape = ChooseShape;
    let svg = '';

    shape === 'triangle' ? svg = `<svg width="100" height="100">` : svg = `<svg width="100" height="100">`;

    fs.writeFile('logo.svg', svg, (err)=>{
        if(err) throw err;
        console.log('file created')
    })
}

inquirer.prompt(questions).then((answers)=>{
    const {ChooseShape, ChooseColor, lettersForLogo} = answers;

.then((answers)=>{
console.log(answers)
})