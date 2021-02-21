// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input


const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GPL",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What kind of contributions do you want to be made to this project?"
    }
];
 

const promptUser = () => {
    return inquirer
        .prompt(questions);
}

// TODO: Create a function to write README file
const init = async () => {
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")

        const answers = await promptUser();

        const fileContent = generateMd(answers);

        await writeToFile("./output/README.md", fileContent);

        console.log("README.md created in output folder.");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

// Function call to initialize app
init();