const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj ilosć metrów? ', (metry) => {
    metry = Number(metry);
    const yardy = metry * 1.0939;
    console.log(chalk.blue(`Wynik to ${yardy}`))
  rl.close();
});