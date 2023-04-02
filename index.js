const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const html = require("./src/htmlTemp");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamBuild = ``;

async function main () {
    try {
        await prompt()

        for (let i = 0; i< teamArray.length; i++) {
            teamBuild = teamBuild + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHtml(teamBuild)

        console.log(teamBuild)

        writeFileAsync("./dist/index.html", finalHtml)
    } catch (err) {
        return console.log(err);
    }

};

async function prompt() {
    let responseDone = "";
    
    do{
        try{
            response = await inquirer.prompt([

                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the employee's ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the employee's email address:"
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's business role?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let responseTwo = "";

            if (response.role === "Engineer") {
                responseTwo = await inquirer.prompt([{
                    type: "input",
                    name: "z",
                    message: "Please enter the employee's GitHub username:",
                }, ]);

                const engineer = new Engineer(response.name, response.id, response.email, responseTwo.z);
                teamArray.push(engineer);
            } else if (response.role === "Intern") {
                responseTwo = await inquirer.prompt([{
                    type: "input",
                    name: "z",
                    message: "What school is the employee attending?",
                }, ]);

                const intern = new Intern(response.name, response.id, response.email, responseTwo.z);
                teamArray.push(intern);
            } else if (response.role === "Manager") {
                responseTwo = await inquirer.prompt([{
                    type: "input",
                    name: "z",
                    message: "Please enter the employee's office number:"
                }, ]);

                const manager = new Manager(response.name, response.id, response.email, responseTwo.z);
                teamArray.push(manager);
            }
        } catch (err) {
            return console.log(err);
        }
        console.log(teamArray)

        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you have more employees to input?",
            choices: [
                "Yes",
                "No"
            ]
        }, ]);

    } while (responseDone.finish === "Yes");
}

main();