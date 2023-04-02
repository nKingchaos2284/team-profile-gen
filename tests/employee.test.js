const Employee = require("../lib/employee");

test("Can create new object Employee", () => {
    const employ = new Employee();
    expect(typeof(employ)).toBe('object');
});

test("Can input name through constructor", () => {
    const name = "Kyle";
    const employ = new Employee(name);
    expect(employ.name).toBe(name);
});

test("Can input id through constructor", () => {
    const testInput = 23;
    const employ = new Employee("Kyle", testInput);
    expect(employ.id).toBe(testInput);
});

test("Can input email through constructor", () => {
    const testInput = "example@example.com";
    const employ = new Employee("Kyle", 23, testInput);
    expect(employ.email).toBe(testInput);
});

test("Can get name through getName() function", () => {
    const testInput = "Kyle";
    const employ = new Employee(testInput);
    expect(employ.getName()).toBe(testInput);
});

test("Can get id through getId() function", () => {
    const testInput = 23;
    const employ = new Employee("Kyle", testInput);
    expect(employ.getId()).toBe(testInput);
});

test("Can get email through getEmail() function", () => {
    const testInput = "example@example.com";
    const employ = new Employee("Kyle", 23, testInput);
    expect(employ.getEmail()).toBe(testInput);
});

test("getRole() should return \"Employee\"", () => {
    const testInput = "Employee";
    const employ = new Employee("Kyle", 23, "example@example.com");
    expect(employ.getRole()).toBe(testInput);
});


// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() "Returns Employee"