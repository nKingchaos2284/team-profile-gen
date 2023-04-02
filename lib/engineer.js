const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.symbol = "&#128736;";
        this.class = "Engineer";
    }

    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;

//Employee +
//gitHub
//getGitHub()
//getRole() Overridden to return 'Engineer'