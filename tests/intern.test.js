const Intern = require("../lib/intern");

test("Can input school through constructor", () => {
    const testInput = "UCSC";
    const employ = new Intern("Karl", 93, "example@example.com", testInput);
    expect(employ.school).toBe(testInput);
});

test("Can get school through getSchool() function", () => {
    const testInput = "UCSC";
    const employ = new Intern("Karl", 93, "example@example.com", testInput);
    expect(employ.getSchool()).toBe(testInput);
});

test("getRole() should return \"Intern\"", () => {
    const testInput = "Intern";
    const employ = new Intern("Karl", 93, "example@example.com", "UCSC");
    expect(employ.getRole()).toBe(testInput);
});

//Employee +
//school
//getSchool()
//getRole() // Overridden to return 'Intern'