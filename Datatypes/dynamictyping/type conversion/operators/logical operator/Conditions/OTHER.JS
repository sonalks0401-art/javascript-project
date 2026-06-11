// INPUT FROM USER BASED QUESTION

/*let age = prompt("Enter age");
console.log(age);*/  //HTML


// NORMAL CODE
const readline = require("readline"); //imports the readline module
   //const readline stores it in a variable named readline.
    //const means this variable cannot be reassigned.

const rl = readline.createInterface({ 
    //Creates a readline interface.
    //This interface allows Node.js to take input from the user.
    //rl is just a variable name (short for Read Line).

    input: process.stdin,

    //stdin means standard input.
    //It tells Node.js to read input from the keyboard.

    output: process.stdout

    //stdout means standard output.
    //It tells Node.js to display output on the terminal screen.
});

    //Closes the createInterface() statement.

rl.question("Enter age: ", (age) => {

    //question() displays the message:

    console.log(age);
    rl.close();
});

//23


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", (answer) => {
    let age = Number(answer);

    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You cannot vote");
    }

    rl.close();
});

// enter age = 20
// you can vote



