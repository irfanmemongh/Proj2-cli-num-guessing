#! /usr/bin/env node
import inquirer from "inquirer";

const randomnumber=Math.floor(Math.random() * 10+1);

const answers=await inquirer.prompt([
{
name: "userguessednumber",
type: "number",
message: "Please guess any one number between 1 to 10: ",

},

]);
if (answers.userguessednumber === randomnumber){
console.log ("Congratulations!! You guessed very right number.")
}
else {
console.log ("Sorry!! you guessed wrong number");
}