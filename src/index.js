#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"; //NPM package that provides an easy way to capture user input in Node. js command line interface applications.
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// console.log(chalk.bgCyan('hi dad'));
let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const karaokeTitle = chalkAnimation.karaoke(
        'ByteBrain: Are You A Programming Virtuoso? \n'

    );

    await sleep();
    karaokeTitle.stop();
        
    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a process on your computer.
        If you get any question wrong, I will be ${chalk.bgRed('killed')}
        So... get all the questions right....
    `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
      spinner.error({ text: `😵😵😵 Game over, you lose ${playerName}!` });
      process.exit(1);
    }
  }

  async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playerName = answers.player_name;
  }
  
  function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n Make your VS Studio code look amazing! https://javascript.plainenglish.io/how-to-make-visual-studio-code-look-amazing-253d0b33b40d `, 
    (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.green(
          `Why do programmers prefer dark mode? Because light attracts bugs.`
        )
      );
      process.exit(0);
    });
  }
  
  async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'What does the acronymn F.I.R.S.T stand for concerning unit testing?\n',
        choices: [
            'A) Fast, Independent, Replicable, Structured, Thorough',
            'B) Flexible, Inclusive, Reusable, Secure, Timely',
            'C) Fast, Independent, Repeatable, Self-validating, Timely',
            'D) Functional, Interoperable, Robust, Scalable, Thorough' 
        ],
    });

    return handleAnswer(answers.question_1 === 'C) Fast, Independent, Repeatable, Self-validating, Timely');

  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What does the S.O.L.I.D principle stand for in the context of object-oriented programming?\n',
      choices: [
        'A) Structured, Optimal, Lightweight, Intelligent, Dynamic',
        'B) Scalable, Object-Oriented, Lightweight, Inclusive, Dynamic',
        'C) Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
        'D) Secure, Organized, Lightweight, Integrated, Dynamic'
      ],
    });
    return handleAnswer(answers.question_2 === 'C) Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `In computer programming, what is an array? \n`,
      choices: [
        'A) A collection of unordered key-value pairs',
        'B) A data structure that stores elements in a sorted manner',
        'C) A linear data structure that stores elements of the same type in contiguous memory locations',
        'D) A collection of objects with various properties and methods'
      ],
    });
  
    return handleAnswer(answers.question_3 === 'C) A linear data structure that stores elements of the same type in contiguous memory locations');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which of the following is NOT a primitive type in JavaScript?\n',
      choices: [
        'A) boolean',
        'B) number',
        'C) null',
        'D) object', // Correct
      ],
    });
    return handleAnswer(answers.question_4 === 'D) object');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: 'In object oriented programming, what is a class?\n',
      choices: [
        'A) An instance of an object',
        'B) The blueprint from which individual objects are created',
        'C) A data structure used for organizing collections of elements',
        'D) A specialized function that performs a specific task'
      ],
    });
  
    return handleAnswer(answers.question_5 === '');
  }
  
  /* Using await outside of an asynchronous function. Possible because node.js supports 
top level await. */

  // Run it with top-level await
  //console.clear();
  //await welcome();
  //await askName();
   await question1();
  // await question2();
  //await question3();
  //await question4();
 // await question5();
 // winner();



