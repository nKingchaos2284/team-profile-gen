const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.symbol = "&#128081;";
        this.class = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

//Employee +
//officeNumber 
//getOfficeNumber()
//getRole() Overridden to return 'Manager'