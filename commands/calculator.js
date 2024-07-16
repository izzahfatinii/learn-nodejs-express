#!/usr/bin/env node

/*  Example of creating custom command
    Resource: https://medium.com/@vishwasacharya/node-js-magic-crafting-command-line-tools-for-efficiency-871ecbb563eb  

    Extra note;
    -   '#!/usr/bin/env node' is called shebang. It allow ro run the command without directly, `./commands/calculator.js -a 5,10,15`
        Without shebang, need to run `node ./commands/calculator.js -a 5,10,15`
        Refer: https://alexewerlof.medium.com/node-shebang-e1d4b02f731d 
*/

const { Command } = require('commander');

const program = new Command();
program
    .version('1.0.0')
    .description('A simple calculator tool')
    .option('-a, --add <numbers>', 'Add numbers', add)
    .option('-s, --subtract <numbers>', 'Subtract numbers', subtract);

function add(numbers) {
    const numArray = numbers.split(',').map(Number);
    const result = numArray.reduce((acc, num) => acc + num, 0);
    console.log('Result:', result);
}

function subtract(numbers) {
    const numArray = numbers.split(',').map(Number);
    const result = numArray.reduce((acc, num) => acc - num);
    console.log('Result:', result);
}

program.parse(process.argv); 