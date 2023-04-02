const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.symbol = "&#127891;";
        this.class = "Intern";
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern;

//Employee +
//school
//getSchool()
//getRole() // Overridden to return 'Intern'