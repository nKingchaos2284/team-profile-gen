const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can input office number through constructor", () => {
    const testInput = "101";
    const employ = new Manager("Ken", 4, "example@example.com", testInput);
    expect(employ.officeNumber).toBe(testInput);
});

test("Can get office number through getOfficeNumber() function", () => {
    const testInput = "101";
    const employ = new Manager("Ken", 4, "example@example.com", testInput);
    expect(employ.getOfficeNumber()).toBe(testInput);
});

test("getRole() should return \"Manager\"", () => {
    const testInput = "Manager";
    const employ = new Manager("Ken", 4, "example@example.com", 101);
    expect(employ.getRole()).toBe(testInput);
});

//Employee +
//officeNumber 
//getOfficeNumber()
//getRole() Overridden to return 'Manager'