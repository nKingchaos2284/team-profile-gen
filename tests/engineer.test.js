const Engineer = require("../lib/engineer");

test("Can input GitHub account through constructor", () => {
    const testInput = "gitHubUser";
    const employ = new Engineer("Kevin", 66, "example@example.com", testInput);
    expect(employ.gitHub).toBe(testInput);
});

test("Can get GitHub username through getGitHub() function", () => {
    const testInput = "gitHubUser";
    const employ = new Engineer("Kevin", 66, "example@example.com", testInput);
    expect(employ.getGitHub()).toBe(testInput);
});

test("getRole() should return \"Engineer\"", () => {
    const testInput = "Engineer";
    const employ = new Engineer("Kevin", 66, "example@example.com", "gitHubUser");
    expect(employ.getRole()).toBe(testInput);
});

//Employee +
//github
//getGitHub()
//getRole() Overridden to return 'Engineer'