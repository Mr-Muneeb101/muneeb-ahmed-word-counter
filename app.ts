#! /usr/bin/env node
import inquirer from "inquirer";
async function wordCounter() {
    console.log(`=========================================================================================`);
    console.log(`\t\tWelcome to Neebs Word Counter Program \t`);
    console.log(`========================================================================================= `);


    let sentence = await inquirer.prompt([
        {
            name: "user_setence",
            type: "input",
            message: " \n \t Please enter the Sentence and I will return you the number of Words :)\n",
            validate: (s) => {
                if (s) {
                    return true
                } else {
                    return `Please Enter the Sentence`
                }
            }
        }
    ]);

    let arrofWords: string[] = sentence.user_setence.split(" ");
    console.log(`========================================================================================= `);
    console.log(` \n \t Here is the total Words that you enterd \t \n`);
    arrofWords.forEach((word, index) => {
        console.log(`${index + 1} : ${word}`);
    });
    console.log(`========================================================================================= `);

    console.log("number of words: " + arrofWords.length);

}
wordCounter();